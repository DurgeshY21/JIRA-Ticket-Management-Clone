
// we want that add-btn button works while clicking it it will show generate ticket ui
// let addBtn = document.querySelector(".add-btn");
// let removeBtn = document.querySelector(".remove_btn")
// let modalCont = document.querySelector(".modal-cont")
// let mainCont = document.querySelector(".main-cont")
// let textareaCont = document.querySelector(".textarea-cont");
// let allPriorityColors = document.querySelectorAll(".priority-color");  // select priority-color class 
// let toolBoxColors = document.querySelectorAll(".color");

// let colors=["lightpink", "lightblue", "lightgreen", "black"];         //default colors for modal
// let modalPriorityColor=colors[colors.length - 1];                     //to add the default colors
// let addFlag = false;
// let removeFlag = false;

// let lockClass = "fa-lock";
// let unlockClass = "fa-lock-open";

// let ticketsArr = [];

// if(localStorage.getItem("jira_tickets")){
//     // retrieve and display tickets
//     ticketsArr = JSON.parse(localStorage.getItem("jira_tickets"));   // JSON- JAVASCRIPT OBJECT NOTATION 
//     ticketsArr.forEach((ticketObj) => {
//         createTicket(ticketObj.ticketColor, ticketObj.ticketTask, ticketObj.ticketID);
//     })
// }

// for(let i=0; i < toolBoxColors.length; i++){
//     toolBoxColors[i].addEventListener("click", (e) => {
//         let currentToolBoxColor = toolBoxColors[i].classList[0];

//         let filteredTickets = ticketsArr.filter((ticketObj, idx) => {
//             return currentToolBoxColor === ticketObj.ticketColor;
//         })
        

//         //Remove previous tickets 
//         let allTicketsCont = document.querySelectorAll(".ticket-cont");
//         for(let i = 0; i < allTicketsCont.length; i++){
//             allTicketsCont[i].remove();
//         }

//         //display new filtered tickets
//         filteredTickets.forEach((ticketObj, idx) => {
//             createTicket(ticketObj.ticketColor, ticketObj.ticketTask, ticketObj.ticketID);
//         })
//     })
//      toolBoxColors[i].addEventListener("dblclick", (e)  =>{
//         //remove previous tickets
//         let allTicketsCont = document.querySelector(".ticket-cont");
//         for(let i=0; i < allTicketsCont; i++){
//             allTicketsCont[i].remove();
//         }
//         ticketsArr.forEach((ticketObj, idx)=>{
//             createTicket(ticketObj.ticketColor, ticketObj.ticketTask, ticketObj,ticketID);
//         })
//      })
// }

// // eventListener for modal priority coloring
// allPriorityColors.forEach((colorElem, idx) => {
//     colorElem.addEventListener("click", (e) => {
//         allPriorityColors.forEach((priorityColorElem, idx) => {
//             priorityColorElem.classList.remove("border");  //removing white border from black one color element
//         })
//         colorElem.classList.add("border");            // on clicking on any other color white border will be added

//         modalPriorityColor = colorElem.classList[0];   // we want this value to get into modal priorityColor
        
//     })
// })

// addBtn.addEventListener("click", (e) => {
//     //display-Modal
//     //Generate ticket
   

//     // if addFlag become true, we have to display ->"modal display"
//     // id addFlag become false, we have to remove-> "modal display"
//     addFlag = !addFlag;
//     if(addFlag){
//         modalCont.style.display = "flex";

//     }
//     else{
//         modalCont.style.display = "none";
//     }

// })

// removeBtn.addEventListener("click", (e) => {
//     removeFlag = !removeFlag;
//     console.log(removeFlag);

// });

// // adding the ticket into modal
// modalCont.addEventListener("keydown", (e) => {
//     let key = e.key;
//     if(key === "Shift"){
//         createTicket(modalPriorityColor, textareaCont.value);

//         // when entering ticket and click shift - modal will be removed
//         addFlag = false;
//         setModalToDefault();
        
        
//     }
// })


// //function to create an ticket
// function createTicket(ticketColor, ticketTask, ticketID){
//     let id=ticketID  || shortid();
//     let ticketCont = document.createElement("div");
//     ticketCont.setAttribute("class", "ticket-cont");
//     ticketCont.innerHTML=`
//        <div class="ticket-color ${ticketColor}"></div>
//        <div class="ticket-id">#${id}</div>
//         <div class="task-area"> ${ticketTask}</div>
//         <div class="ticket-lock">
//             <i class="fa-solid fa-lock"></i>
//         </div>
//     `;
//    mainCont.appendChild(ticketCont);

//     //create object of ticket and add to array
//   if(!ticketID){
//       ticketsArr.push({ticketColor, ticketTask, ticketID: id});

//       //Using the WEB API of Javascript i.e "localStorage to implement the storage 
//        localStorage.setItem("jira_tickets", JSON.stringify(ticketsArr)); 
//    }
    
//        console.log(ticketsArr);
//     handleRemoval(ticketCont, id);
//     handleLock(ticketCont, id);
//     handleColor(ticketCont, id);
//  }

// function handleRemoval(ticket, id){
//    //removeFlag -> true -> remove
//       ticket.addEventListener("click", (e)=>{
//         if(!removeFlag) return; 

//       let idx=getTicketIdx(id);

//         // DB Removal
//         ticketsArr.splice(idx, 1);
//         let strTicketsArr = JSON.stringify(ticketsArr);
//         localStorage.setItem("jira_tickets", strTicketsArr);
//         ticket.remove();  //UI Removal
//       })
// }

// function handleLock(ticket,id){
//     let ticketLockElem = ticket.querySelector(".ticket-lock");
//     let ticketLock = ticketLockElem.children[0];
//     let ticketTaskArea = ticket.querySelector(".task-area");
//     ticketLock.addEventListener("click", (e) => {
//         let ticketIdx = getTicketIdx(id);

//       if(ticketLock.classList.contains(lockClass)){
//          ticketLock.classList.remove(lockClass);
//          ticketLock.classList.add(unlockClass);
//          ticketTaskArea.setAttribute("contenteditable", "true");
//       }
//       else{
//         ticketLock.classList.remove(unlockClass);
//         ticketLock.classList.add(lockClass);
//         ticketTaskArea.setAttribute("contenteditable", "false");
//        }

//        // Modify data in localStorage (Ticket Task)
//        ticketsArr[ticketIdx].ticketTask = ticketTaskArea.innerText;
//        localStorage.setItem("jira_tickets", JSON.stringify(ticketsArr));

//     })
// }

// function handleColor(ticket, id){
//     let ticketColor = ticket.querySelector(".ticket-color");
//     ticketColor.addEventListener("click", (e) => {
//      // Get ticketIndex from ticket array
//      let ticketIdx = getTicketIdx(id);
    
//     let currentTicketColor = ticketColor.classList[1];
//     // get ticket color index
//    let currentTicketColorIdx= colors.findIndex((color) => {
//         return currentTicketColor === color;
//     })

//     console.log(currentTicketColor, currentTicketColorIdx);
//     currentTicketColorIdx++;
//     let newTicketColorIdx = currentTicketColorIdx % colors.length;
//     let newTicketColor = colors[newTicketColorIdx];
//     ticketColor.classList.remove(currentTicketColor);
//     ticketColor.classList.add(newTicketColor);

//     //Modify data in localStorage (priority color change)
//     ticketsArr[ticketIdx].ticketColor = newTicketColor;
//     localStorage.setItem("jira_tickets", JSON.stringify(ticketsArr));
//    })
   
// }

// function getTicketIdx(id){
//    let ticketIdx= ticketsArr.findIndex((ticketObj) => {
//     return ticketObj.ticketID === id;
//    })
//    return ticketIdx;
// }

// function setModalToDefault(){
//     modalCont.style.display = "none"; 
//     textareaCont.value = "";
//     modalPriorityColor = colors[colors.length - 1];
//     allPriorityColors.forEach((priorityColorElem, idx) => {
//         priorityColorElem.classList.remove("border");  //removing white border from black one color element
//     })

//     allPriorityColors[allPriorityColors.length - 1].classList.add("border");
// }


let addBtn = document.querySelector(".add-btn");
let removeBtn = document.querySelector(".remove-btn");
let modalCont = document.querySelector(".modal-cont");
let mainCont = document.querySelector(".main-cont");
let textareaCont = document.querySelector(".textarea-cont");
let allPriorityColors = document.querySelectorAll(".priority-color");
let toolBoxColors = document.querySelectorAll(".color");

let colors = ["lightpink", "lightblue", "lightgreen", "black"];
let modalPriorityColor = colors[colors.length - 1];

let addFlag = false;
let removeFlag = false;

let lockClass = "fa-lock";
let unlockClass = "fa-lock-open";

let ticketsArr = [];

if (localStorage.getItem("jira_tickets")) {
  // Retrieve and display tickets
  ticketsArr = JSON.parse(localStorage.getItem("jira_tickets"));
  ticketsArr.forEach((ticketObj) => {
    createTicket(
      ticketObj.ticketColor,
      ticketObj.ticketTask,
      ticketObj.ticketID
    );
  });
}

for (let i = 0; i < toolBoxColors.length; i++) {
  toolBoxColors[i].addEventListener("click", (e) => {
    let currentToolBoxColor = toolBoxColors[i].classList[0];

    let filteredTickets = ticketsArr.filter((ticketObj, idx) => {
      return currentToolBoxColor === ticketObj.ticketColor;
    });

    // Remove previous tickets
    let allTicketsCont = document.querySelectorAll(".ticket-cont");
    for (let i = 0; i < allTicketsCont.length; i++) {
      allTicketsCont[i].remove();
    }
    // Display new filtered tickets
    filteredTickets.forEach((ticketObj, idx) => {
      createTicket(
        ticketObj.ticketColor,
        ticketObj.ticketTask,
        ticketObj.ticketID
      );
    });
  });

  toolBoxColors[i].addEventListener("dblclick", (e) => {
    // Remove previous tickets
    let allTicketsCont = document.querySelectorAll(".ticket-cont");
    for (let i = 0; i < allTicketsCont.length; i++) {
      allTicketsCont[i].remove();
    }

    ticketsArr.forEach((ticketObj, idx) => {
      createTicket(
        ticketObj.ticketColor,
        ticketObj.ticketTask,
        ticketObj.ticketID
      );
    });
  });
}

// Listener for modal priority coloring
allPriorityColors.forEach((colorElem, idx) => {
  colorElem.addEventListener("click", (e) => {
    allPriorityColors.forEach((priorityColorElem, idx) => {
      priorityColorElem.classList.remove("border");
    });
    colorElem.classList.add("border");

    modalPriorityColor = colorElem.classList[0];
  });
});

addBtn.addEventListener("click", (e) => {
  // Display Modal
  // Generate ticket

  // AddFlag, true -> Modal Display
  // AddFlag, False -> Modal None
  addFlag = !addFlag;
  if (addFlag) {
    modalCont.style.display = "flex";
  } else {
    modalCont.style.display = "none";
  }
});
removeBtn.addEventListener("click", (e) => {
  removeFlag = !removeFlag;
  console.log(removeFlag);
});

modalCont.addEventListener("keydown", (e) => {
  let key = e.key;
  if (key === "Shift") {
    createTicket(modalPriorityColor, textareaCont.value);
    addFlag = false;
    setModalToDefault();
  }
});

function createTicket(ticketColor, ticketTask, ticketID) {
  let id = ticketID || shortid();
  let ticketCont = document.createElement("div");
  ticketCont.setAttribute("class", "ticket-cont");
  ticketCont.innerHTML = `
        <div class="ticket-color ${ticketColor}"></div>
        <div class="ticket-id">#${id}</div>
        <div class="task-area">${ticketTask}</div>
        <div class="ticket-lock">
            <i class="fas fa-lock"></i>
        </div>
    `;
  mainCont.appendChild(ticketCont);

  // Create object of ticket and add to array
  if (!ticketID) {
    ticketsArr.push({ ticketColor, ticketTask, ticketID: id });
    localStorage.setItem("jira_tickets", JSON.stringify(ticketsArr));
  }
  console.log(ticketsArr);
  handleRemoval(ticketCont, id);
  handleLock(ticketCont, id);
  handleColor(ticketCont, id);
}

function handleRemoval(ticket, id) {
  // removeFlag -> true -> remove
  ticket.addEventListener("click", (e) => {
    if (!removeFlag) return;

    let idx = getTikcetIdx(id);

    // DB removal
    ticketsArr.splice(idx, 1);
    let strTicketsArr = JSON.stringify(ticketsArr);
    localStorage.setItem("jira_tickets", strTicketsArr);

    ticket.remove(); //UI removal
  });
}

function handleLock(ticket, id) {
  let ticketLockElem = ticket.querySelector(".ticket-lock");
  let ticketLock = ticketLockElem.children[0];
  let ticketTaskArea = ticket.querySelector(".task-area");
  ticketLock.addEventListener("click", (e) => {
    let ticketIdx = getTikcetIdx(id);

    if (ticketLock.classList.contains(lockClass)) {
      ticketLock.classList.remove(lockClass);
      ticketLock.classList.add(unlockClass);
      ticketTaskArea.setAttribute("contenteditable", "true");
    } else {
      ticketLock.classList.remove(unlockClass);
      ticketLock.classList.add(lockClass);
      ticketTaskArea.setAttribute("contenteditable", "false");
    }

    // Modify data in localStorage (Ticket Task)
    ticketsArr[ticketIdx].ticketTask = ticketTaskArea.innerText;
    localStorage.setItem("jira_tickets", JSON.stringify(ticketsArr));
  });
}

function handleColor(ticket, id) {
  let ticketColor = ticket.querySelector(".ticket-color");
  ticketColor.addEventListener("click", (e) => {
    // Get ticketIdx from the tickets array
    let ticketIdx = getTikcetIdx(id);

    let currentTicketColor = ticketColor.classList[1];
    // Get ticket color idx
    let currentTicketColorIdx = colors.findIndex((color) => {
      return currentTicketColor === color;
    });
    console.log(currentTicketColor, currentTicketColorIdx);
    currentTicketColorIdx++;
    let newTicketColorIdx = currentTicketColorIdx % colors.length;
    let newTicketColor = colors[newTicketColorIdx];
    ticketColor.classList.remove(currentTicketColor);
    ticketColor.classList.add(newTicketColor);

    // Modify data in localStorage (priority color change)
    ticketsArr[ticketIdx].ticketColor = newTicketColor;
    localStorage.setItem("jira_tickets", JSON.stringify(ticketsArr));
  });
}

function getTikcetIdx(id) {
  let ticketIdx = ticketsArr.findIndex((ticketObj) => {
    return ticketObj.ticketID === id;
  });
  return ticketIdx;
}

function setModalToDefault() {
  modalCont.style.display = "none";
  textareaCont.value = "";
  modalPriorityColor = colors[colors.length - 1];
  allPriorityColors.forEach((priorityColorElem, idx) => {
    priorityColorElem.classList.remove("border");
  });
  allPriorityColors[allPriorityColors.length - 1].classList.add("border");
}