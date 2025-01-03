function addDays(days) {
  const date = new Date();
  console.log(days);
  console.log(date);
  date.setDate(date.getDate() + days);
  console.log(days);
  console.log(date);
  return date.toDateString();
}

export { addDays };
