const findBestEmployee = function(employees) {
  const values = Object.values(employees);
  let maxTasks = Math.max(...values);

  const entries = Object.entries(employees);
  for (const entry of entries) {
    const employeeName = entry[0];
    const tasksQuantity = entry[1];
    if (tasksQuantity === maxTasks) {
      return employeeName;
    }
  }
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
