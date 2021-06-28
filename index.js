
let getDays = JSON.parse(localStorage.getItem("days"));
let getRecent = JSON.parse(localStorage.getItem("recentAdd"));
let recentDayNumber = 0;
let recentBehaviorsNumber = 0;
let recordsNumber = 0;

if(getDays){
    $("#js--emptyDays").hide();
    
    let length = getDays.length> 5 ? 5 : getDays.length;

    for(let i = 0; i < length; i++){
        recentDayNumber++;
        //create a tag, give it class and href
        //create div for number
        //create div for date
        //hook it to a tag
        //push a tag to parent div
        let wrap = $(".background__wrap__days").element;
        let a = $().createElement("a", "background__wrap__days__box");
        a.href = "/day.html?id="+getDays[i].id;
        let number = "0"+(i+1);
        let numNode = $().createElement("div", "background__wrap__days__box__num", number);
        let dateNode = $().createElement("div", "background__wrap__days__box__text", getDays[i].date);

        a.appendChild(numNode);
        a.appendChild(dateNode);

        wrap.appendChild(a);
    }
}

//update the number
$(".background__wrap__recent").setText("Recent days[" + recentDayNumber + "]")

if(getRecent){
    $("#js--emptyBehavior").hide();

    for(let i = 0; i < getRecent.behaviors.length; i++){
        //creat div tag
        //create type
        //create text
        //append type, text to tag
        //append tag to tags div parents
        recentBehaviorsNumber++;
        let tagNode = $().createElement("div", "background__wrap__tags__tag");
        let typeNode = $().createElement("div", "background__wrap__tags__tag__link", getRecent.behaviors[i].type);
        let textNode = $().createElement("div", "background__wrap__tags__tag__text", getRecent.behaviors[i].text);

        tagNode.appendChild(typeNode);
        tagNode.appendChild(textNode);

        let tags = $(".background__wrap__tags").element;
        tags.appendChild(tagNode);
    }
}

//updating recent behaviors
$(".background__wrap__behavior").setText("Recent Behaviors[" + recentBehaviorsNumber + "]");

//load all the records and display it

if(getDays){
    $("#js--emptyRecord").hide();
    

    for(let i = 0; i < getDays.length; i++){
        recordsNumber++;
        //create a tag, give it class and href
        //create div for number
        //create div for date
        //hook it to a tag
        //push a tag to parent div
        let wrap = $(".background__wrap__display__group__days").element;
        let a = $().createElement("a", "background__wrap__display__group__days__box");
        a.href = "/day.html?id="+getDays[i].id;
        let number = "0"+(i+1);
        let numNode = $().createElement("div", "background__wrap__display__group__days__box__num", number);
        let dateNode = $().createElement("div", "background__wrap__display__group__days__box__date", getDays[i].date);

        a.appendChild(numNode);
        a.appendChild(dateNode);

        wrap.prepend(a);
    }
}

//update the records number
$(".background__wrap__sort__wrap").setText("RECORDS[" + recordsNumber + "]");

