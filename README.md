# IEEE Hack Healthcare Appointment System

## Features
- User-friendly interface for patients  
- Appointment scheduling and management  
- Doctor availability tracking  
- Notification system for patients and doctors  

## Tech Stack
- **Frontend:** HTML, CSS, JavaScript, React  
- **Backend:** Node.js, Express  
- **Database:** MongoDB  
- **AI Integration:** Machine Learning models for scheduling optimization  

## Installation
1. Clone the repository:  
   ```bash  
   git clone https://github.com/ABHISHEKGORE2305/IEEE_hack.git  
   ```  
2. Navigate to the project directory:  
   ```bash  
   cd IEEE_hack  
   ```  
3. Install dependencies:  
   ```bash  
   npm install  
   ```  
4. Run the application:  
   ```bash  
   npm start  
   ```  

## Database Schema
- **Users:**  
  - `userId`: ObjectId  
  - `name`: String  
  - `email`: String  
  - `password`: String  

- **Appointments:**  
  - `appointmentId`: ObjectId  
  - `userId`: ObjectId (reference)  
  - `doctorId`: ObjectId (reference)  
  - `date`: Date  
  - `time`: Time  

## Authentication
- Implemented using JWT (JSON Web Tokens) for secure access management.  
- Registration and login endpoints are available for users.

## AI Integration
- Uses machine learning algorithms to suggest optimal appointment times based on historical data.

## Deployment
- The application can be deployed on platforms like Heroku or AWS.  
- For Heroku, you can use:
  ```bash
   git push heroku main
  ```

## Documentation
This documentation will be updated continuously as new features are implemented and the system evolves.