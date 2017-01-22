function counter(state = [], action) {
  switch(action.type) {
    case 'COUNT_UP' :
      console.log("Incrementing Likes!!");
      let count = parseInt( state ) + 1;

      return count

    default:
      return state;
  }
}

export default counter;