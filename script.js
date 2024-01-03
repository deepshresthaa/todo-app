 const inputbox=document.querySelector("#input-box");
 const addtask=document.querySelector("button")
 const lists=document.querySelector(".lists");
 inputbox.value="";
 function todo(todo){
    if(inputbox.value==="")
    {
        alert("Enter Task to do");
    }
    else{
        const li=document.createElement("li");
        li.innerHTML=todo;
        lists.appendChild(li);
        inputbox.value="";
        const span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    saveData();
 }
 addtask.addEventListener("click",()=>{
    todo(inputbox.value);
 },false);

 lists.addEventListener("click",(e)=>{    
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("added");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
         e.target.parentElement.remove();
         saveData();
    }
})

function saveData(){
    localStorage.setItem("data",lists.innerHTML);
}
function showData(){
    lists.innerHTML=localStorage.getItem("data"); 
}
showData();