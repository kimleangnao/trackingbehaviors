
//for create

let getDays = JSON.parse(localStorage.getItem('days'));
//console.log("getDays:", getDays);
let getBehaviors = JSON.parse(localStorage.getItem('behaviors'));

let creatingNewDay = {
    "id": "",
    "date" : "",
    "behaviors":[ 
        
    ]
}
let creatingBehaviors = [
    "Woke up"
]

//add select options
if(getBehaviors){
    //alright we have behavior now add those
    let selectElement = $("#js--selectChoice").element;
    for(let i = 0 ; i < getBehaviors.length; i++){
        let option = $().createElement("option", "", getBehaviors[i]);
        option.value = getBehaviors[i];
        selectElement.add(option);
    }
}else{
    //create behavior
    //add the 4 base behavior
    let selectElement = $("#js--selectChoice").element;
    for(let i = 0 ; i < creatingBehaviors.length; i++){
        //check first, if this new behavior is already existed or not
        
        let option = $().createElement("option", "", creatingBehaviors[i]);
        option.value = creatingBehaviors[i];
        selectElement.add(option);
    }
}

function addBehaviorOptionsToSelect(behaviorsArray){
    let selectElement = $("#js--selectChoice").element;
    for(let i = 0 ; i < behaviorsArray.length; i++){
        //check first, if this new behavior is already existed or not
        let found = false;
        for(let j = 0; j < creatingBehaviors.length; j++){
            if(creatingBehaviors[j].toLocaleLowerCase() == behaviorsArray[i].toLocaleLowerCase()){
                //found 
                found = true;
            }
        }
        if(found == false){
            let option = $().createElement("option", "", behaviorsArray[i]);
            option.value = behaviorsArray[i];
            selectElement.add(option);
            console.log("creatingBehavior:", creatingBehaviors);
            console.log("behaviorsArray[i]:", behaviorsArray[i]);
            creatingBehaviors.push(behaviorsArray[i]);
            console.log("creatingBehavior:", creatingBehaviors);
        }
    }
}

// 1= choose from select
// 2= write a new behavior
let whatBehaviorTypeAmIOn = 1;



$('#js--addBehavior').click(function(){
    $('#js--addNew').show();
 
    $('#js--addBehavior').css([{"height": "0"}]);
    $('#js--addBehavior').hidden();
});

$("#js--choose").click(function(){
    $("#js--inputNewBehavior").hide();
    $("#js--selectChoice").show();
    whatBehaviorTypeAmIOn = 1;
});

$("#js--addNewBehavior").click(function(){
    $("#js--selectChoice").hide();
    $("#js--inputNewBehavior").show();
    whatBehaviorTypeAmIOn = 2;
});

//cancel add behavior
$("#js--cancelAddNewBehavior").click(function(){
    $('#js--addNew').hide();
    $('#js--addBehavior').visible();
    $('#js--addBehavior').css([{"height": "3rem"}]);
});

$("#js--addBehaviorToList").click(function(){
    if(whatBehaviorTypeAmIOn == 1){
        //chose from select
        let type = $("#js--typeSelect").value();
        let text = $("#js--selectChoice").value();
     
        let wrap = $(".background__wrap__form__behaviors");
    
        let wrapper = $().createElement("div", "background__wrap__form__behavior");
        let typeNode = $().createElement("div", "background__wrap__form__behavior__gbn", `${type}`);
        let textNode = $().createElement("div", "background__wrap__form__behavior__text", `${text}`);
        //console.log(wrapper, typeNode, textNode)
      
        wrapper.appendChild(typeNode)
        wrapper.appendChild(textNode)
        
        wrap.element.appendChild(wrapper);

        let newObject = {"type": type, "text": text}
        creatingNewDay.behaviors.push(newObject);
    }else if (whatBehaviorTypeAmIOn == 2){
        let text = $("#js--inputNewBehavior").value();
        if(text != ""){
            //input new one
            let type = $("#js--typeSelect").value();
            let text = $("#js--inputNewBehavior").value();

            let wrap = $(".background__wrap__form__behaviors");

            let wrapper = $().createElement("div", "background__wrap__form__behavior");
            let typeNode = $().createElement("div", "background__wrap__form__behavior__gbn", type);
            let textNode = $().createElement("div", "background__wrap__form__behavior__text", text);
            //console.log(wrapper, typeNode, textNode)

            wrapper.appendChild(typeNode)
            wrapper.appendChild(textNode)

            wrap.element.appendChild(wrapper);

            let newObject = {"type": type, "text": text}
            creatingNewDay.behaviors.push(newObject);
        }
        
    }

    //check in the creatingBehaviors if this new behavior does not exist, add it
    let text = $("#js--inputNewBehavior").value();
    if(text != ""){
        let arrayText  = [];
        arrayText.push(text);
        addBehaviorOptionsToSelect(arrayText)
    }


    $('#js--addNew').hide();
    $('#js--addBehavior').visible();
    $('#js--addBehavior').css([{"height": "3rem"}]);
    $(".background__wrap__days__empty").hide();
    $("#js--inputNewBehavior").element.value = "";
});


let form = $(".background__wrap__form").element;

form.addEventListener("submit", function(e){
    e.preventDefault();
    


    let date = $("#js--createDate").value();
   

    if(date){
        let id = Math.floor(Math.random() * 1000000)
        creatingNewDay.id = id;
        creatingNewDay.date = date;
        console.log(creatingNewDay)

        //posting it to localstorage as recent with id
        //id: {}
        localStorage.setItem("recentAdd", JSON.stringify(creatingNewDay));

        //check if getDays existed
        //if no create a new one
        //if yes add it
        /*structure
        days : [
            {
                "id": "11212",
                "date": "1212121",
                "behaviors": [
                    {
                        "type": "-",
                        "text": "on youtube"
                    }
                ]
            },
            {
                "id": "112",
                "date": "12121",
                "behaviors": [
                    {
                        "type": "-",
                        "text": "on youtube"
                    }
                ]
            }
        ]
        */
        if(getDays){
            //add
            getDays.push(creatingNewDay);
            localStorage.setItem("days", JSON.stringify(getDays));
        }else{
            //create
            let days = [];
            days.push(creatingNewDay);
            localStorage.setItem("days", JSON.stringify(days));
        }

        //updating behavior
        localStorage.setItem("behaviors", JSON.stringify(creatingBehaviors));



        window.location.href = "day.html?id=" + id;

    }else{
        //you need a day
        alert("You need a date")
    }
    
})
