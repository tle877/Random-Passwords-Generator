// const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
// "/"];
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_-+=";
let size = document.getElementById("len");
let pass1 = document.getElementById("p1");
let pass2 = document.getElementById("p2");
let num1 = document.getElementById("num");
let upper1= document.getElementById("upper");
let lower1= document.getElementById("lower");
let sym1= document.getElementById("sym");
let err = document.getElementById("error");
let suc= document.getElementById("success")

function generate(){
    if(size.value==""){
    size.value=15;
    }   
    let result1="";
    let result2="";
    for(let i=1; i<=size.value; i++){
        let newchar1="";
        let newchar2="";
        let arr=[];
        if (!num1.checked && !upper1.checked && !lower1.checked && !sym1.checked){
            err.innerText = "Please choose at least 1 condition above"
            suc.innerText=""
            break
        } else {
            err.innerText=""
            suc.innerText = "We generated 2 passwords for you to choose:"
        }
    
        if(num1.checked){
            arr.push(numbers[Math.floor(Math.random()*(numbers.length))])

        }
        if(upper1.checked){
            arr.push(uppercaseLetters[Math.floor( Math.random()*(uppercaseLetters.length))])
        }
        if(lower1.checked){
            arr.push(lowercaseLetters[Math.floor( Math.random()*(lowercaseLetters.length))])
        }
        if(sym1.checked){
            arr.push(symbols[Math.floor( Math.random()*(symbols.length))])
        }
        newchar1 = arr[Math.floor(Math.random()*arr.length)];
        newchar2 = arr[Math.floor(Math.random()*arr.length)];
   
        
        result1+=newchar1;
        result2+=newchar2
    }
    pass1.innerText=result1;
    pass2.innerText=result2
    size.value=""
}


