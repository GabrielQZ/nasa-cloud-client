module.exports = (dateString) => {
  const dateArr = dateString.split('-');
  return {
    year: dateArr[0],
    month: dateArr[1],
    day: dateArr[2],
  }
}