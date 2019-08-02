//get UserName
function getUserName() {
  var userName = prompt('Enter your name to access Capstone');

  if (!userName) {
    userName = prompt('Please enter your name');
  }
  return userName;
}


