let boxes = document.querySelectorAll(".box")
let resetbtn = document.querySelector("#resetbutton")
let newgame = document.querySelector("#newgmebutton")
let winner1 = document.querySelector(".winner")
let msg = document.querySelector("#winneris")
let turn = true;

const winpatterns = [
    [0,3,6],
    [0,1,2],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6],
];

const resetgame = () =>{
    trun = false;
    enableboxes();
    winner1.classList.add("hide")
}

boxes.forEach((box) =>{
    box.addEventListener("click" , () =>{
        console.log("clicked")
     if(turn === true){
        box.innerText = "X"
        turn = false;
     }
     else{
          box.innerText = "O"
          turn = true
          
     }
       box.disabled = true
       checkwinner()
    })
})

const disableboxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableboxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

let  showwiner = (winner) =>{
     msg.innerText = ` congrats , winner is ${winner}`;
         winner1.classList.remove("hide"); 
        disableboxes();
}

const checkwinner = () =>{
    for(let pattern of winpatterns){
    //   console.log( boxes[pattern[0]] , boxes[pattern[1]] ,boxes[  pattern[2]])
        let pos1val =  boxes[pattern[0]].innerText;
        let pos2val =  boxes[pattern[1]].innerText;
        let pos3val =  boxes[pattern[2]].innerText;
          if(pos1val !="" && pos2val !="" && pos3val !="" ){
        if(pos1val === pos2val && pos2val === pos3val){
        console.log("winner",pos1val);
        showwiner(pos1val);
        }
    }
    }
}
 
newgame.addEventListener("click",resetgame)
resetbtn.addEventListener("click",resetgame)