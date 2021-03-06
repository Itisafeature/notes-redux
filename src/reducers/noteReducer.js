const noteReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_NOTE':
      return state.concat(action.data);
    case 'INIT_NOTES':
      return action.data;
    case 'TOGGLE_IMPORTANCE':
      const id = action.data.id;
      const noteToChange = state.find(note => note.id === id);
      const changedNote = {
        ...noteToChange,
        important: !noteToChange.important,
      };
      return state.map(note => (note.id !== id ? note : changedNote));
    default:
      return state;
  }
};

export const initializeNotes = notes => {
  return {
    type: 'INIT_NOTES',
    data: notes,
  };
};

export const createNote = content => {
  return {
    type: 'NEW_NOTE',
    data: {
      content,
      important: false,
    },
  };
};

export const toggleImportanceOf = id => {
  return {
    type: 'TOGGLE_IMPORTANCE',
    data: { id },
  };
};

export default noteReducer;
