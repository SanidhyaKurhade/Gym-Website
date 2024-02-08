var signup= document.getElementById("signup");
var signin= document.getElementById("signin");
var namefield= document.getElementById("namefield");
var title= document.getElementById("title");
signin.onclick=function click()
{
    namefield.style.maxHeight="0";
    title.innerHTML="Sign In"
    signup.classList.add("disable");
    signin.classList.remove("disable");
}
signup.onclick=function click()
{
    namefield.style.maxHeight="60px";
    title.innerHTML="Sign Up"
    signup.classList.remove("disable");
    signin.classList.add("disable");
}