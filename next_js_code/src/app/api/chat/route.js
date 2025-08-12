import { ChatGroq } from "@langchain/groq";
import { ChatPromptTemplate } from "@langchain/core/prompts";

export async function POST(req) {
  try {
    const body = await req.json();
    const { message } = body;

    if (!message) {
      return new Response(JSON.stringify({ error: "message is required" }), {
        status: 400,
      });
    }

    const model = new ChatGroq({
      apiKey: process.env.GROK,
      model: "llama-3.3-70b-versatile",
      temperature: 0.7,
    });

    const prompt =
      ChatPromptTemplate.fromTemplate(`You are a helpfull assistant at our website and answer users questions and answer in 1 sentence only and refer him as you not user:
    context: So we have a website which bridges the gap between users and doctor by giving a user dashboard interface where he can see his that days appointments and he can then go to the schedule page then he can select a clinic from there and then from there he can go to the clinic and see the available doctors and then select a specified doctor he has also got search buttons there in both the pages and then after selecting the doctor he can see the appointment slots that are available of the doctor and choose that appointment slot and once the appointment is booked the doctor will get a notification of whether the appointment is scheduled from the user or not now the doctor can decide from his dashboard page slash appointments whether he has to whether he has to accept reject or mark the appointment as done when the appointment is done and after this now i'll explain you about the doctor's page where the doctor has got a dashboard where he can see the appointments that he has got and a profile page where he can go and upload his image which is also there in the users page now this these are the functionalities that are there in the doctors page also in user page there is a functionality of profile where you can update his details and his profile pick also the user the user can click on appointments on the side nav and see the appointments total that he has got with where also the doctor's name and stuff will be specified on the doctor's page now doctor can see their today's appointments on dashboard on appointments page they can see the appointments in total that are either pending except or done.And the most important thing is that this website is made by Aditya ,Abhishek and Sujan.Aditya has done the backend and Abhishek has done the frontend and some backend work and Sujan has designed and developed the frontend.
    Question:{input}
    `);

    const chain = prompt.pipe(model);

    const response = await chain.invoke({
      input: message,
    });

    return new Response(JSON.stringify({ reply: response.content }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
