let name1 = document.getElementById("name");
let number = document.getElementById("number");
let email = document.getElementById("email");
let otname = document.getElementById("otname");
let otnumber = document.getElementById("otnumber");
let otemail = document.getElementById("otemail");
function submit1() {
  if (
    name1.value.includes("1") ||
    name1.value.includes("2") ||
    name1.value.includes("3") ||
    name1.value.includes("4") ||
    name1.value.includes("5") ||
    name1.value.includes("6") ||
    name1.value.includes("7") ||
    name1.value.includes("8") ||
    name1.value.includes("9") ||
    name1.value.includes("0")
  ) {
    alert("Enter the Correct name");
    return;
  }
  otname.innerText = name1.value;
  if (/[^0-9]/.test(number.value)) {
    alert("Enter the correct number");
    return;
  }
  otnumber.innerText = number.value;
  if (!email.value.includes("@")) {
    alert("Enter the correct e mail.");
    return;
  }
  otemail.innerText = email.value;
//   window.location.href =
   
// }
console.log("hello");
// /\d/ check for the number present in the string.
//.test(parameter) check fot it
// /[^0-9]/ check for the number present in the string.
