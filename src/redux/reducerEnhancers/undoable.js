export function undoable(reducer) {

  // create an "upgraded" initial state
  const initialState = {
    past: [],
    present: reducer(undefined, {type: '@@INIT_UNDOABLE'}),
  };

  // return a reducer that handles the new state structure
  return function undoReducer(state = initialState, action) {
    const {past, present} = state;

    switch (action.type) {
      case 'UNDO':
        const previous = past[past.length - 1];
        const newPast  = past.slice(0, past.length - 1);
        return {
          past: newPast,
          present: previous,
        };

      default:
        const newPresent = reducer(present, action);
        if (present === newPresent) {
          return state
        }
        return {
          past: [...past, present],
          present: newPresent,
        }
    }
  }
}
