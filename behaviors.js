
let getBehaviors = JSON.parse(localStorage.getItem("behaviors"));
let getRecent = JSON.parse(localStorage.getItem("recentAdd"));

let getGoals = JSON.parse(localStorage.getItem("goals"));
let creatingNewGoals = [];

let behaviorsNumber = 0;
let recentBehaviorsNumber = 0;

//if there is a getGoals, then load that to html
if(getGoals){
    let parentNode = $(".background__wrap__goals__all").element;
    for(let i = 0 ; i < getGoals.length; i++){
  
        let wrap = $().createElement("div", "background__wrap__goals__list");
        let numNode = $().createElement("div", "background__wrap__goals__list__method", "0"+(i+1));
        let textNode = $().createElement("div", "background__wrap__goals__list__text", getGoals[i]);

        wrap.appendChild(numNode);
        wrap.appendChild(textNode);

        parentNode.appendChild(wrap);
    }
}


$('#js--addBehavior').click(function(){
    $('#js--addNew').show();
 
    $('#js--addBehavior').css([{"height": "0"}]);
    $('#js--addBehavior').hidden();
});

//add
$("#js--addBehaviorToList").click(function(){
    let newGoal = $("#js--inputNewBehavior").value();
    if(getGoals){
        getGoals.push(newGoal)
        localStorage.setItem("goals", JSON.stringify(getGoals));

        //now add to our goals in html
        let parentNode = $(".background__wrap__goals__all").element;
        let wrap = $().createElement("div", "background__wrap__goals__list");
        let numNode = $().createElement("div", "background__wrap__goals__list__method", "0"+getGoals.length);
        let textNode = $().createElement("div", "background__wrap__goals__list__text", newGoal);

        wrap.appendChild(numNode);
        wrap.appendChild(textNode);

        parentNode.appendChild(wrap);
    }else {
        creatingNewGoals.push(newGoal);
        localStorage.setItem("goals", JSON.stringify(creatingNewGoals));

        //now add to our goals in html
        let parentNode = $(".background__wrap__goals__all").element;
        let wrap = $().createElement("div", "background__wrap__goals__list");
        let numNode = $().createElement("div", "background__wrap__goals__list__method", "0"+creatingNewGoals.length);
        let textNode = $().createElement("div", "background__wrap__goals__list__text", newGoal);

        wrap.appendChild(numNode);
        wrap.appendChild(textNode);

        parentNode.appendChild(wrap);
    }


    $('#js--addBehavior').css([{"height": "3rem"}]);
    $('#js--addBehavior').visible();
    $('#js--addNew').hide();
    $("#js--inputNewBehavior").element.value = "";
});
//cancel
$("#js--cancelAddNewBehavior").click(function(){
    $('#js--addBehavior').css([{"height": "3rem"}]);
    $('#js--addBehavior').visible();
    $('#js--addNew').hide();
});

//load all the behaviors
if(getBehaviors){
    let parents = $(".background__wrap__behaviors").element;
    for(let i = 0; i < getBehaviors.length; i++){
        behaviorsNumber++;
        let wrap = $().createElement("div", "background__wrap__behaviors__box");
        let typeNode = $().createElement("div", "background__wrap__behaviors__box__gbn", "?");
        let textNode = $().createElement("div", "background__wrap__behaviors__box__text", getBehaviors[i])

        wrap.appendChild(typeNode);
        wrap.appendChild(textNode);

        parents.appendChild(wrap);
    }
}

//update the number
$("#js--behaviorTitle").setText("Your Behaviors["+behaviorsNumber+"]");

//load recent behavior
if(getRecent){
    let parents = $("#js--recentBehaviors").element;
    for(let i = 0; i < getRecent.behaviors.length; i++){
        recentBehaviorsNumber++;
        let wrap = $().createElement("div", "background__wrap__behaviors__box");
        let typeNode = $().createElement("div", "background__wrap__behaviors__box__gbn", getRecent.behaviors[i].type);
        let textNode = $().createElement("div", "background__wrap__behaviors__box__text", getRecent.behaviors[i].text)

        wrap.appendChild(typeNode);
        wrap.appendChild(textNode);

        parents.appendChild(wrap);
    }
}

//update the number
$("#js--recentBehaviorTitle").setText("Recent Behaviors["+behaviorsNumber+"]");