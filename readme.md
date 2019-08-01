
[![Lintly](https://lintly.com/gh/progys/play-with-react-redux/badge.svg)](https://lintly.com/gh/progys/play-with-react-redux/)
# React + Redux playground
Draft application for playing around with React, Redux, Typescript. Using Immutable structures and redux-thunk middleware for asynchronous calls.

## Run application
`npm start` - starts app
`npm test` - runs tests
 
## How application works?
When a button is pressed application loads list of "funny" posts from Reddit and displays a thumbnail of a random one. It does not cache the posts. All posts are reloaded each time.

## What's next?
* Use RxJS for event handling
* Use Sagas
* Add link to original post
* Update feeds in bacground with service workers
