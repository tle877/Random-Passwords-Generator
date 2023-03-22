const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let size = document.getElementById("len");
let pass1 = document.getElementById("p1");
let pass2 = document.getElementById("p2");
let check = document.querySelector("#num");

function generate(){
    if(size.value==""){
    size.value=15;
    }   
    let result1="";
    let result2="";
    for(let i=1; i<=size.value; i++){
        let newchar1="";
        let newchar2="";
        
        newchar1 = characters[(Math.floor( Math.random()*91))];
        newchar2 = characters[(Math.floor( Math.random()*91))];
        
        if(!check.checked && !isNaN(newchar1)){ /*not includes num and notANuM is false*/
            do {(newchar1 = characters[(Math.floor( Math.random()*91))])}
                while (!isNaN(newchar1))
            do {(newchar2 = characters[(Math.floor( Math.random()*91))])}
                while (!isNaN(newchar2))
        }       
        result1+=newchar1;
        result2+=newchar2;
    }
    pass1.innerText=result1;
    pass2.innerText=result2;
    size.value="";
}


