
                                 //GLOBAL VARIABLES// 
//const randomUserGenerator = 'https://randomuser.me/api/';
const searchBox = document.getElementsByClassName('search-container');
const gallery = document.getElementsByClassName('gallery');





                                 //API Usage//
//pull 12 random users from the API
    //send a single request to the API
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://randomuser.me/api/?results=12');
xhr.onreadystatechange = function() {
    if(xhr.readyState === 200) {
    var data = JSON.parse(xhr.responseText);
    console.log(data);
    } else { //requests fails = logs error to the console
        console.log(Error('oh no! There is a problem with your order'));
    } 
}    
xhr.send();
//new random employee information displays each time the page loads 
    //function
        //get random
        //onload = display


                               //User Directory//     

//12 random user API Info:

//created and appended modal-container div
const modalContainer = document.createElement(div);
modalContainer.setAttribute('class', 'modal-container');
document.body.appendChild(modalContainer);

//Created and appended modal div 
const modal = document.createElement('div');
modal.setAttribute('class', 'modal');
modalContainer.appendChild(modal);

//Created and appended modal-btn-container div
const buttonModalContainer = document.createElement('div');
buttonModalContainer.setAttribute('class', 'modal-btn-container');
document.body.appendChild(buttonModalContainer); 

    //First and Last name 
    //Email 
    //City or location

//Employees can be filtered by name 
    //dynamically add a search feature 

                             //Modal Window//

//Click event on user = open detail modal window 

    //add functionality to switch back and forth between employees 
        //beginning and end of the list !== error in the console 

    //Modal window displays the following:
        // Employee image 
        // Name 
        //Email 
        //City or location 
        //Cell Number 
        //Detailed Address(street name & number, state or country, and post code)
        // 'X' to close the modal window    

                            //Structure, style, CSS

//The elements of the directory and modal window are in place & match the mockups 
//Add styling:
    //color
    //background color 
    //font
    //box or text shadows                             