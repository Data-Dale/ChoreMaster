# Deployment Instructions

## Setup the Development Environment
Clone the Repository:

git clone https://github.com/yourusername/chore-gamification-app.git
cd chore-gamification-app

## Install Backend Dependencies
cd backend
npm install

## Install Frontend Dependencies
cd ../frontend
npm install

## Setup Environment Variables:
Create a .env file in the backend directory and add the following variables:

PORT=5000
DB_URI=mongodb://localhost:27017/choregamification
JWT_SECRET=your_jwt_secret

## Run the Application Locally
cd ..
npm run dev

# Deploying the Backend on Heroku
## Login to Heroku
heroku login

## Create a New Heroku App
heroku create chore-gamification-backend

## Add MongoDB Addon (if using MongoDB Atlas, skip this step and use your Atlas URI)
heroku addons:create mongolab

## Set Environment Variables on Heroku
heroku config:set JWT_SECRET=your_jwt_secret
heroku config:set DB_URI=your_mongodb_uri

## Deploy to Heroku
git add .
git commit -m "Deploy backend"
git push heroku main

## Scale the Dynos
heroku ps:scale web=1

# Deploying the Frontend on Vercel
## Install Vercel CLI (if not already installed)
npm install -g vercel

## Login
vercel login

## Deploy the front end
cd frontend
vercel

## Follow The Prompts
Follow the prompts:

Set the project name.
Select the scope.
Choose the root directory (frontend).
Confirm the deployment.
Configure Environment Variables:

Go to your Vercel dashboard, navigate to your project settings, and add any necessary environment variables.

## Connecting Frontend to Backend
### Update API Endpoints:

Ensure that the frontend is pointing to the correct backend URL (Heroku endpoint) in the frontend/src/services/api.js file:

const API_URL = 'https://chore-gamification-backend.herokuapp.com/api';

### Redeploy the front end
cd frontend
vercel --prod

## Final Steps

### Verify Deployments:
Ensure both the frontend and backend are running smoothly by visiting their respective URLs.

### Set up a Continuous Deployment Pipeline (Optional):
Integrate GitHub with Heroku and Vercel for automatic deployments on every push to the main branch.


### Additional Notes
Database:
If using MongoDB Atlas, replace the DB_URI in the Heroku config with your Atlas connection string.
Security:

Ensure your JWT secret and any other sensitive information are securely stored in environment variables and not hardcoded.


