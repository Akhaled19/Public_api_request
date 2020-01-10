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
    fetch(randomUsersUrl)
        .then( response => response.json() )
        .then( data => console.log(data) )
        .catch( err => console.error(err))
    
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