function sumSalary(salaries) {
  let salariesSum = 0;
  for (let key in salaries) {
    if (typeof salaries[key] === "number" && isFinite(salaries[key])) {
      salariesSum += salaries[key];
    }
  }
  return salariesSum;
}
