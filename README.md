**MERN Stack Recipe App with JWT Authentication Documentation**
Live link: https://dynamic-kulfi-38a6d7.netlify.app/

**Introduction:**
This documentation provides a detailed overview of the MERN (MongoDB, Express, React, Node.js) stack recipe app with JWT (JSON Web Token) authentication. The application allows users to view, save, and create their own recipes. The front end is built using React and Material-UI, while the back end is deployed on render.com. Below are the key features, architecture, and instructions for running the application.

**Table of Contents:**
1. Overview
2. Key Features
3. Architecture
4. Requirements
5. Installation & Setup
6. How to Use
7. Future Improvements
8. Conclusion

**1. Overview:**
The MERN stack recipe app with JWT authentication is a web application that allows users to manage recipes in a user-friendly interface. Users can browse existing recipes, save their favorite recipes, and create new recipes to share with others. The application uses JWT for secure authentication and authorization of users.

**2. Key Features:**
- User Authentication: Users can sign up and log in to access the app's features. JWT is used for secure token-based authentication.
- Recipe Listing: The app displays a list of recipes with details like the recipe name, ingredients, and cooking instructions.
- Recipe Creation: Authenticated users can create their own recipes and share them with others.
- Save Favorite Recipes: Logged-in users can save recipes they like, and these recipes will be accessible from their profile.
- Material-UI: The front end is designed using Material-UI to provide an intuitive and visually appealing user interface.

**3. Architecture:**
The application follows the MERN stack architecture:
- **Frontend**: Built using React and Material-UI for the user interface.
- **Backend**: Developed using Node.js with Express for handling API requests and MongoDB as the database.
- **Authentication**: JWT (JSON Web Token) is used for user authentication and authorization.
- **Deployment**: The backend is deployed on render.com, while the front end can be hosted on Netlify.

**4. Requirements:**
- Node.js and npm are installed on the local machine.
- MongoDB database or connection URI (e.g., provided by MongoDB Atlas).
- render.com account or alternative hosting for backend deployment.

**5. Installation & Setup:**
Follow these steps to set up the MERN recipe app on your local machine:

**Backend Setup:**
1. Clone the repository from GitHub.
2. Navigate to the backend directory: `cd server`.
3. Install the required packages: `npm install`.
4. Create a `.env` file in the `backend` directory to store environment variables. Include the following variables:
   - `MONGODB_URI`: MongoDB connection URI. 
5. Run the backend server: `npm run nodemon`.

**Frontend Setup:**
1. Navigate to the frontend directory: `cd client`.
2. Install the required packages: `npm install`.
3. Open the `src/hooks.useGetRequestUrl.js` file and set the `REQUEST_URL` to your backend server URL.
4. Run the frontend development server: `npm start`.

**6. How to Use:**
- Upon opening the app, users are presented with a login/signup screen.
- Users can create an account or log in using their credentials.
- After authentication, users are directed to the recipe listing page, where they can view and interact with existing recipes.
- To create a new recipe, users can navigate to the "Create Recipe" page and fill in the necessary details.
- On the recipe detail page, users can view the full recipe and have the option to save it as a favorite.
- Users can access their saved/favorite recipes from their profile page.
- To log out, users can click on the logout button.

**7. Future Improvements:**
To enhance the application, you can consider implementing the following features:
- Add the ability for users to like and comment on recipes.
- Introduce categories or tags for recipes to improve searchability.
- Implement social sharing options for recipes.
- Include image uploading functionality for recipes.
- Enhance the UI with more animations and transitions.

**8. Conclusion:**
The MERN stack recipe app with JWT authentication provides a seamless platform for users to share, save, and create recipes. By following this documentation, you can set up and run the application on your local machine or deploy it to a hosting service. The app's modular architecture allows for easy future enhancements and scalability. Enjoy exploring and experimenting with this recipe app!
