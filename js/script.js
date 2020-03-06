/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

//variable to store the student list item elements in the student list
const studentList = document.querySelectorAll('li.student-item');

//variable to store the number of items to show on each “page”
const numItemsPage = 10;

//function to hide all of the items in the list except for the ten I want to show
const showPage = (list, page) => {
  
  startIndex = (page * numItemsPage) - numItemsPage;
  endIndex = page * numItemsPage;
    
  for (let i = 0; i < list.length; i+=1){
    if(i >= startIndex && i < endIndex){
      studentList[i].style.display = '';
    } else {
      studentList[i].style.display = 'none';
    }
  }
}

showPage(studentList,1);

//function to generate, append, and add functionality to the pagination buttons
const appendPageLinks = (list) => {

//1. Determine how many pages are needed for the list by dividing the
//total number of list items by the max number of items per page

  const neededPages = Math.ceil(list.length / numItemsPage);

//2. Create a div, give it the “pagination” class, and append it to the .page div

  let parentDiv = document.querySelector('.page');
  let newDiv = document.createElement('div');
  
  newDiv.className = 'pagination';
  parentDiv.appendChild(newDiv);

//3. Add a ul to the “pagination” div to store the pagination links

  let ulPagination = document.createElement('ul');
  newDiv.appendChild(ulPagination);

//4. for every page, add li and a tags with the page number text
  

  for (let i=1; i <= neededPages; i++){
    let li = document.createElement('li');
    let a = document.createElement('a');
    
    li.className = ('page-link');
    li.value = i;
    
    a.textContent = i;
    
    ulPagination.appendChild(li);
    li.appendChild(a);

    //5. Add an event listener to each a tag. When they are clicked
    //call the showPage function to display the appropriate page
    a.addEventListener('click', () => {                  
      const buttonClicked = event.target;
      const buttonNumber = a.textContent;
      const pageLinks = document.getElementsByTagName('a');

      //6. Loop over pagination links to remove active class from all links
      for (let p = 0; p < pageLinks.length; p++) {
        pageLinks[p].classList.remove('active');
      }
      //7. Add the active class to the link that was just clicked.
      //You can identify that clicked link using event.target
      buttonClicked.classList.add('active');

      showPage(studentList, buttonNumber);                                            
    });
  }
}

appendPageLinks(studentList);