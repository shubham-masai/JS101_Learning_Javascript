// Problem 4: Given stored username and password and input username and password, Print if the user can login or not.
let username = "Shubham";
let possowrd = "masaischool";
let id = "Shubham";
let login_possowrd = "masaischool";
if (username == id) {
  if (possowrd == login_possowrd) {
    console.log("user can login");
  } else {
    console.log("user can not login");
  }
} else {
  console.log("user can not login");
}