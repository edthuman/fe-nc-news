# Northcoders News App

NC News is an app that interacts with the API found at: https://github.com/edthuman/nc_news

The NC News app displays the information from a database of articles. The main page displays a list of articles, from which the user can select an individual article.

On selecting an article, users are able to read the article, vote on it, and view the related comments. If logged in, a users can add a comment of their own, as well as deleting any previous comments made with that login.

Users have the ability to filter the list of articles by topic, and may sort articles by creation date, number of votes, and comment count - with the direction of sorting selectable.

### Hosted App

Link to app: https://nc-new-edthuman.netlify.app/

### Cloning The Repository

To clone this repo, run the following command in your shell:

```console
$ git clone https://github.com/edthuman/nc_news
```

## Installation

In order to begin working on the project, please ensure that your Node.js version is higher than 21.5.0; you can check this by entering the following command in your terminal:

```console
$ node --version
```

Once you have confirmed your node version is appropriate, you then need to install npm, by running:

```console
$ npm install
```

This command automatically installs all of the dependencies required for this project to run.

## Working on the project

Will everything now installed, you can begin working on the project.

To check everything is working, it is helpful to run a local version of the app using:

```console
$ npm run dev
```

> **Note:**
> This may take a while to load.

Once this has finished loading, you should then see a link in your terminal which you can click to view the app, or you may also copy and paste the link into a browser.

> **Note:**
> The first time you load up the app, it can take a while for connection with the API to be established, so allow it some time for this to complete.

As you make changes to the code, you will be able to see the app update in real time.

## Errors
If at any point the app appears to be broken, do not worry! This will often happen as changes are being made, due to incomplete lines of code causing errors.

If the app is not behaving as expected, first check the terminal and your browser to see if they are displaying any error messages.

### The Inspector Tool
Your browser has an Inspector tool that will be very helpful with identifying errors.

The Inspector can be opened either by right-clicking the page and selecting 'Inspect', or clicking the F12 button on your keyboard.

Navigate to the console tab within the Inspector and check for any error messages. Error picked up by the Inspector will not necessarily be pointed out elsewhere, so it's important to keep an eye on the console - especially when testing the app.
