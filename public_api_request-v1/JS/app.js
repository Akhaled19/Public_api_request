
                                //Global Variables 
//header
const searchDiv = document.getElementsByClassName('search-container');
const galleryDiv = document.getElementsByClassName('gallery');

//body
const bodyElement = document.getElementsByTagName('body');

                                //API Usage//
//pull 12 random users from the API
    //send a single request to the API w/ promise 

    fetch('https://randomuser.me/api/?results=12&inc=name,email,location,cell,picture')
        ,then(response => response.json() )
        .then( data => console.log(data) )
        .catch( err => console.error(err) )
    
    fetch('https://randomuser.me/api/?results=12&inc=dob')
        .then( dobResponse => dobResponse.json(reviver) )
        .then( dob => console.log(dob) )
        .catch( err => console.error(err) )
         
        
                               //helper functions
    //deserializing JSON dob string as JS date object 
    //00/00/0000
    const dateFormat = /^\d{2}-\d{2}-\d{4}/;  
    
    function reviver(value) {
        if(typeof value === 'string' && dateFormat.test(value)) {
            return new Date(value)
        }
        return value;
    }


                               //User Directory//     

//12 random user API Info:
function generateImg(data) {
    const card = document.createElement('div');
    card.className = 'card';
    galleryDiv.appendChild(card);
    card.innerHTML = 

    //First and Last name 
    //Email 
    //City or location
        `
            <div class="card-img-container">
                <img class="card-img" src="${user.picture[medium]}" alt="profile picture">
            </div>
            <div class="card-info-container">
                <h3 id="name" class="card-name cap">${user.name[first]} ${user.name[last]}</h3>
                <p class="card-text">${user.email}</p>
                <p class="card-text cap">${user.location[city]}, ${user.location[state]}</p>
            </div>
        `;
}
function generateModal(data) {
    const modalContainer = document.createElement('div');
    modalContainer.className = 'modal-container';
    bodyElement.appendChild(modalContainer);
    modalContainer.style.display = 'none';
    modalContainer.innerHTML = `
                <div class="modal">
                    <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                    <div class="modal-info-container">
                        <img class="modal-img" src=${user.picture[large]} alt="profile picture">
                        <h3 id="name" class="modal-name cap">${user.name[first]} ${user.name[last]}</h3>
                        <p class="modal-text">${user.email}</p>
                        <p class="modal-text cap">${user.location[city]}</p>
                        <hr>
                        <p class="modal-text">${user.cell}</p>
                        <p class="modal-text">${user.location[street]}, ${user.location[city]}, ${user.location[state]}, ${user.location[postcode]}</p>
                        <p class="modal-text">${user.dob[data]}Birthday: 10/21/2015</p>
                    </div>
                </div>
                <div class="modal-btn-container">
                <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
                <button type="button" id="modal-next" class="modal-next btn">Next</button>
            </div>
        `;
}    

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