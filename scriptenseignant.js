const groupe = [
    {id:1,	name:"ABABSA", prenom:"AYMEN" , groupe:4, section:2 },
    {id:2,	name:"ARFA", prenom: "SARA ", group: 4,section:2},
    {id:3,	name:"AYMEN",prenom:"BEKKAI" , groupe: 3,section:2} , 
    {id:4,	name:  "BENAICHA" ,prenom:"NOURELYAKINE", groupe:4,section:2},
    {id:5,	name: "BENDJELLOUL" ,prenom:"SIDAHMED", groupe:4 ,section:2},
    {id:6,	name: "BENHAYA", prenom: "MESSAOUD ", groupe:4 ,section:2},
    {id:7,	name:"BENNAMOUN" ,prenom: "RAZANE", groupe:4,section:2},
    {id:8,	name:"BENOULHA", prenom: "WAIL" , groupe:4 ,section:2},
    {id:9,	name:"BESTA",prenom: "MALEK" , groupe:4,section:2},
    {id:10,	name:"BOUKAHIL",prenom: "WASSIM", groupe:4 ,section:2},
    {id:11,	name:"BOUKERZAZA",prenom: "Ibtihel", groupe:1,section:2},
    {id:12,	name:"BOURADA",prenom:" MAHA ", groupe:2,section:2},
    {id:13,	name:"BOURAOUI",prenom: "ZAKARIA", groupe:3,section:2 },
    {id:14,	name:"BRAHIMI",prenom: "BIDAS", groupe:2 ,section:2},
    {id:15,	name:"CHELGHAM",prenom:"MOUNSIF", groupe:1 ,section:2},
    {id:16,	name:"DAHMANI",prenom:"AMAR ", groupe:1,section:2 },
    {id:17,	name:"GHEDJATI ",prenom:"Houcine", groupe:1 ,section:2},
    {id:18,	name:"GHRIB",prenom: "AYA" , groupe:1,section:2},
    {id:19,	name:"GUEBLI", prenom:"AYOUB ", groupe:1 ,section:1},
    {id:20,	name:"HAZOURLI",prenom: "MEHDI", groupe:1 ,section:1},
    {id:21,	name:"KAHOUL" ,prenom:"ABDELMADJID", groupe:1,section:1},
    {id:22,	name:"KHERRAB",prenom: "BOUCHRA", groupe:1,section:1},
    {id:23,	name:"LABACI",prenom:"ASMAA" , groupe:3,section:1},
    {id:24,	name:"LARKEM",prenom: "ZINEEDDINE", groupe:2 , section:1},
    {id:25,	name:"MAALLEM" ,prenom:"ABDERRAZAK", groupe:2 ,section:1},
    {id:26,	name:"MACHICHE",prenom: "SOUMIA", groupe:2,section:1},
    {id:27,	name:"MEDJANI",prenom: "ABDELMOUHEIMENE", groupe:2 ,section:1},
    {id:28,	name:"MEZRAG",prenom: "ABDELOUADOUD" , groupe:2 ,section:1},
    {id:29,	name:"NAANAA",prenom: "AYA" , groupe:2,section:1},
    {id:30,	name:"OUBAZIZ",prenom: "WASSIM", groupe:3 ,section:1},
    {id:31,	name:"SEDDIKI",prenom: "ABDERRAHIM", groupe:3,section:1 },
    {id:32,	name:"SMAALI" ,prenom:"MARIA" , groupe:3,section:1},
    {id:33,	name:"TABBI",prenom: "ABDELAZIZ", groupe:3 ,section:1},
    {id:34,	name:"TOUATI" ,prenom:"MOHAMED", groupe:3 ,section:1},
    {id:35,	name:"ZEGHIDA" , prenom:"IHSSENE" , groupe:3,section:1},
];

var ul= document.getElementById("filtered");

home.onclick= (e)=>{
    window.open("index.html","_self");
    console.log(home);
};

    

//default list


for (var i=0; i<groupe.length; i++){

    var li=document.createElement("li");
    ul.appendChild(li);    
    li.setAttribute("onclick","selected(this)");

    li.innerHTML=li.innerHTML + groupe[i].name + " " +groupe[i].prenom ;
   
}


var filteredlist;
//Filter list
function filter(critere){

    if(critere==1){ 
    
      var filteredlist =  groupe.filter(function(user){
         if(user.section==1){
            
            return user;
         }
          }
         ) }
    else if(critere==2){ 
       filteredlist=  groupe.filter(function(user){
         if(user.section==2){
            return user;
         }

          }
         )}
         else if(critere==3){ 
            filteredlist=  groupe.filter(function(user){
              if(user.groupe==1){
                 return user;
              }
     
               }
              )}
    else if(critere==4){
        filteredlist= groupe.filter(function(user){
            if(user.groupe==2){
               return user;
            }
   
             }
            )
    }
    else if(critere==5){
        filteredlist= groupe.filter(function(user){
            if(user.groupe==3){
               return user;
            }
   
             }
            )
    }
    else {
        filteredlist= groupe.filter(function(user){
            if(user.groupe==4){
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
      window.alert("Please select student!");
     }else{
console.log(s);
ul.removeChild(s);
console.log(list);
window.alert("student"+" "+s.textContent+" "+"is deleted.");
     }
   }


//close tab 
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






//phone navbar
  
    let nav = document.querySelector(".sidebar");
    let navbtn = document.getElementById("sidebar");
    navbtn.onclick=(e)=>{

   nav.classList.toggle("opennav");
    navbtn.style.color="white";

    }
   

  
   

   // click on module enseignant 
   const  a = document.querySelectorAll(".a");
const b = document.querySelector(".moduleconf");
const c =document.querySelector(".module");

  var name;
   a.forEach(function (item) {
    item.onclick= (e)=>{
    c.style.display ="none";
    b.style.display ="block";


    }
  

   });




const insertol = document.querySelector(".insert");
const updateol = document.querySelector(".update");
const ol = document.querySelectorAll(".tab-overlay");
const inputs = document.querySelectorAll(".input");
let submit1 = document.getElementById("submitA");
let submit2 = document.getElementById("submitB");
const nb = document.getElementById("weeknumber");
const cnt1 = document.getElementById("content");
const cnt2 = document.getElementById("content2");
const t = document.getElementById("moduletable");
const bg = document.querySelector(".container");
const hd = document.querySelector(".header");
var tbody = document.querySelector("tbody");

   //insert into weekly schedule
   function addweek() {
      
     insertol.classList.add("open-overlay");
     hd.classList.add("blur");
      bg.classList.add("blur");
      
     submitA.onclick=(e) =>{
     
         var td=document.createElement("td");
         var td1=document.createElement("td");
         var tr=document.createElement("tr");
         td.innerHTML = "week"+" "+ nb.value ;
         td1.setAttribute("onclick", "selectedweek(this)");
         td1.classList.add("cnt");
         td1.innerHTML=  cnt1.value;
         tr.appendChild(td);
         tr.appendChild(td1);
         tr.classList.add("week"); 
         tbody.appendChild(tr);
         t.appendChild
          closetab();

     
     }
           inputs.forEach(e => {
               
           e.addEventListener("keypress", function(event) {
               // If the user presses the "Enter" key on the keyboard
               if (event.key === "Enter") {
                 // Cancel the default action, if needed
                 event.preventDefault();
                 // Trigger the button element with a click
                 submitA.click();
               closetab();
                
               }
             });
           });
         
     
     }
    

     //update a week content

function updateweek(){
    var s = document.querySelector(".selectedweek");
 
      if (s== null){
       window.alert("Please select week!");
      }else{
   updateol.classList.add("open-overlay");
   hd.classList.add("blur");
   bg.classList.add("blur");
       submitB.onclick=(e) =>{
   
       s.innerHTML=  cnt2.value;

       closetab();
   }
       inputs.forEach(e => {
           
       e.addEventListener("keypress", function(event) {
           // If the user presses the "Enter" key on the keyboard
           if (event.key === "Enter") {
             // Cancel the default action, if needed
             event.preventDefault();
             // Trigger the button element with a click
   
             submitB.click();
        closetab();
   
           }
         });
       });
     
   }
   }
   

     //delete a week 
     function deleteweek(){

         var s = document.querySelector(".selectedweek");
         var tr = document.querySelectorAll(".cnt");
         
       
         if (s== null){
            window.alert("Please select week!");
           }else{
            var tr = s.previousSibling.previousSibling;
            tbody.removeChild(s.parentElement);
         console.log(s.parentElement);

           window.alert(tr.textContent+" "+"is deleted.");
           }
     }



   // selected content line 

     function selectedweek(a){
    var tds = document.querySelectorAll(".cnt")
    console.log(content);
      tds.forEach(function(e){
      e.classList.add("selectedweek");
      if(e !== a){
         e.classList.remove("selectedweek");
  
          } 
      })
     
       }
  