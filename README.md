# OneBio Next.js Starter

## Overview

This is a OneBio (https://oneb.io) starter project based on Next.js with TypeScript and Tailwind CSS. The goal of this project is to display a OneBio member's Thought Stream on their own website so they can configure the style of their thought stream to match their existing design, etc.

To get started, clone this project and update your configuration as follows:

---

## Set up Environment Variables

### Add your OneBio API Key

Add the following variables to your `.env` file. It should not be uploaded to version control, and will need to be added to the infrastructure provider you're deploying with (e.g., Vercel).

```
ONEBIO_API_KEY=your_api_key
ONEBIO_USERNAME=your_username (including the '@')
```

---

## How to Use

Run `yarn install` from the project directory on your local machine.

---

## Deploy on Vercel

You can deploy this app to the cloud with [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

### Deploy Your Local Project

To deploy your local project to Vercel, push it to GitHub/GitLab/Bitbucket and [import to Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=onebio-nextjs-starter).

**Important**: When you import your project on Vercel, make sure to click on **Environment Variables** and set them to match your `.env.local` file.
