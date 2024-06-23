
enter=document.getElementById("entrance");
Main=document.getElementById("mainpage"); 
function toggle_entrance(){
    
    document.getElementById("entrance").classList.add("hidden");
}


var q1=document.getElementById('q1');
var q2=document.getElementById('q2');
var q3=document.getElementById('q3');
var q4=document.getElementById('q4');
var q5=document.getElementById('q5');
var q6=document.getElementById('q6');
var d1=1;
var d2=1;
var d3=1;
var d4=1;
var d5=1;
var d6=1;
function Q1(){
    if (d1==1){
        q1.style.display='block';
        d1=0;
    }
    else{
        q1.style.display='none';
        d1=1;
    }
}
function Q5(){
    if (d5==1){
        q5.style.display='block';
        d5=0;
    }
    else{
        q5.style.display='none';
        d5=1;
    }
}
function Q2(){
    if (d2==1){
        q2.style.display='block';
        d2=0;
    }
    else{
        q2.style.display='none';
        d2=1;
    }
}
function Q3(){
    if (d3==1){
        q3.style.display='block';
        d3=0;
    }
    else{
        q3.style.display='none';
        d3=1;
    }
}
function Q4(){
    if (d4==1){
        q4.style.display='block';
        d4=0;
    }
    else{
        q4.style.display='none';
        d4=1;
    }
}
function Q6(){
    if (d6==1){
        q6.style.display='block';
        d6=0;
    }
    else{
        q6.style.display='none';
        d6=1;
    }
}
let menustat=1;
function smallmenu(){
    const menu=document.getElementById("smmenu");
    if (menustat===0){
        menu.classList.add("hidemenu") ;
        menustat=1;
    }
    else{
        menu.classList.remove("hidemenu") ;
        menustat=0;
    }
}
