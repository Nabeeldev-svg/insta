// let inputs=document.getElementById("#inp");
// let text =document.querySelector(".text");

// function Add(){
//     if(inputs.value ==" "){
// alert("please enter task")
//     }else{
//         let newEle=document.createElement("ul");
//         newEle.innerHTML=`${inputs.value}`;
//         text.appendChild(newEle);
//         inputs.value=" ";
//         newEle.querySelector("i").addEventListener("click,remove")
//         function remove(){
//             newEle.remove
//         }
//     }
// }
function AddTask(){

    let Newtask=document.createElement('li');
    let tasklist=document.getElementById("tasklist")
    tasklist.appendChild(Newtask);
    Newtask.textContent=document.getElementById('inputTask').value
    document.getElementById('inputTask').value=" ";

deleteTask(Newtask)

}
function deleteTask(Newtask){
let deletebtn=document.createElement('button')
deletebtn.textContent="delete"
Newtask.appendChild(deletebtn)
deletebtn.onclick=function(){
    Newtask.remove()
}
}
