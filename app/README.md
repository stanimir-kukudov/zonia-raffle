# Quick Setup Guide

Follow these easy steps to get your project up and running in no time!

## Install nvm

First things first, make sure you have Node Version Manager (nvm) installed. If not, follow the instructions to set it up.

## Install Docker and Docker Compose

We'll need Docker to manage our project environment. Install both Docker and Docker Compose by following the installation instructions for your operating system.

## Apply Configuration

Copy the example configuration file to make sure everything is set up correctly.

```bash
cp .env.template .env
```

## Setup Docker

Start the Docker containers with the following command:

```bash
docker-compose up -d
```

## Node Version

Ensure you're using the correct Node.js version with:

```bash
nvm use
```

## Install Dependencies

Install project dependencies using npm:

```bash
npm install
```

## Database Setup

Run the migrations:

```bash
# Import the database dump
# Run migrations
npm run migration:run
```

## Run in Dev Mode

Launch the project in development mode:

```bash
npm run start:dev
```

That's it! Your project should now be up and running smoothly. If you encounter any issues, refer to the documentation or seek help from the project community. Happy coding!
