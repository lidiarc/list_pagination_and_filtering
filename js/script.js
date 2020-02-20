/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing
//Objetos: https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Trabajando_con_objectos

/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/
/*
Create your global variables
This project can be completed with just two global variables
Create a variable to store the student list item elements in the student list.
Pro Tip: Log out the variable storing the list to ensure it equals the list of li items and not the container of the li elements.
Create a variable to store the number of items to show on each “page”, which for this project, is 10.
*/
/* EJEMPLOS:
https://teamtreehouse.com/library/using-constants-with-arrays-and-objects-2
const days = ["Monday"];
days.push("Tuesday")

const person = {first_name: "Lidia"};
person.last_name = "Ramos"

person = {first_name: "Andrew"} --> dará error
person.first_name = "Andrew" --> ok
*/
//const studentList2 = document.querySelector('.student-list');
//console.log('Student List: ' + studentList);
//console.log('List length: ' + studentList2.length);

//variable to store the student list item elements in the student list.
//const studentList = document.getElementsByClassName('li.student-item cf');
//const studentList = document.querySelectorAll('li.student-list');
const studentList = document.querySelectorAll('li.student-item');
console.log('Student List: ' + studentList);
console.log('List length: ' + studentList.length);

//variable to store the number of items to show on each “page”
const numItemsPage = 10;

/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/
/*
Display a “page”
1.Create a function to hide all the students except for the ten you want displayed on a given page.
2.This function should have two parameters:
  -The list parameter to represent the actual list of students that you’ll pass in as an argument later when you call this function.
  -The page parameter to represent the page number that you’ll pass in as an argument later when you call this function.
3.Inside the function:
  -Create two variables to store the start index and the end index of the list items to be displayed on the given page. To make this function 
  dynamic and work with a list of any length, a bit of basic math can be used to determine these values.
    -Start Index = (page parameter * items per page) - items per page
    -End Index = page parameter * items per page
  -Loop over the list parameter.
    -Inside the loop, display any list item with an index that is greater than or equal to the start index variable and less than the end index variable.
4.Pro Tip: If you call this function in the early stages of building the function, you’ll be able to use log statements and the Chrome dev tools console
 to test and check that variables, values and indexes are what you think they are.
5.Project Warm Ups: Creating and using functions, and selecting and manipulating sections of a list can feel confusing at first. For some helpful practice, 
check out the project Warm Ups List Section Selection and What's the Deal with Functions.
*/

const showPage = (list, page) => {
  //Start Index = (page parameter * items per page) - items per page
  startIndex = (page * numItemsPage) - numItemsPage;
  console.log('startIndex: ' + startIndex);

  //End Index = page parameter * items per page
  endIndex = page * numItemsPage;
  console.log('endIndex: ' + endIndex);

  //const newPageList = [];

  
  //Loop over items in the list parameter
  //-- If the index of a list item is >= the index of the first
  //item that should be shown on the page
  //-- && the list item index is <= the index of the last item
  //that should be shown on the page, show it
  
  //for (let i = 0; i < list.length; i+=1){
  for (let i = 0; i <= list.length; i+=1){
    console.log('List length: ' + list.length);
    console.log('i: ' + i);
    if(i >= startIndex && i < endIndex){
      studentList[i].style.display = '';
      console.log('i: ' + i);
      //newPageList.push[i];
      //alert(newPageList[i] + 'hola');
    } /*else {
      studentList[i].style.display = 'none';
    }*/
  }
}

showPage(studentList,1);

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

const appendPageLinks = (list) => {

//1. Determine how many pages are needed for the list by dividing the
//total number of list items by the max number of items per page

  const neededPages = Math.ceil(list.length / numItemsPage);
  console.log('neededPages' +  neededPages);

//2. Create a div, give it the “pagination” class, and append it to the .page div

  let parentDiv = document.querySelector('.page');
  let newDiv = document.createElement('div');
  newDiv.className = 'pagination';
  parentDiv.appendChild(newDiv);

//3. Add a ul to the “pagination” div to store the pagination links

  let ulPagination = document.createElement('ul');
  newDiv.appendChild(ulPagination);

//4. for every page, add li and a tags with the page number text

  for (let i=0; i <= neededPages; i++){
    let li = document.createElement('li');
    li.class = ('page-link');
    li.value = i;
    ulPagination.appendChild(li);

//5. Add an event listener to each a tag. When they are clicked
//call the showPage function to display the appropriate page

    li.addEventListener('click', () => {
      showPage(studentList, i);
    });
  }

//6. Loop over pagination links to remove active class from all links

  var pageLinks = document.querySelectorAll('.page-link');

  for (var i = 0; i < pageLinks.length; i++) {
    pageLinks[i].classList.remove('active');


//7. Add the active class to the link that was just clicked.
//You can identify that clicked link using event.target

    if (pageLinks[i] === event.target){
    pageLinks[i].classList.add('active');
    }
  }
}



appendPageLinks(studentList);

/* IMPRIMIR DATOS:
https://teamtreehouse.com/library/defining-a-variable-with-let-2
*/

/* EVENTO CLICK BOTON
https://teamtreehouse.com/library/using-let-with-for-loops-2

<html>
  <head>
    <title>buttons - let and Const</title>
  </head>
  <body>
    <h1>Buttons</h1>
    <button>Button 0</button>
    <button>Button 1</button>
    <button>Button 2</button>
    <button>Button 3</button>
    <button>Button 4</button>
    <button>Button 5</button>
    <button>Button 6</button>
    <button>Button 7</button>
    <button>Button 8</button>
    <button>Button 9</button>
    <script>
      const buttons = document.getElementsByTagName("button");
      
      for(let i = 0; i < buttons.length; i++) {
          const button = buttons[i];
          button.addEventListener("click", function() {
              alert("Button " + i + " Pressed");
          });
      }
    </script>
  </body>
</html>
*/



// Remember to delete the comments that came with this file, and replace them with your own code comments.