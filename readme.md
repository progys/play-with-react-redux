[![Lintly](https://lintly.com/gh/progys/play-with-react-redux/badge.svg)](https://lintly.com/gh/progys/play-with-react-redux/)

#Redux+react playground
Draft application for learning React with Redux. Using Immutable structures and redux-thunk middleware for asynchronous calls.

##Run application
`yarn start` or `npm start` - starts webpack dev server with the application

`yarn build` or `npm run build` - builds the application.

##How application works?
When a button is pressed application loads list of "funny" posts from Reddit and displays a thumbnail of a random one. It does not cache the posts. All posts are reloaded each time. This will be improved.

##What's next?
* Cache posts
* Add link to original post
* Add routing and screens (for different topics)
* Configure dynamic view for topics
* Update feeds in bacground with service workers
