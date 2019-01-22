
export function changeNameEntities(state, action) {
  return state.entities.map(el => {
    if(el === action.entity) {
      el['name'] = action.value;
    }
    return el
  });
}

export function changeTypeEntities(state, action) {
  return state.entities.map(el => {
    if(el === action.entity) {
      el['type'] = action.value;
    }
    return el
  });
}

export function changeIndexEntities(state, action) {
  return state.entities.map(el => {
    if(el === action.entity) {
      el['index'] = action.value;
    }
    return el
  });
}

export function plus(state, action) {
  const prev = state.entities;
  const index = prev.indexOf(action.entity);
  prev.splice(index + 1, 0, { name: 'name', type: 'string', index: '' });
  return prev
}
