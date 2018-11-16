// Toggle: between adding and removing a class name from an element with JavaScript.
element.classList.toggle("mystyle");

//in the doc.queryselector(use concatination).textContent //when use the conct we have just the textContent so if we need to use the athor funiton
we must not use the conctin the brackets


//how decide when we must create a function
when we have a lot of call in the same attribut that we have declare previsiolly so we put him in the function

//the general point:
01)we can pass the name of function as parameter of another function
02)we can named a function like var name=function(){ return ,}
03)to full of a list use list.push()
04)sometimes we need to create a function and call it next so in this moment we create a function into brackets:(function(){})();
   we can also pass the parameter varaible :(function(varaible){varaible})(the value of varaible)
05)if we have a function in another function:nameFunction(valueFirstFunction)(valueSecondFucntion)
    the second method is:var function1=functionPere(value); function1(value)

06)the closure function is the feature of javascript programming langages :
    funciton outer(){  function inner(){} return inner;}

07)the role of closure function is :can pas as argument of another function




********************To access to the html and update value use:
document.querySelector("#/. if it is id or class").textContent=Math.floor(Math.random() * 6)+1;
***********************************************************************************************************
********************Floor it is function to convert to the integer number
***********************************************************************************************************
********************it is likelly to use the innerHtml when we nned to display tag html
and use the .textContent when we need to display text
***********************************************************************************************************
********************we have alot of event (mouseover event,keybord event,drag drop event):
document.querySelector('.btn-roll').addEventListener('click',btn)  //this case when we have a function created previouslly
if not :document.querySelector('.btn-roll').addEventListener('click',function(){})
***********************************************************************************************************


******************** //change one element's class to "blue" ::
document.getElementById("div1").className = "blue";
***********************************************************************************************************


********************To deal with the Attribut of te class:
-try to use document.getElementById
 -DomClass.classList.remove('active');  //if the class contain a lot of attribut and we need to remove we have just specifie it.

***********************************************************************************************************

********************Toggle: between adding and removing a class name from an element with JavaScript.
element.classList.toggle("mystyle");
***********************************************************************************************************


********************When we have a attribut to use many time it's possible to
-when we need to declare a varaible we must not declare in the funtion
-To get the content from the input we type: document.querySelector('').value;
***********************************************************************************************************
********************how change the image :
var imgDom=document.querySelector('.dice');
    imgDom.style.display = 'block';
    imgDom.src = 'dice-' + dice + '.png';
***********************************************************************************************************


Object and constructor

********************Object
-we can define in the object contructor a another function that can be call
***********************************************************************************************************

