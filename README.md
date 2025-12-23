# Synechrowd Foundation Website

A modern, responsive web application for the Synechrowd Foundation charitable trust.

## Features

- 🔐 Phone OTP Authentication (Mock)
- 👤 User Profile Creation and Management
- 🏠 Home Page with Foundation Information
- 📱 Fully Responsive Design
- 🎨 Modern UI with Tailwind CSS

## Tech Stack

- **React 18** - UI Library
- **React Router** - Navigation
- **Tailwind CSS** - Styling
- **Vite** - Build Tool

## Getting Started

### Installation

Dependencies are already installed. If you need to reinstall:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

Create a production build:

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Usage

### Login Flow

1. Enter any phone number on the login page
2. Use OTP: **123456** (for demo purposes, any 6-digit OTP will work)
3. After successful login, you'll be redirected to create your profile
4. Fill in your profile details (Name and Email are required)
5. Once profile is created, you'll be redirected to the home page

### Features

- **Login**: Phone OTP authentication with mock service
- **Profile**: Create and edit your profile information
- **Home**: View foundation information and mission
- **Header**: Access profile dropdown with edit and logout options

## Project Structure

```
src/
├── components/
│   ├── Header.jsx      # Header with profile dropdown
│   ├── Home.jsx        # Home page with foundation info
│   ├── Login.jsx       # OTP login component
│   └── ProfileForm.jsx # Profile creation/edit form
├── context/
│   └── AuthContext.jsx # Authentication state management
├── services/
│   └── authService.js  # Mock OTP authentication service
├── App.jsx             # Main app component with routing
├── main.jsx            # Entry point
└── index.css           # Global styles with Tailwind
```

## Mock Authentication

The app uses a mock OTP service for demonstration:
- Enter any phone number
- OTP will be logged to console: `123456`
- You can use `123456` or any 6-digit number to verify

## Notes

- User session and profile data are stored in localStorage
- The app automatically redirects based on authentication and profile status
- All routes are protected and require authentication

# synecrowd
