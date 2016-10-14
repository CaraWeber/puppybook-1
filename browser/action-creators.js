export const LOAD_PUPPIES = "LOAD_PUPPIES";
export const GET_PUPPY = "GET_PUPPY";
export const GET_PUPPIES_FROM_SERVER = 'GET_PUPPIES_FROM_SERVER';

export const loadPuppies = (allPuppies) => ({
  type: LOAD_PUPPIES,
  allPuppies: allPuppies
});


export const getPuppiesfromServer = () => {
  return (dispatch) => {
    return fetch('/api/puppies')
      .then(res => res.json())
      .then(puppies => dispatch(loadPuppies(puppies)))
      .catch(err => console.error(err.stack));
  }
}

export const getOnePuppy = (puppy) => ({
  type: GET_PUPPY,
  puppy
})

export const getSinglePuppy = (id) => {
  return (dispatch) => {
    return fetch(`/api/puppies/${id}`)
      .then(res => res.json())
      .then((singlePuppy) => dispatch(getOnePuppy(singlePuppy)))
      .catch(err => console.error(err.stack));
  }
}

