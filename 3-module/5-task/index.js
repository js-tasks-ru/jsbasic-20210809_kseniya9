function getMinMax(str) {
  let newStr = str.split(" ").filter((item) => {
    if (!isNaN(item)) {
      return item;
    }
  });
  return {
    min: Math.min(...newStr),
    max: Math.max(...newStr),
  };
}
