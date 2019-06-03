[daily]: ../warmup-daily

# Warm-Up: Express

## Setup

- On each day, create a new branch of this repository with the date
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
   - https://github.com/motdotla/dotenv#usage
- Serves static files from a folder called `./public`
   - https://expressjs.com/en/starter/static-files.html
- Has a separate `routes.js` file for serving custom routes
  - handles a GET on '/' with a simple response of 'hello'
     - https://expressjs.com/en/starter/basic-routing.html
  - handles a POST on '/save' with a JSON response containing the data posted to the server
     - https://expressjs.com/en/api.html#express.json
     - https://expressjs.com/en/resources/middleware/serve-static.html
     - https://expressjs.com/en/api.html#res.json
- Handles 404's by serving the user a a custom page (.ejs)
  - https://github.com/mde/ejs/wiki/Using-EJS-with-Express
  - https://expressjs.com/en/starter/faq.html#how-do-i-handle-404-responses
- Handles Errors by serving the user a custom page (.ejs)
  - log the actual error to the console
  - https://expressjs.com/en/starter/faq.html#how-do-i-setup-an-error-handler
- Deploy to Heroku, via your master branch

#### Test

- Write tests for each route, the 404 page, and a simulated error
  - Use supertest
- Confirm tests passing at Travis, via the master branch
