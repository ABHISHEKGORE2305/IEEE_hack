import isProtected from "@/components/ui/protected"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const page = async ()=>{
    // const user = await isProtected()
    // const appointments = await prisma.appointment.findMany({
    //     where: {
    //         userId: user.id
    //     }
    // })
    // console.log(appointments)
    return (
        <>
         <div className='h-15  bg-white flex p-2 items-center justify-between rounded-lg my-2'>
                            <div className='h-full aspect-square rounded-full overflow-hidden'>
                                <img width='100%' height='100%' src='https://images.genius.com/56b461c9f98922407a904c4bf0d9e863.943x943x1.jpg'></img>
                            </div>
                            <div className='font-thin w-30'>
                                app.user.name
                            </div>
                            <div className='font-semibold'>
                                app.date
                            </div>
                            <div className='font-semibold'>
                                app.time:00 
                            </div>
                            <div className='h-2/3 aspect-square'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM13 12V7H11V14H17V12H13Z"></path></svg>
                            </div>
                        </div>
                        <div className='h-15  bg-white flex p-2 items-center justify-between rounded-lg my-2'>
                            <div className='h-full aspect-square rounded-full overflow-hidden'>
                                <img width='100%' height='100%' src='https://images.genius.com/56b461c9f98922407a904c4bf0d9e863.943x943x1.jpg'></img>
                            </div>
                            <div className='font-thin w-30'>
                                app.user.name
                            </div>
                            <div className='font-semibold'>
                                app.date
                            </div>
                            <div className='font-semibold'>
                                app.time:00 
                            </div>
                            <div className='h-2/3 aspect-square'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM13 12V7H11V14H17V12H13Z"></path></svg>
                            </div>
                        </div>
                        <div className='h-15  bg-white flex p-2 items-center justify-between rounded-lg my-2'>
                            <div className='h-full aspect-square rounded-full overflow-hidden'>
                                <img width='100%' height='100%' src='https://images.genius.com/56b461c9f98922407a904c4bf0d9e863.943x943x1.jpg'></img>
                            </div>
                            <div className='font-thin w-30'>
                                app.user.name
                            </div>
                            <div className='font-semibold'>
                                app.date
                            </div>
                            <div className='font-semibold'>
                                app.time:00 
                            </div>
                            <div className='h-2/3 aspect-square'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM13 12V7H11V14H17V12H13Z"></path></svg>
                            </div>
                        </div>
                        <div className='h-15  bg-white flex p-2 items-center justify-between rounded-lg my-2'>
                            <div className='h-full aspect-square rounded-full overflow-hidden'>
                                <img width='100%' height='100%' src='https://images.genius.com/56b461c9f98922407a904c4bf0d9e863.943x943x1.jpg'></img>
                            </div>
                            <div className='font-thin w-30'>
                                app.user.name
                            </div>
                            <div className='font-semibold'>
                                app.date
                            </div>
                            <div className='font-semibold'>
                                app.time:00 
                            </div>
                            <div className='h-2/3 aspect-square'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM13 12V7H11V14H17V12H13Z"></path></svg>
                            </div>
                        </div>
                        <div className='h-15  bg-white flex p-2 items-center justify-between rounded-lg my-2'>
                            <div className='h-full aspect-square rounded-full overflow-hidden'>
                                <img width='100%' height='100%' src='https://images.genius.com/56b461c9f98922407a904c4bf0d9e863.943x943x1.jpg'></img>
                            </div>
                            <div className='font-thin w-30'>
                                app.user.name
                            </div>
                            <div className='font-semibold'>
                                app.date
                            </div>
                            <div className='font-semibold'>
                                app.time:00 
                            </div>
                            <div className='h-2/3 aspect-square'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM13 12V7H11V14H17V12H13Z"></path></svg>
                            </div>
                        </div>
                        
        </>
    )
}

export default page;