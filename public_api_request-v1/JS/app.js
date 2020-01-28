
                                //Global Variables 
//header
const searchDiv = document.querySelector(' div .search-container');
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
    //00/00/0000
    const dateFormat =  /^\d{2}-\d{2}-\d{2}Z$/;  
    
    function reviver(dob) {
        if(typeof dob === 'string' && dateFormat.test(dob)) {
            return new Date(dob)
        }
        return dob;
    }

       
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
    console.log(user);    
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
    console.log(`birthday: ${ typeof reviver(user.dob.data)}`);
   
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
            console.log('index: ' + usersArrayIndex);
        } else {
            generateModal(usersArray[usersArrayIndex + 1])
            console.log('index: ' + usersArrayIndex);
        }
    });
        
    
    prev.addEventListener('click', () => {
        bodyElement.removeChild(modalContainer)
        if(usersArrayIndex === 0) {
            generateModal(usersArray[usersArray.length -1]);
            console.log('index: ' + usersArrayIndex);
        } else {
            generateModal(usersArray[usersArrayIndex - 1])
            console.log('index: ' + usersArrayIndex);
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
let form = `
    <form action="#" method="get">
        <input type="search" id="search-input" class="search-input" placeholder="Search...">
        <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
    </form>
`; 
searchDiv.innerHTML = form;

//adds functionality to the search box
const input = document.getElementById('search-input');
const searchBox = document.querySelector('form');

searchDiv.addEventListener('keyup', () => {
    for(i = 0; i < usersArray.length; i++) {
        //checks if the first or last name input value exists in the userArray[]  
        if(usersArray[i].name.first.toLowerCase().includes(input.textContent.toLowerCase()) || usersArray[i].name.last.toLowerCase().includes(input.textContent.toLowerCase())) {
            document.querySelector(`[title="${i}"]`).style.display = '';
        } else  {
            document.querySelector(`[title="${i}"]`).style.display = 'none';
        } 
    }
});

//Prevent search bar from submitting by default (?)
searchDiv.addEventListener('submit', (e) => {
    e.preventDefault();
});                           