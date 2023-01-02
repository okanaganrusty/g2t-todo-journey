# Module 1: Project initialization

## Create a new react application

At the shell, we are going to run:

```bash
npx create-react-app@latest todo-frontend
```

This will create a new react application, once this command has completed and returned back to the prompt, you will have a directory called `todo-frontend`.

## Understanding the project layout

The following files from the project directory (relative pathnames to your project)

1. `public/index.html`: HTML page for the project.
    When run `npm start` and the server launches a new web browser, the web browser will send a `GET /` HTTP request to `https://localhost:3000`.  Because there is file being requested by the web browser, the web server will respond with the default content from `index.html`.  Bootstrapping the application.

1. `src/index.js`: JavaScript component and initial entrypoint into this react application.
    All react applications have an `index.js` entrypoint.

1. `src/index.css`: Stylesheet (css) for the entire project.

1. `src/App.js`: JavaScript component definition, implementing the <App /> component.
1. `src/App.css`: Stylesheet (css) for the App.js component.
1. `src/App.test.js`: JavaScript integration tests to validate the application component is working as expected.  These tests are run by using the `npm test` command, and are written in JavaScript.

1. `src/reportWebVitals.js`: Reports web vitals of the project to the console and browser.  This file is not needed for our project, but is included for development and debugging purposes.
1. `src/setupTests.js`: Setup script for testing react components.

1. `src/logo.svg`: React logo in SVG format.
