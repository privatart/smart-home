function userGreeting() {
  const timeNow = new Date();
  const hourNow = timeNow.getHours();

  if (hourNow >= 5 && hourNow < 11) {
    return "Good morning";
  } else if (hourNow >= 11 && hourNow < 17) {
    return "Good day";
  } else if (hourNow >= 17 && hourNow < 23) {
    return "Good evening";
  } else {
    return "Good night";
  }
}

module.exports = { userGreeting };
