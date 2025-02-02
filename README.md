# backend
# Full-Stack Video Sharing Platform (YouTube Clone - Backend)

This repository contains the backend API for a video-sharing platform inspired by YouTube.  It provides a comprehensive set of features for managing users, videos, social interactions, playlists, and more.  Built with Node.js, Express.js, and MongoDB, this project demonstrates a strong understanding of backend development principles and best practices.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)


## Features

*   **User Authentication & Management:**
    *   Registration
    *   Login/Logout
    *   Password Management (change, reset)
    *   Profile Updates
    *   Profile & Cover Image Uploads (Cloudinary Integration)
    *   Channel Profile Retrieval (with subscription info and watch history)
*   **Video Management:**
    *   Video Uploads
    *   Video Editing
    *   Video Deletion
    *   Video Retrieval
    *   Thumbnail Generation (using Cloudinary transformations)
*   **Social Interactions:**
    *   Likes/Dislikes on Videos
    *   Comments (with editing and replies)
    *   Tweets (posting, editing, liking)
    *   Subscriptions (managing channel subscriptions)
*   **Playlists:**
    *   Playlist Creation
    *   Playlist Editing
    *   Playlist Deletion
    *   Adding/Removing Videos from Playlists
*   **Dashboard:**
    *   Displays key user statistics: Total Likes, Likes on Videos, Total Views, Total Uploaded Videos, Total Subscribers.

## Technologies

*   **Backend:** Node.js, Express.js
*   **Database:** MongoDB (using MongoDB Atlas)
*   **Authentication:** JWT (JSON Web Tokens)
*   **File Uploads:** Multer
*   **Cloud Storage & Processing:** Cloudinary
*   **Password Hashing:** bcrypt
*   **Testing:** Postman

## Installation

1.  Clone the repository: `git clone https://github.com/your-username/your-repo-name.git`
2.  Navigate to the project directory: `cd your-repo-name`
3.  Install dependencies: `npm install`
4.  Create a `.env` file in the root directory and add your environment variables (see `.env.example` for a template).  You'll need to configure your MongoDB Atlas connection string, Cloudinary credentials, JWT secret, and other sensitive information.
5.  Start the server: `npm start`

## Usage

Explain how to run the application and any relevant configuration options.  For example:

*   `npm start` (for development)
*   `npm run production` (for production)  (If you have a production script)
