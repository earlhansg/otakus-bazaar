export const findProductImage = (path: string) => {
  const result = path.slice(8);
  return require(`../../images/${result}`);
};
