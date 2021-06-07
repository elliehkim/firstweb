const tab1 = document.getElementById("tab1");
const tab2 = document.getElementById("tab2");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");

function hide1(){
    label1.style.visibility="hidden";
    label2.style.visibility="visible";
}

function hide2(){
    label1.style.visibility="visible";
    label2.style.visibility="hidden";
}

tab1.addEventListener('click',hide2);
tab2.addEventListener('click',hide1);
