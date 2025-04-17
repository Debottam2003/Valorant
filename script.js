// let obj = {
//     email1: "password1",
//     email2: "password2",
//   }

//   obj = {...obj, newemail: "password3"}

//   console.log(obj);

// let arr = [{user: { uaername: "abcd", email: "deb@gmail.com", password: "2003" }},{user: { username:"levi", email: "shub@gmail.com", password: "1234" }}];
// console.log(arr);
// arr.forEach((element) => {
//         console.log(element.user.email === "deb@gmail.com");
// });

// let user = {
//     mame: "deb",
//     age: 22,
//     address: {
//         city: "kolkata",
//         pin: 743165
//     }
// };
// console.log(user.address.pin);

let sign_button = document.getElementById("Nav-btn");
sign_button.addEventListener("click", function(ev){
     window.location.href = "login.html";
});


