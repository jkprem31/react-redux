const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case "TOGGLE_TODO":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "REMOVE_TODO":
      let idxToDelete;
      state.forEach((todo, idx) => {
        if (todo.id === action.id) idxToDelete = idx;
      });
      state.splice(idxToDelete, 1);
      return state;
    default:
      return state;
  }
};

export default todos;
