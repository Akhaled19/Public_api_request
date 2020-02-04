
                                //Global Variables 
//header
const galleryDiv = document.getElementById('gallery');
//console.log(`the problem: ${galleryDiv}`);

//body
const bodyElement = document.querySelector('body');
let usersArray = [];



                                //API Usage//
//pull 12 random users from US from the API 
    //fetch data 
    fetch(`https://randomuser.me/api/?results=12&nat=us`)
    //convert to json
        .then(response => response.json() )
    // takes parsed data and adds it to an array and calls the helper function   
        .then(data => {
            usersArray = [...data.results];
            generateCards(data.results);
            //console.log(generateCards);
        })
    //catching errors     
       .catch( err => console.error(`Problem with request: ${err.message}`) )
    
        
                               //helper functions
    //deserializing JSON dob string as JS date object 
    //00/00/00
    /** const dateFormat =  /^\d{2}-\d{2}-\d{2}Z$/;  
    
    function reviver(dob) {
        if(typeof dob === 'string' && dateFormat.test(dob)) {
            return new Date(dob)
        }
        return dob;
    } */   

       
                               //User Directory//     

//function creates a card for each user 
function generateCards(employee) {
    //create a card for each user 
    for( i = 0; i < employee.length; i++) {
        let card = 
           `
            <div title="${i}" class="card">
                <div title="${i}" class="card-img-container">
                    <img title="${i}" class="card-img" src="${employee[i].picture.medium}" alt="profile picture">
                </div>
                <div title="${i}"class="card-info-container">
                    <h3 title="${i}" id="name" class="card-name cap">${employee[i].name.first} ${employee[i].name.last}</h3>
                    <p title="${i}" class="card-text">${employee[i].email}</p>
                    <p title="${i}" class="card-text cap">${employee[i].location.city}, ${employee[i].location.state}</p>
                </div>
            </div>     
            `;
        galleryDiv.innerHTML += card; 
        //console.log(`galleryDiv: ${galleryDiv}`);

    }    
}  

                             //Modal Window//
//function creates modal for each user (extends info)                             
function generateModal(user) {
    //console.log(user);    
    const modalContainer = document.createElement('div');
    modalContainer.setAttribute('class' , 'modal-container');
    modalContainer.innerHTML = 
    `
        <div class="modal">
            <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
            <div class="modal-info-container">
                <img class="modal-img" src=${user.picture.large} alt="profile picture">
                <h3 id="name" class="modal-name cap">${user.name.first} ${user.name.last}</h3>
                <p class="modal-text">${user.email}</p>
                <p class="modal-text cap">${user.location.city}</p>
                <hr>
                <p class="modal-text">${user.cell}</p>
                <p class="modal-text">${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.postcode}</p>
                <p class="modal-text">Birthday: ${user.dob.date.slice(5, 7)}/${user.dob.date.slice(8, 10)}/${user.dob.date.slice(2, 4)}</p>
            </div>
        </div>
            <div class="modal-btn-container">
                <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
                <button type="button" id="modal-next" class="modal-next btn">Next</button>
            </div>
    `;
    
   
    bodyElement.appendChild(modalContainer);
    modalContainer.style.display = 'block';
 
  
                        //add a click event on the close button// 
    const closeButton = document.getElementById('modal-close-btn');
    closeButton.addEventListener('click', () => {
        bodyElement.removeChild(modalContainer);
    });    

                //add functionality to switch back and forth between modals//
    const prev = document.getElementById('modal-prev');
    const next = document.getElementById('modal-next');
    let usersArrayIndex = usersArray.indexOf(user);

    next.addEventListener('click', () => {
        bodyElement.removeChild(modalContainer)
        if(usersArrayIndex === usersArray.length -1) {
            generateModal(usersArray[0]);
            //console.log('index: ' + usersArrayIndex);
        } else {
            generateModal(usersArray[usersArrayIndex + 1])
            //console.log('index: ' + usersArrayIndex);
        }
    });
        
    prev.addEventListener('click', () => {
        bodyElement.removeChild(modalContainer)
        if(usersArrayIndex === 0) {
            generateModal(usersArray[usersArray.length -1]);
            //console.log('index: ' + usersArrayIndex);
        } else {
            generateModal(usersArray[usersArrayIndex - 1])
            //console.log('index: ' + usersArrayIndex);
        }
    });

}            
          
                //click event on the card to display modal window 
galleryDiv.addEventListener('click', (e) => {
    if(e.target.className.includes('card')) {
    generateModal(usersArray[e.target.title]);
    }
});  
                         

                            //Search Box// 
//creates and displays search box onto the page

//embed the search box into the page
const searchDiv = document.querySelector(' div .search-container');

let html = `
    <form id='search-containers' action='#' method='get'>
        <input type="search" id="search-input" class="search-input" placeholder="Search...">
        <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
    </form>    
`;
searchDiv.innerHTML = html; 

const searchBar = document.forms['search-containers'].querySelector('input');
const noUser = document.createElement('h2');

//this message is displayed if no user match the search input value
noUser.innerHTML = 'No user found.';
bodyElement.appendChild(noUser);
noUser.style.display = 'none';

//adds functionality to the search bar
searchBar.addEventListener('keyup', (e) => {
    //grab the search tool
    const term = e.target.value.toLowerCase();
    //grab all the div card  
    const cards = [...document.getElementsByClassName('card-name')];
    //console.log('cards: ' + cards);
    const filterCards = cards.filter(card => card.innerText.toLowerCase().includes(term));
    //display or not display results of keyup
    cards.forEach(card => {
        if(filterCards.includes(card)) {
            card.closest('.card').style.display = 'block';
        }else {
            card.closest('.card').style.display = 'none';
        }
    });
    if(filterCards < 1) {
        noUser.style.display = 'block';
    } else{
        noUser.style.display = 'none';
    }

});