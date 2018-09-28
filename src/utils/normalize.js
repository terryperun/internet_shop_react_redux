const normalize = arr =>
  arr.reduce(
    (acc, item) => {
      acc.ids.push(item.id);
      acc.entities[item.id] = item;
      return acc;
    },
    { ids: [], entities: {} },
  );

export default normalize;
