[daily]: ../warmup-daily

# Warm-Up: Express

## Setup

- On each day, create a new branch of this repo with the date
  - e.g., `11-22-2018`
- Create a JS folder with the same date name
  - e.g., `11-22-2018/`
- Follow the instructions below in that folder
- Timebox this to 1 hour
- Create a PR from that branch to master

## Warm-Up Exercise

**Before You Start** ... complete the [daily warm-up][daily]

The goal for this exercise is to build up muscle memory on basic server setup and operations. You'll be tasked with creating servers many times during your career and in projects. This should be the type of thing that you can construct nearly blindfolded, to give yourself a stable starting point from which to do your actual work.

#### Create

- Build an express web server. From Scratch. By Hand.
- Listens on `process.env.PORT`
- Serves static files from a folder called `./public`
- Has a separate `routes.js` file for serving custom routes
  - handles a GET on '/' with a simple response of 'hello'
  - handles a POST on '/save' with a JSON response containing the data posted to the server
- Handles 404's by serving the usera a custom page (.ejs)
- Handles Errors by serving the user a custom page (.ejs)
  - log the actual error to the console
- Deploy to Heroku, via your master branch

#### Test

- Write tests for each route, the 404 page, and a simulated error
  - Use supertest
- Confirm tests passing at Travis, via the master branch
