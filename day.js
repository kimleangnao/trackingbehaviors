
//get from local storage
//check id

let getLocalStorage = JSON.parse(localStorage.getItem("recentAdd"));

let currentDate = new Date(getLocalStorage.date)
let currentDateString = `${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`

$(".background__wrap__date").setText(currentDateString)

let wrap = $(".background__wrap__behaviors--day").element;
//go through all the behaviors and add it
for(let i = 0 ; i < getLocalStorage.behaviors.length; i++){
    
    let wrapper =   $().createElement("div", "background__wrap__behavior--view");
    //maybe later
    //let deleteNode = $().createElement("div", "background__wrap__behavior--view__delete");
    //deleteNode.innerHTML = "<i class='fas fa-trash'></i>";
    let typeNode = $().createElement("div", "background__wrap__behavior--view__type", getLocalStorage.behaviors[i].type);
 
    let textNode = $().createElement("div", "background__wrap__behavior--view__text", getLocalStorage.behaviors[i].text);

    //console.log(typeNode, textNode)
    //wrapper.appendChild(deleteNode)
    wrapper.appendChild(typeNode)
    wrapper.appendChild(textNode)

    wrap.appendChild(wrapper);

    
}   



