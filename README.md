# User Profiles Advanced

## Overview
This is the **Advanced** version of the Simplyfi Softech ReactJS Frontend Developer Assignment. It is a single-page React application that fetches user data from a public API, displays it as responsive profile cards using Ant Design, and includes interactive features like liking, deleting, and editing user profiles. The application is designed to work seamlessly on mobile, tablet, and desktop screens, closely replicating the demo at [react-advanced-assignment.psamd.now.sh](https://react-advanced-assignment.psamd.now.sh/).

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

## Setup and Installation
1. **Clone the Repository**:
   ```
   git clone https://github.com/your-username/simplyfi-user-profiles-advanced.git
   cd simplyfi-user-profiles-advanced
```
2.**Install Dependencies**:
```
    npm install
```
3.**Run the Application**:
```
    npm start
```
The app will run at http://localhost:3000 in your default browser.

2.**Deployment**

The application is deployed on Vercel for live testing. Access it at:

Live URL: