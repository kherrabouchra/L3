const groupe = [
    {id:1,	name:"ABABSA", prenom:"AYMEN" , sexe:"m", type:"student" },
    {id:2,	name:"ARFA", prenom: "SARA ", sexe: "f",type:"student"},
    {id:3,	name:"LAKHDARA",prenom:"ZAKARIA" , sexe:"m",type:"prof"} , 
    {id:4,	name:  "BENAICHA" ,prenom:"NOURELYAKINE", sexe: "f",type:"student"},
    {id:5,	name: "BENDJELLOUL" ,prenom:"SIDAHMED", sexe:"m" ,type:"student"},
    {id:6,	name: "BELGUIDOUM", prenom: "MERIEM ", sexe:"f" ,type:"prof"},
    {id:7,	name:"BENNAMOUN" ,prenom: "RAZANE", sexe: "f",type:"student"},
    {id:8,	name:"BENOULHA", prenom: "WAIL" , sexe:"m" ,type:"student"},
    {id:9,	name:"BESTA",prenom: "MALEK" , sexe: "f",type:"student"},
    {id:10,	name:"BOUANAKA",prenom: "CHAFIA", sexe:"f" ,type:"prof"},
    {id:11,	name:"BOUKERZAZA",prenom: "Ibtihel", sexe: "f",type:"student"},
    {id:12,	name:"BOURADA",prenom:" MAHA ", sexe: "f",type:"student"},
    {id:13,	name:"SMAALI",prenom: "SAHAR", sexe:"f",type:"prof" },
    {id:14,	name:"BRAHIMI",prenom: "BIDAS", sexe:"m" ,type:"student"},
    {id:15,	name:"CHELGHAM",prenom:"MOUNSIF", sexe:"m" ,type:"student"},
    {id:16,	name:"DAHMANI",prenom:"AMAR ", sexe:"m",type:"student" },
    {id:17,	name:"GHEDJATI ",prenom:"Houcine", sexe:"m" ,type:"student"},
    {id:18,	name:"GHRIB",prenom: "AYA" , sexe: "f",type:"student"},
    {id:19,	name:"BOUARROUDJ", prenom:"KENZA ", sexe:"f" ,type:"prof"},
    {id:20,	name:"HAZOURLI",prenom: "MEHDI", sexe:"m" ,type:"student"},
    {id:21,	name:"KAHOUL" ,prenom:"ABDELMADJID", sexe:"m",type:"student"},
    {id:22,	name:"KHERRAB",prenom: "BOUCHRA", sexe: "f",type:"student"},
    {id:23,	name:"LABACI",prenom:"ASMAA" , sexe: "f",type:"student"},
    {id:24,	name:"LARKEM",prenom: "ZINEEDDINE", sexe:"m" , type:"student"},
    {id:25,	name:"MAAMRI" ,prenom:"RAMDANE", sexe:"m" ,type:"prof"},
    {id:26,	name:"MACHICHE",prenom: "SOUMIA", sexe: "f",type:"student"},
    {id:27,	name:"MEDJANI",prenom: "ABDELMOUHEIMENE", sexe:"m" ,type:"student"},
    {id:28,	name:"MEZRAG",prenom: "ABDELOUADOUD" , sexe:"m" ,type:"student"},
    {id:29,	name:"NAANAA",prenom: "AYA" , sexe: "f",type:"student"},
    {id:30,	name:"OUBAZIZ",prenom: "WASSIM", sexe:"m" ,type:"student"},
    {id:31,	name:"SEDDIKI",prenom: "ABDERRAHIM", sexe:"m",type:"student" },
    {id:32,	name:"DJENOUHAT" ,prenom:"MANEL" , sexe: "f",type:"prof"},
    {id:33,	name:"TABBI",prenom: "ABDELAZIZ", sexe:"m" ,type:"student"},
    {id:34,	name:"TOUATI" ,prenom:"MOHAMED", sexe:"m" ,type:"student"},
    {id:35,	name:"ZEGHIDA" , prenom:"IHSSENE" , sexe: "f",type:"student"},
];

var ul= document.getElementById("filtered");
var listusers= document.getElementById("listusers");
home.onclick= (e)=>{
    window.open("index.html","_self");
    console.log(home);
};

    

//default list


for (var i=0; i<groupe.length; i++){

    var li=document.createElement("li");
    ul.appendChild(li);    
    li.setAttribute("onclick","selected(this)");

    li.innerHTML=li.innerHTML + groupe[i].name + " " +groupe[i].prenom;
   
}


for (var i=0; i<groupe.length; i++){

    var li=document.createElement("li");
    listusers.appendChild(li);    
    li.setAttribute("onclick","selected(this)");

    li.innerHTML=li.innerHTML + groupe[i].name +" " +groupe[i].prenom+" "+ groupe[i].type;
   
}


var filteredlist;
//Filter list
function filter(critere){

    if(critere==1){ 
    
      var filteredlist =  groupe.filter(function(user){
         if(user.type=="student"){
            
            return user;
         }
          }
         ) }
    else if(critere==2){ 
       filteredlist=  groupe.filter(function(user){
         if(user.type=="prof"){
            return user;
         }

          }
         )}
    else if(critere==3){
        filteredlist= groupe.filter(function(user){
            if(user.sexe!="m"){
               return user;
            }
   
             }
            )
    }
    else {
        filteredlist= groupe.filter(function(user){
            if(user.sexe!="f"){
               return user;
            }
           
             }
            
            )
           
        }  display(filteredlist);
   console.log(filteredlist);
      
      
   filteredlist= this.filteredlist;

    //display filtered list
   function display(l){
    let displaylist = l.map(function(item){
    return `<li onclick="selected(this)"> ${item.name} ${item.prenom}</li>`;
     });
        
     displaylist= displaylist.join("");
     ul.innerHTML=displaylist;
     }  }

const list = ul.childNodes;



 //one selected element at a time


function selected(a){
    console.log(a);


 list.forEach(function(item){

    item.classList.add("selected");

    if(item !== a){
       item.classList.remove("selected");

        } 
    })
   
     //already opened questions
     }


// delete users
 function deleteuser(){
var s = document.querySelector(".selected");

    if (s== null){
        window.alert("Please select user!");
       }else{
console.log(s);
ul.removeChild(s);
console.log(list);
window.alert("user"+" "+s.textContent+" "+"is deleted.");
       }
   }



   

const updateol = document.querySelector(" .update");
const signupol = document.querySelector(" .signup");
const ol = document.querySelectorAll(".tab-overlay");
const closebtn = document.getElementById("closetab");
const inputs = document.querySelectorAll(".input");
const bg = document.querySelector(".container");
const hd = document.querySelector(".header");

// update users


function updateuser(){
let submit = document.getElementById("submit1");
    const  s = document.querySelector(".selected");
    
   if (s== null){
    window.alert("Please select user!");
   }else{
const inname1 = document.getElementById("inname1");
const inpren2 = document.getElementById("inpren2");
updateol.classList.add("open-overlay");
hd.classList.add("blur");
      bg.classList.add("blur");
 

    submit.onclick=(e) =>{

    console.log(s.textContent);
    s.textContent= inname1.value +" "+ inpren1.value;
    closetab();
}
    inputs.forEach(e => {
        
    e.addEventListener("keypress", function(event) {
        // If the user presses the "Enter" key on the keyboard
        if (event.key === "Enter") {
          // Cancel the default action, if needed
          event.preventDefault();
          // Trigger the button element with a click

          submit.click();
     closetab();

        }
      });
    });
  
}
}




//add users


function adduser(){
    let submit = document.getElementById("submit2");
const inname2 = document.getElementById("inname2");
const inpren2 = document.getElementById("inpren2");
signupol.classList.add("open-overlay");
hd.classList.add("blur");
bg.classList.add("blur");
submit.onclick=(e) =>{

    var li=document.createElement("li");
    ul.appendChild(li);    
    li.setAttribute("onclick","selected(this)");
    li.innerText =  inname2.value +" "+ inpren2.value;
    closetab();

}
      inputs.forEach(e => {
          
      e.addEventListener("keypress", function(event) {
          // If the user presses the "Enter" key on the keyboard
          if (event.key === "Enter") {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            submit.click();
           closetab();
           
          }
        });
      });
    

}


function closetab(){
ol.forEach(e=> {
    e.classList.remove("open-overlay"); 
    hd.classList.remove("blur");
    bg.classList.remove("blur");
})
inputs.forEach(e=>{
    e.value="";
   
})
     
}

   function sidebar(){
    let nav = document.querySelector(".sidebar");
console.log(nav);
nav.classList.toggle("opennav");

   }