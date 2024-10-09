
# Chef Wars - Culinary Competition Web App

Welcome to **Chef Wars**, Nigeria's premier culinary competition platform where the best chefs showcase their skills. This project allows chefs to register for the competition, showcase their skills, and engage with the culinary community.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Environment Variables](#environment-variables)
- [Folder Structure](#folder-structure)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

**Chef Wars** is an event-based platform built for showcasing culinary expertise in a competitive setting. It is built using **Next.js** with **Firebase Authentication** for user registration and login. Users can sign up for events, learn more about the competition, and interact with the platform through a smooth and elegant UI.

## Features

- **Authentication:** Users can register and log in via email/password or Google using Firebase.
- **Responsive Design:** The platform is fully responsive and adapts to all screen sizes.
- **Culinary Showcase:** Chefs can showcase their skills and compete with others.
- **Elegant UI/UX:** Designed with Framer Motion and Next.js to provide an intuitive user experience.
- **Event Registration:** Chefs can register for upcoming culinary events.
- **Mobile Navigation:** Optimized for both desktop and mobile navigation.
- **Dynamic Pricing Page (Upcoming):** Payment integration with Paystack and Stripe (soon).

## Technologies Used

- **Next.js** (Frontend Framework)
- **TypeScript** (Static Typing)
- **Firebase** (Authentication & Backend)
- **Framer Motion** (Animations)
- **Tailwind CSS** (Styling)
- **React Icons** (Icons)
- **Stripe & Paystack** (Payment Integration - Future)

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **Git**

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/chef-wars.git
   ```

2. Navigate to the project folder:
   ```bash
   cd chef-wars
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

### Running the Application

To run the app locally:

```bash
npm run dev
```
or
```bash
yarn dev
```

This will start the app on `http://localhost:3000`.

## Environment Variables

To configure the project, create a `.env.local` file in the root of your project and add the following:

```bash
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key
STRIPE_SECRET_KEY=your-stripe-secret-key

NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=your-paystack-public-key
PAYSTACK_SECRET_KEY=your-paystack-secret-key

NEXT_PUBLIC_FIREBASE_API_KEY=your-firebase-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-firebase-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-firebase-app-id
```

## Folder Structure

```
├── components      # Reusable components
├── pages           # Next.js page routes
│   ├── api         # API routes for backend services
│   ├── auth        # Authentication-related pages
│   └── register    # Chef registration page
├── public          # Static files (images, fonts, etc.)
├── styles          # Global styles and tailwind config
└── README.md       # Project documentation
```

## Future Enhancements

- **Payment Integration:** Add payment options via Paystack and Stripe for event registration.
- **Admin Dashboard:** Allow administrators to manage events and participants.
- **User Profiles:** Enable users to create and edit profiles, showcasing their culinary skills.

## Contributing

We welcome contributions to **Chef Wars**. If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
