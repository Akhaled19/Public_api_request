
                                 //GLOBAL VARIABLES// 
//const randomUserGenerator = 'https://randomuser.me/api/';
const searchBox = document.getElementsByClassName('search-container');

//selected the gallery div 
const gallery = document.getElementsByClassName('gallery');
    //created and appended card and card-info-container divs 
    const card = document.createElement('div');
    card.setAttribute('class', 'card');
    gallery.appendChild(card);

    const cardInfoContainer = document.createElement('div');
    cardInfoContainer.setAttribute('class', 'card-info-container');
    gallery.appendChild(cardInfoContainer);

//created and appended modal-container div
const modalContainer = document.createElement('div');
modalContainer.setAttribute('class', 'modal-container');
document.body.appendChild(modalContainer);
    //Created and appended modal div 
    const modal = document.createElement('div');
    modal.setAttribute('class', 'modal');
    modalContainer.appendChild(modal);
        //Created and appended modal button 
        const modalCloseButton = document.createElement('button');
        modalCloseButton.innerHTML = '<button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>';
        modal.appendChild(modalCloseButton);
        //Created and appended modal-info-container div 
        const modalInfoContainer = document.createElement('div');
        modalInfoContainer.setAttribute('class', 'modal-info-container');
        modal.appendChild(modalInfoContainer);
            //Created and appended modal-img img 
            //Created and appended modal-name cap h3
            //Created and appended modal-text p
            


//Created and appended modal-btn-container div
const buttonModalContainer = document.createElement('div');
buttonModalContainer.setAttribute('class', 'modal-btn-container');
document.body.appendChild(buttonModalContainer); 
    //Created and appended modal-prev button
    //Created and appended modal-next button 





                                 //API Usage//
//pull 12 random users from the API
    //send a single request to the API w/ promise 
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://randomuser.me/api/?results=12');

xhr.onreadystatechange = function() {
    if(xhr.readyState == 200) {
    var data = JSON.parse(xhr.responseText);
    console.log(data);
    //requests fails = logs error to the console
} else {
    console.log(Error('Oh no! There was a problem with your order'));
}
}

xhr.send();
console.log('test');

//new random employee information displays each time the page loads 
    //function
        //get random
        //onload = display


                               //User Directory//     

//12 random user API Info:
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