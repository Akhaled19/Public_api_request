
                                //Global Variables 
//header
const searchDiv = document.getElementsByClassName('search-container');
const galleryDiv = document.getElementsByClassName('gallery');

//body
const bodyElement = document.getElementsByTagName('body');

                                //API Usage//
//pull 12 random users from the API
    //send a single request to the API w/ promise 
    fetch(`https://randomuser.me/api/?results=12&inc=name,email,cell,location,dob,picture`)
        .then(response => response.json() )
        .then(data => generateImg(data.reults))
        .catch( err => console.error(`Problem with request: ${err.message}`) )
    
        
                               //helper functions
    //deserializing JSON dob string as JS date object 
    //00/00/0000
    const dateFormat = /^\d{2}-\d{2}-\d{4}/;  
    
    function reviver(dob) {
        if(typeof dob === 'string' && dateFormat.test(dob)) {
            return new Date(dob)
        }
        return dob;
    }

                               //Search Box// 
//Employees can be filtered by name 
function appendSearchDiv(data) {
searchDiv.innerHTML = `
    <form action="#" method="get">
        <input type="search" id="search-input" class="search-input" placeholder="Search...">
        <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
    </form>
`; 
}
       

                               //User Directory//     

//12 random user API Info:
function appendGallery(data) {
    data.map(user => {
    const card = document.createElement('div');
    card.setAttribute('class' , 'card');
    galleryDiv.appendChild(card);
    card.innerHTML = 
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
    })    
    galleryDiv.appendChild(userImg);   
}

                             //Modal Window//
function generateModal(data) {
    const card = document.getElementsByClassName('card');
    //loop through cards and generate modals 
    for(let i = 0; i < card[i]; i++) {
        //add a click event on card 
        card[i].addEventListener('click', (e) => {
            const modalContainer = document.createElement('div');
            modalContainer.setAttribute('class' , 'modal-container');
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
                                <p class="modal-text">${user.dob[date]}Birthday: 10/21/2015</p>
                            </div>
                        </div>
                        <div class="modal-btn-container">
                        <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
                        <button type="button" id="modal-next" class="modal-next btn">Next</button>
                    </div>
                `;
            
            //add a click event on the close button 
            const closeButton = document.getElementById('modal-close-btn');
            closeButton.addEventListener('click', (e) => {
                bodyElement.removeChild(modalContainer);
            });    
        })
    }    
}    

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