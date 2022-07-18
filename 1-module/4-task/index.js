function checkSpam(str) {
  str = str.toLowerCase(str);
  let result;
    if (str.includes('1xbet') || str.includes('xxx')) {
      return true;
    } else {
    return false;
  }
  return result;
}