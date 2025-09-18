# User Profiles Advanced App


## Overview
The User Profiles Advanced App is a single-page React application that fetches and displays user data as responsive profile cards. Built with Ant Design and React, it features interactive functionality such as liking, editing, and deleting user profiles. The app is optimized for mobile, tablet, and desktop screens, ensuring a smooth and consistent user experience.

## Features
- **User Data Fetching**: Retrieves 10 user profiles from the JSONPlaceholder API (`https://jsonplaceholder.typicode.com/users`).
- **Dynamic Avatars**: Generates unique avatars for each user using the DiceBear Avatars API (`https://api.dicebear.com/9.x/avataaars/svg?seed={username}&mood=happy`).
- **Responsive Layout**: Uses Ant Design's `<Row>` and `<Col>` grid system to display 1–4 columns based on screen size (mobile: 1, tablet: 2, desktop: 3–4).
- **Loading Indicator**: Displays an Ant Design `<Spin>` component while fetching data.
- **Interactive Features**:
  - **Like**: Toggle a heart icon (`<HeartOutlined>`/`<HeartFilled>`) to mark a user as liked or unliked.
  - **Delete**: Remove a user from the list using a trash can icon (`<DeleteOutlined>`).
  - **Edit**: Open an Ant Design `<Modal>` with a `<Form>` to edit user details (name, email, phone, address, website, company), with changes reflected in the UI.
- **State Management**: Lifts state up to the parent `App.js` component to manage user data, likes, and edits across components.
- **Modern UI**: Uses Ant Design components (`<Card>`, `<Button>`, `<Modal>`, `<Form>`, `<Spin>`, `<Icon>`) for a polished, professional look.

## Tech Stack
- **React**: Frontend framework for building the single-page application.
- **Ant Design**: UI library for responsive grid, cards, buttons, modals, forms, and icons.
- **JavaScript (ES6+)**: For modern syntax and API fetching.
- **Node.js & npm**: For project setup and package management.
- **Create React App**: Boilerplate for initializing the React project.
- **CSS**: Minimal custom styles for card hover effects and layout tweaks.
- **APIs**:
  - User data: `https://jsonplaceholder.typicode.com/users`
  - Avatars: `https://api.dicebear.com/9.x/avataaars/svg`

## Project Structure

src/

├── components/

│   ├── UserCard.js

│   ├── EditModal.js

│   └── Loader.js

├── App.js

├── index.js

└── App.css


## Setup and Installation
2.Clone the Repository:
   ```
   git clone https://github.com/your-username/simplyfi-user-profiles-advanced.git
   cd simplyfi-user-profiles-advanced
```

2.Install Dependencies:
```
    npm install
```
3.**Run the Application**:
```
    npm start
```
The app will run at http://localhost:3000 in your default browser.

## Deployment

The application is deployed on Vercel for live testing. Access it at:

Live URL: https://user-profiles-advanced-mauve.vercel.app/

## License 
This project is licensed under the MIT License. 

## Author  
**Bhavana Yatham**  
 
- LinkedIn: http://www.linkedin.com/in/yatham-bhavana  
- GitHub: https://github.com/ybhavanareddy

