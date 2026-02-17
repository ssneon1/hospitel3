# Deployment Guide for Render

This guide explains how to deploy your Vite React application to Render.com using the configuration files we've created.

## Prerequisites

1.  **Git Repository**: Your code must be pushed to a Git provider (GitHub, GitLab, or Bitbucket).
2.  **Render Account**: You need an account on [https://render.com](https://render.com).

## Automatic Deployment (Recommended)

This method uses the `render.yaml` file to automatically configure your service.

1.  **Push your code** to your Git repository including the `render.yaml` file.
2.  Log in to your **Render Dashboard**.
3.  Click **New +** and select **Blueprint**.
4.  Connect your Git repository.
5.  Render will detect the `render.yaml` file and show you the proposed services (a Static Site named `hospital-website`).
6.  Click **Apply**.
7.  Render will automatically build and deploy your site.

## Manual Deployment

If you prefer to configure it manually:

1.  Log in to **Render Dashboard**.
2.  Click **New +** and select **Static Site**.
3.  Connect your Git repository.
4.  Use the following settings:
    *   **Name**: `hospital-website` (or any name you prefer)
    *   **Branch**: `main` (or your default branch)
    *   **Root Directory**: (leave blank)
    *   **Build Command**: `npm install && npm run build`
    *   **Publish Directory**: `dist`
5.  Click **Create Static Site**.

## Troubleshooting

-   **Build Failures**: Check the logs in the Render dashboard. Common issues include missing dependencies (make sure `package.json` is correct) or build errors in your code.
-   **Environment Variables**: If your app uses `.env` variables, you must add them in the Render Dashboard under **Environment**.
