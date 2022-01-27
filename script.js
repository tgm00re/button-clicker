document.getElementById("login-button").onclick = loginClickEvent;
let loggedIn = true;

function loginClickEvent(){
    if(loggedIn){
        loggedIn = false;
        document.getElementById("login-button").innerText = "Log-In";
    } else{
        loggedIn = true;
        document.getElementById("login-button").innerText = "Log Out";
    }
}


likeBtn1 = document.getElementById("like-button-1");

let likesCountOne = 13;

likeBtn1.onclick = () => {
    alert("You liked 'ninja'");
    likesCountOne++;
    likeBtn1.innerText = likesCountOne + " Likes";
}




likeBtn2 = document.getElementById("like-button-2");

let likesCountTwo = 37;

likeBtn2.onclick = () => {
    alert("You liked 'ninja'");
    likesCountTwo++;
    likeBtn2.innerText = likesCountTwo + " Likes";
}


document.getElementById("add-btn").onclick = () =>{
    document.getElementById("add-btn").remove();
}
