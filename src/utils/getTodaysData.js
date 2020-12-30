module.exports = (asString) => {
  const today = new Date();
  const data = {
    year: today.getFullYear(),
    month: today.getMonth()+1,
    day: today.getDate(),
  };
  if (asString)
    return `${data.year}-${data.month}-${data.day}`
  else
    return data
}