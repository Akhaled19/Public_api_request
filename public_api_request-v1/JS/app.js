alert('testing');

                                 //GLOBAL VARIABLES// 
//const randomUserGenerator = 'https://randomuser.me/api/';


let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://randomuser.me/api/');

xhr.onreadystatechange = function() {
    if(xhr.readyState === 4) {
    var data = JSON.parse(xhr.responseText);
    }

    console.log(data);

}

xhr.send();


                                 //API Usage//
//pull 12 random users from the API
    //send a single request to the API
//async function fetchData(url) {    
    //use the response data to display 12 users(this goes in the User Directory) 
//    const response = await fetch(url); //we use await keyword to wait for a response 
//    const data = response.json(); //then, we parse the response to json
//    return data; //we return the data to be used
//}
//new random employee information displays each time the page loads (?)


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