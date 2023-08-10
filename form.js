const title = document.getElementById('title');
const namefield = document.getElementById('namefield');
const signinBtn = document.getElementById('signinBtn');
const signupBtn = document.getElementById('signupBtn');

signupBtn.onclick = function(){
    title.innerHTML = "sign up";
    namefield.style.display = "block";

}
signinBtn.onclick = function(){
    title.innerHTML = "login";
    namefield.style.display = "none";

}