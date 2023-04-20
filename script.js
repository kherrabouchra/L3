

const logbtn = document.getElementById("login");
const logbtn2 = document.getElementById("login2");
const loginol = document.querySelector(".tab-overlay");
const closebtn = document.getElementById("closetab");
const slide = document.querySelector(".slidedown");
const home = document.getElementById("home");

home.onclick= (e)=>{
    window.open("index.html","_self");
    console.log(home);
};

    
        
 
//login overlay
logbtn.addEventListener("click", function(){
    console.log("login")
    loginol.classList.add("open-overlay");
    slide.classList.add("blur");
    
})

closebtn.addEventListener("click", function () {
    loginol.classList.remove("open-overlay");
    slide.classList.remove("blur");

})
logbtn2.onclick = (event) => {
    event.preventDefault();
    if (select.value == 0 ){
        window.open("accueilEnseignant.html","_self");
    }
    if (select.value == 1 ){
        window.open("accueilEtudient.html","_self");
    }
    if (select.value == 2){
        window.open("accueilAdmin.html","_self");
    }
    
}

var select = document.getElementById("type");
var value = select.value;
select.options[select.selectedIndex].addEventListener("click", function(){
    console.log(select.options[select.selectedIndex]).add("selected");

})
console.log(select.options[select.selectedIndex]);




/*
const v = select.option[select.selectedIndex].value;
console.log(select); // en



/*
const sidebar = document.querySelector('.sidebar');
const tgbtn = document.querySelector(".toggle");
tgbtn.addEventListener("click", function(){
    sidebar.classList.add("show-sidebar");
});
*/



