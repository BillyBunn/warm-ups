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
- Listens on `process.env.PORT`<sup>[1](#resources)</sup>
- Serves static files from a folder called `./public`<sup>[2](#resources)</sup>
- Has a separate `routes.js` file for serving custom routes
  - handles a GET on '/' with a simple response of 'hello'<sup>[3](#resources)</sup>
  - handles a POST on '/save' with a JSON response containing the data posted to the server<sup>[4](#resources)</sup>

- Handles 404's<sup>[6](#resources)</sup> by serving the user a a custom page (.ejs<sup>[5](#resources)</sup>)
- Handles Errors<sup>[7](#resources)</sup> by serving the user a custom page (.ejs<sup>[5](#resources)</sup>)
  - log the actual error to the console
- Deploy to Heroku, via your master branch

#### Test

- Write tests for each route, the 404 page, and a simulated error
  - Use supertest
- Confirm tests passing at Travis, via the master branch

### Resources

1. [`dotenv` usage][dotenv]
2. [Serving static files][static]
3. [Basic routing in Express][routing]
4. JSON in Express
   - [`express.json` for requests with JSON payloads][express.json]
   - [`res.json` for JSON responses][res.json]
   - [`serve-static` middleware][serve-static]
5. [EJS with Express][ejs]
6. [Handling 404 responses][404]
7. [Error handling][500]

<!-- Resource links -->
[dotenv]: https://github.com/motdotla/dotenv#usage
[static]: https://expressjs.com/en/starter/static-files.html
[routing]: https://expressjs.com/en/starter/basic-routing.html
[express.json]: https://expressjs.com/en/api.html#express.json
[serve-static]: https://expressjs.com/en/resources/middleware/serve-static.html
[res.json]: https://expressjs.com/en/api.html#res.json
[ejs]: https://github.com/mde/ejs/wiki/Using-EJS-with-Express
[404]: https://expressjs.com/en/starter/faq.html#how-do-i-handle-404-responses
[500]: https://expressjs.com/en/starter/faq.html#how-do-i-setup-an-error-handler