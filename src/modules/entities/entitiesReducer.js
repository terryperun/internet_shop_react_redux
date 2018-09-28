const initialState = {
  products: {},
};

export default function reducer(state = initialState, action) {
  if (action.payload && action.payload.entities) {
    const newEntities = Object.entries(action.payload.entities).reduce(
      (acc, [key, value]) => {
        Object.assign(acc, { [key]: { ...acc[key], ...value } });
        return acc;
      },
      { ...state },
    );

    return newEntities;
  }

  return state;
}
