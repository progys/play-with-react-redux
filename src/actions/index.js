function newJoke(url) {
  return {
    type: 'NEW_JOKE',
    url,
  };
}

//TODO: cache result and display new joke from already downloaded reponse.
function loadJoke(){
  return dispatch => {
    return fetch(`https://www.reddit.com/r/funny.json`)
      .then(response => response.json())
      .then(json  => json.data.children)
      .then(children => dispatch(newJoke(children[Math.round(Math.random(children.length-1)*children.length)].data.thumbnail)))
  }
}

export { newJoke, loadJoke};
