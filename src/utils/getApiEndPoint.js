module.exports = () => {
  const isLocal = /localhost/;
  return isLocal.test(window.location) ? process.env.REACT_APP_API_ENDPOINT_TEST : process.env.REACT_APP_API_ENDPOINT_LIVE;
}