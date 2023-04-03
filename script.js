// Assignment Code
var password_length;
var characters = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var generateBtn = document.querySelector("#generate");
var password = ""
function random(){
   Math.floor(Math.random()*characters.length);
}
console.log(characters[random])
function generatePassword(){
  for(i; i<=password_length; i++){
    passwork += characters.substring(random, random + 1);
  }
  document.getElementById("password").value = password;
  
}
console.log(password)
