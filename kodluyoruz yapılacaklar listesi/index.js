let taskDOM=document.querySelector("#task");
let listDOM=document.querySelector("#list");
let liDOM;

function ekle(){
    if(taskDOM.value === " " || !taskDOM.value){
        $(".error").toast("show");
}
else if(taskDOM.value){
    liDOM=document.createElement("li");
    listDOM.appendChild(liDOM);
    liDOM.innerHTML=`${taskDOM.value} <span onclick="sil()"class="close">x</span>`;
    $(".success").toast("show");
    taskDOM.value="";
}  
}
function sil(){
    var close=document.getElementsByClassName("close");
for(var i=0;i<close.length;i++){
    close[i].onclick=function(){
        var div=this.parentElement;
        div.style.display="none";
    }
}
}
var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);



