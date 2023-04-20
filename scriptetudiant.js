   // click on module etudiant
   const d= document.querySelectorAll(".b");
const e = document.querySelector(".moduleconsult");
const f =document.querySelector(".module");
const home = document.getElementById("home");



home.onclick= (e)=>{
    window.open("index.html","_self");
    console.log(home);
};



  var name;
   d.forEach(function (item) {
    item.onclick= (elem)=>{
    f.style.display ="none";
    e.style.display ="block";


    }
  

   });



   // selected content line 

   var weeks = document.querySelectorAll(".consult");
   var content =document.querySelectorAll(".weekconsult");


   function selectedweek(a){


      weeks.forEach(function(e){

      e.classList.add("selectedweek");

      if(e !== a){
         e.classList.remove("selectedweek");
  
          } 
    

      })
     
       }
      weeks.forEach(function(w){
       w.onclick= (e)=>{
          content.forEach(function(c){
            let g =e.currentTarget;
            if(c.previousSibling.previousSibling == g.parentElement){
             c.classList.toggle("weekconsultopen");
             h=c.nextSibling.nextSibling;
              if(h){
             h.classList.toggle("weekconsultopen");
           
           }
            }
          })
        
       }});