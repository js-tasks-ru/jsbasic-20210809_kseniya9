function truncate(str, max) {
  if (str.length > max) {
    return str.slice(0, max - 1) + "…";
  } else {
    return str;
  }
}
