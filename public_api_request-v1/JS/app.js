                                //Global Variables 
//header
const headerSearchContainer = document.getElementsByClassName('search-container');
const galleryDiv = document.getElementsByClassName('gallery');

//body
const bodyElement = document.getElementsByTagName('body');
const modalContainer = document.createElement('div');

                                //API Usage//
//pull 12 random users from the API
    //send a single request to the API w/ promise 

    fetch('https://randomuser.me/api/?results=12&inc=name,email,location,cell,picture')
        ,then(response => response.json() )
        .then( data => console.log(generateHTML(data) ))
        .catch( err => console.error(err))


                               //User Directory//     

//12 random user API Info:
function generateHTML(data) {
    const userImg = data.map(user => 
        `
        <div class="card">
            <div class="card-img-container">
                <img class="card-img" src="${user.picture[medium]}" alt="profile picture">
            </div>
            <div class="card-info-container">
                <h3 id="name" class="card-name cap">${user.first} ${user.last}</h3>
                <p class="card-text">${user.email}</p>
                <p class="card-text cap">${user.location[city]} , ${user.location[state]}</p>
            </div>
         </div>
        `
        


    )

}
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