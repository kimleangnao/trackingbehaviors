
/*
* This function accept one element(prefer id)
*/

let $ = (function(){
    'use strict';

    let select = function(element){
        this.element = document.querySelector(element)
    }   

    //work with form
    select.prototype.value = function(){
        return this.element.value;
    }

    select.prototype.printHello = function(){
        console.log("Hello");
    }

    // * give ID to element, if element already had an ID, it will override
    select.prototype.id = function(id){
        this.element.id = id;
    }

    // * Accept a string
    select.prototype.addClass = function(className){
        this.element.classList.add(className);
    }

    // * Accept an array of string
    select.prototype.addClasses = function(classNames){
        //expect className to be array of string
        for(let i = 0; i < classNames.length; i++){
            this.element.classList.add(classNames[i]);
        }
    }

    // * does element has a certain class
    select.prototype.hasClass = function(className){
        //expect className to be array of string
        if(this.element.classList.contains(className)){
            return true;
        }else{
            return false;
        }
    }

    // * return element with the given param className
    select.prototype.selectClasses = function(className){
        //expect className to be array of string
        return document.getElementsByClassName(className);
    }

    // * select all classes and return the index that provide
    // * index is optional
    select.prototype.selectClassesAtIndex = function(className, index){
        //expect className to be array of string
        let selectedClasses = document.getElementsByClassName(className);
        if(index){
            if(selectedClasses[index] != undefined){
                return selectedClasses[index];
            }
        }else{
            return selectedClasses;
        }
      
    }

    // * Accept a string(class to remove from this element)
    select.prototype.removeClass = function(removeThisClass){
        this.element.classList.remove(removeThisClass);
    }

    // * Accept an array of string(classes to remove from this element)
    select.prototype.removeClasses = function(removeThisClasses){
        for(let i = 0; i < removeThisClasses.length; i++){
            this.element.classList.remove(removeThisClasses[i]);
        }
    }

     // * remove an element
     select.prototype.remove = function(){
       this.element.remove();
    }



    // * add click to element, accept a function
    select.prototype.click = function(fn){
        this.element.addEventListener("click", function(){
            console.log("click!?")
            fn();
        })
    }
    // * add hover to element, accept a function
    select.prototype.mouseover = function(fn){
        this.element.addEventListener("mouseover", function(){
            fn();
        })
    }
    // * add mouse out to element, accept a function
    select.prototype.mouseout = function(fn){
        this.element.addEventListener("mouseout", function(){
            fn();
        })
    }
    // * add mousemove to element, accept a function
    select.prototype.mousemove = function(fn){
        this.element.addEventListener("mousemove", function(){
            fn();
        })
    }

    // * accept a string(size) 
    select.prototype.fontSize = function(size){
        this.element.style.fontSize = size;
    }

     // * accept an array of value(size,style,color) 
     select.prototype.border = function(size, style, color){
        this.element.style.border = size + " " + style + " " + color;
    } 

    // * accept a string(color name) 
    select.prototype.color = function(colorName){
        this.element.style.color = colorName;
    }

    // * accept a string(color name) 
    select.prototype.backgroundColor = function(colorName){
        this.element.style.background = colorName;
    }

    // * accept a string(a path) 
    select.prototype.link = function(aLink){
        window.location.href = aLink;
    }

    // * create an element inside a body
    // * accept 1 param, 2 optional params, type(div, p, span ...etc), optional className, and text
    // * className can be an array (example: ["class1", "class2"])
     select.prototype.createElement = function(type, className, text){
        let newNode = document.createElement(type);
        if(className){
            if(Array.isArray(className)){
                for(let i = 0; i < className.length; i++){
                    newNode.classList.add(className[i])
                }
            }else{
                newNode.classList.add(className)
            }
            
        }
        if(text){
            let textNode = document.createTextNode(text);
            newNode.appendChild(textNode);
        }
        return newNode;
    }

    // * create a child element inside this current element
    // * accept 1 param, 2 optional params, type(div, p, span ...etc), optional className, and text
    select.prototype.createChildNode = function(type, className, text){
        let newNode = document.createElement(type);

        if(className){
            newNode.classList.add(className)
        }
        if(text){
            let textNode = document.createTextNode(text);
            newNode.appendChild(textNode);
        }

        this.element.appendChild(newNode);
    }

    // * change the inner HTML to param that passed
    select.prototype.setText = function(text){
        this.element.innerHTML = text;
    }

    // * return text of this element
    select.prototype.text = function(){
        return this.element.textContent;
    }

    // * return children of element
    select.prototype.children = function(){
        return this.element.childNodes;
    }

    // * return first child 
    select.prototype.firstChild= function(){
        return this.element.childNodes[0];
    }

    // * return first child Text
    // * return the text in the Element if the first child is an element otherwise, undefined
    select.prototype.firstChildText = function(){
        return this.element.childNodes[0].innerHTML;
    }


    // * return parent of the element
    select.prototype.parentsNodeName = function(){
        return this.element.parentNode.nodeName;
    }
    select.prototype.parentsNode = function(){
        return this.element.parentNode;
    }

    // * clone an element and it children
    // * optonal classes (classes can be more than 1, example: ["class1", "class2"]) and id
    select.prototype.clone = function(classes, id){
        //copy the element you provide
        //hook it intot he dom
        let clone = this.element.cloneNode(true);
        
        if(clone.id != ""){
            if(id){
                clone.id = id;
            }else{
                clone.id = "";
            }
        }else{
            if(id){
                clone.id = id;
            }else{
                clone.id = "";
            }
        }
        if(Array.isArray(classes)){
            for(let i = 0; i < classes.length; i++){
                clone.classList.add(classes[i])
            }
        }else{
            clone.classList.add(classes)
        }
        this.element.after(clone);
    }


    // * CSS

    // * give css to the element selected
    // * accept an array of object css properties
    select.prototype.css = function(properties){
        for(let i = 0; i < properties.length; i++){
            for(let key in properties[i]){
                if(properties[i].hasOwnProperty(key)){
                    //console.log("key:", key);
                    //console.log("value:", properties[i][key])
                    this.element.style[key] =  properties[i][key];
                }
            }
        }
    }

    // * set height of element
    select.prototype.height = function(height){
        this.element.style.height = height;
    }
   
    // * set width of element
    select.prototype.width = function(width){
        this.element.style.width = width;
    }

    // * line-height css
    select.prototype.lineHeight = function(height){
        this.element.style.lineHeight = height;
    }

    // * text-align css (param: align ->  left, right, center)
    select.prototype.textAlign = function(align){
        this.element.style.textAlign = align;
    }

    // * font-family css 
    select.prototype.fontFamily = function(fontName){
        this.element.style.fontFamily = fontName;
    }

    // * font-family css 
    select.prototype.position = function(position){
        this.element.style.position = position;
    }

    // * font-family css 
    select.prototype.zIndex = function(index){
        this.element.style.zIndex = index;
    }





    //Effect: hide, show
    // * hide an element
    select.prototype.hide = function(){
        this.element.style.display = "none";
    }
    // * show an element
    select.prototype.show = function(){
        this.element.style.display = "block";
    }

    // * hide/show an element
    select.prototype.toggle = function(element){
        //add click to element
        //if click, check if true, change to false, and hide
        //if click, check if false, change to true, and show
        let toggle = true;
        let currentElement  = document.querySelector(element);
        this.element.addEventListener("click", function(){
            if(toggle == true){
                currentElement.style.display = "none";
                toggle = false;
            }else{
                currentElement.style.display = "block";
                toggle = true;
            }
        });
    }

    // * visible element
    select.prototype.visible = function(){
        this.element.style.visibility = "visible";
    }

    // * hidden element
    select.prototype.hidden = function(){
        this.element.style.visibility = "hidden";
    }

    // * change the height of the element and reveal it slowly in an animation 
    // * ACCEPT PARAMS: max height, and slide down time in second
    select.prototype.slideDown = function(height,time){

        const start = {
            height: "0px"
        }
        
        const end = {
            height: height
        }
        
        Object.assign(this.element.style, start);
        this.element.style.transition = "all " +time+ "s linear";

        requestAnimationFrame(() => {
            Object.assign(this.element.style, end);
        });
    }

    // * change the height of the element and reveal it slowly in an animation 
    // * ACCEPT PARAMS: max height **height must be string, and slide down time in second, 
    select.prototype.slideUp = function(height,time){

        const end = {
            height: "0px"
        }
        
        const start = {
            height: height
        }
    
        Object.assign(this.element.style, start);
        this.element.style.transition = "all " +time+ "s linear";

        requestAnimationFrame(() => {
            Object.assign(this.element.style, end);
         
        });
    }

    // * slide element to the left and hide it, using parent element and overflow hidden
    select.prototype.slideLeft = function(speedTime){

        const end = {
            marginLeft: "-100%"
        }
        
        const start = {
            marginLeft: "0%"
        }
    
        Object.assign(this.element.style, start);
        this.element.style.transition = "all " +speedTime+ "s linear";

        requestAnimationFrame(() => {
            Object.assign(this.element.style, end);
        });
    }

    // * slide element to the left and hide it, using parent element and overflow hidden
    select.prototype.slideFromLeft = function(speedTime){

        const end = {
            marginLeft: "0%"
        }
        
        const start = {
            marginLeft: "-100%"
        }

        Object.assign(this.element.style, start);
        this.element.style.transition = "all " +speedTime+ "s linear";

        requestAnimationFrame(() => {
            Object.assign(this.element.style, end);
        });
    }

    // * slide element to the right and hide it, using parent element and overflow hidden
    select.prototype.slideRight = function(speedTime){

        const end = {
            marginLeft: "100%"
        }
        
        const start = {
            marginLeft: "0%"
        }
    
        Object.assign(this.element.style, start);
        this.element.style.transition = "all " +speedTime+ "s linear";

        requestAnimationFrame(() => {
            Object.assign(this.element.style, end);
        });
    }
    // * slide element to the right and hide it, using parent element and overflow hidden
    select.prototype.slideFromRight = function(speedTime){

        const end = {
            marginLeft: "0%"
        }
        
        const start = {
            marginLeft: "100%"
        }
    
        Object.assign(this.element.style, start);
        this.element.style.transition = "all " +speedTime+ "s linear";

        requestAnimationFrame(() => {
            Object.assign(this.element.style, end);
        });
    }


    // * fade element out of existence
    select.prototype.fadeOut = function(speedTime){

        const end = {
            opacity: 0
        }
        
        const start = {
            opacity: 1
        }
    
        Object.assign(this.element.style, start);
        this.element.style.transition = "all " +speedTime+ "s linear";

        requestAnimationFrame(() => {
            Object.assign(this.element.style, end);
        });
    }
  
    // * fade element into existence
    select.prototype.fadeIn = function(speedTime){

        const end = {
            opacity: 1
        }
        
        const start = {
            opacity: 0
        }
    
        Object.assign(this.element.style, start);
        this.element.style.transition = "all " +speedTime+ "s linear";

        requestAnimationFrame(() => {
            Object.assign(this.element.style, end);
        });
    }

    // * fade element into existence with percentage and time
    select.prototype.fadeTo = function(percentage, speedTime){

        const end = {
            opacity: percentage
        }
        
        const start = {
            opacity: 1
        }
    
        Object.assign(this.element.style, start);
        this.element.style.transition = "all " +speedTime+ "s linear";

        requestAnimationFrame(() => {
            Object.assign(this.element.style, end);
        });
    }

    // * fade element into existence with percentage and time
    select.prototype.moveTo = function(marginLeft, marginTop, speedTime){

        const end = {
            marginLeft: marginLeft,
            marginTop: marginTop
        }
        
        const start = {
            marginLeft: this.element.marginLeft,
            marginTop: this.element.marginTop
        }
    
        Object.assign(this.element.style, start);
        this.element.style.transition = "all " +speedTime+ "s linear";

        requestAnimationFrame(() => {
            Object.assign(this.element.style, end);
        });
    }

    




    let instantiate = function(element){
        return new select(element);
    }

    return instantiate;
})();
/*
//6/9/21
$('#body').printHello();
$('#body').addClass("newClass");
$('#body').addClasses(["newClass1", "newClass2", "newClass3"]);

$('#body').removeClasses(["newClass1", "newClass2"]);

$('#body').click(function(){
    $('#body').color("red");
    $('#body').backgroundColor("grey");
});

$("#body").mouseover(function(){
    $("#body").color("green");
    $("#body").fontSize("100px");
});

$("#body").mouseout(function(){
    $("#body").color("white")
    $("#body").fontSize("15px");
});

$("#body").click(function(){
    //go to /home
    $("#body").link("www.youtube.com")
})


//$("#body").border("0px", "solid", "red");


//6/10/21

$().createElement("div", "classRed", "I am a new div element.");

$().createElement("button", "classRed2", "click to hide div.");
$().createElement("button", "classRed3", "click to show div.");
$().createElement("button", "classRed4", "Toggle");

$().createElement("button", ["test1", "test2"], "test2");
$().createElement("button", "test3", "test1");
$().createElement("button", "test1", "test1");
$().createElement("button", "test1", "test1");


$(".classRed2").click(function(){
    $("#body").hide();
})
$(".classRed3").click(function(){
    $("#body").show();
})
$(".classRed4").toggle("#body");

let trueOrFalse = $(".classRed4").hasClass("classRed1");
//console.log(trueOrFalse)
let childrensOfBody =  $("#body").children();
//console.log(childrensOfBody);


let classes = $().selectClasses("test1");
//console.log("many classes:", classes)

//$(".test2").clone("newtest", "specificId");

//6/11/21
$("#body").css([{"backgroundColor": "red"}, {"width": "100px"}, 
{"fontSize": "15px"}, {"display": "block"}, {"margin": "0 auto"}, {"color": "white"}, {"textAlign": "center"}])

let parentNode = $("#body").parentsNode();

let parentNodeName = $("#body").parentsNodeName();

let firstChild = $("#body").firstChild();

let firstChildText = $("#body").firstChildText();

//$(".test2").remove()
$(".test2").setText("Button-1")

let textContent = $(".test2").text();
//console.log(textContent);

$(".test3").id("specialId-2");
$("#specialId-2").text("special button-2")

//select classes at this index
let classesAtIndex2 = $().selectClassesAtIndex("test1", 2);
//console.log(classesAtIndex2);

//6-14-21
$().createElement("div", "box");
$(".box").css([{ "height": "150rem" }, {"width" : "50rem"}, {"border": "1px solid red"}, {"margin" : "0 auto"}, {"display": "flex"}, {"flexFlow" :"row wrap"}, {"alignContent": "flex-start"}]);
//div 1
$(".box").createChildNode("div", "child1");
$(".child1").css([{"width": "220px"}, {"height" : "440px"}, {"backgroundColor": "red"}, {"margin": "1rem"}])
//div 2
$(".box").createChildNode("div", "child2");
$(".child2").css([{"width": "220px"}, {"height" : "440px"}, {"backgroundColor": "green"}, {"margin": "1rem"}])
//div 3
$(".box").createChildNode("div", "child3");
$(".child3").css([{"width": "220px"}, {"height" : "440px"}, {"backgroundColor": "purple"}, {"margin": "1rem"}])
//div 4
$(".box").createChildNode("div", "child4");
$(".child4").css([{"width": "220px"}, {"height" : "440px"}, {"border": "0px solid purple"}, {"margin": "1rem"}, {"position": "relative"}, {"overflow": "hidden"}])
//div children of div 4
$(".child4").createChildNode("div", "childofchild1");
$(".childofchild1").css([{"width": "220px"}, {"height" : "440px"}, {"backgroundColor": "peru"}, {"margin": "0rem"}])

$(".box").createChildNode("div", "child5");
$(".child5").css([{"width": "220px"}, {"height" : "440px"}, {"border": "0px solid purple"}, {"margin": "1rem"}, {"position": "relative"}, {"overflow": "hidden"}])
//div children of div 4
$(".child5").createChildNode("div", "childofchild2");
$(".childofchild2").css([{"width": "220px"}, {"height" : "440px"}, {"backgroundColor": "peru"}, {"margin": "0rem"}])
//div 6
$(".box").createChildNode("div", "child6");
$(".child6").css([{"width": "220px"}, {"height" : "440px"}, {"backgroundColor": "peru"}, {"margin": "1rem"}, {"position": "relative"}, {"overflow": "hidden"}]);
//div 7
$(".box").createChildNode("div", "child7");
$(".child7").css([{"width": "220px"}, {"height" : "440px"}, {"backgroundColor": "peru"}, {"margin": "1rem"}, {"position": "relative"}, {"overflow": "hidden"}]);
//div 8
$(".box").createChildNode("div", "child8");
$(".child8").css([{"width": "220px"}, {"height" : "440px"}, {"backgroundColor": "peru"}, {"margin": "1rem"}, {"position": "relative"}, {"overflow": "hidden"}]);

//slide down div 2
$(".child2").slideDown("440px", 5);
//slide up dive 3
$(".child3").slideUp("440px", 5);
//child of div 4, child1
$(".childofchild1").slideLeft(5);
//child of div 4, child1
$(".childofchild1").slideFromLeft(3);
//child of div 5, child1
$(".childofchild2").slideRight(5);
//child of div 5, child1
$(".childofchild2").slideFromRight(3);
//fadeOut
$(".child6").fadeOut(3);
//fadeIn
$(".child7").fadeIn(3);
//fadeTo
$(".child8").fadeTo(0.4, 3);
//change backgroundColor
$(".newClass").backgroundColor("DeepSkyBlue");

$(".newClass").height("150px");
$(".newClass").width("250px");
$(".newClass").lineHeight("150px");
$(".newClass").textAlign("right");
$(".newClass").fontFamily("Arial");
$(".newClass").position("sticky");
$(".newClass").css([{"top": "0"}])
$(".newClass").zIndex(10)

*/