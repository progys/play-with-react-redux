#app-redux-react
This is a sample in progress application for learning React with Redux using Immutable structures and redux-thunk middleware for asynchronous call.

##Run application
`npm start` - starts webpack dev server with the application
`npm run build` - builds the application.

##How application works?
When a button is pressed application loads list of "funny" posts from Reddit and displays a thumbnail of a random one. It does not cache the posts. All posts are reloaded each time. This will be improved.
