let cardContainer = document.querySelector('[data-cards]');
let searchInput = document.querySelector('#searchInput');
let allPeople = [];

function displayPeople(people) {
  cardContainer.innerHTML = '';

    people.forEach(people => {
      cardContainer.innerHTML += `
        <div class="card" style="width: 18rem;">
          <img src="${people.picture.large}" class="card-img-top img-fluid" alt="${people.name.first}">
          <div class="card-body">
            <h5 class="card-title">${people.name.title}. ${people.name.first} ${people.name.last}</h5>
            <p class="card-text">Age: ${people.dob.age}</p>
          </div>
        </div>
      `;
    });
}

fetch('https://randomuser.me/api?results=20')
  .then(data => data.json())
  .then(result => {
    allPeople = result.results;
    displayPeople(allPeople);
  });

function searchAndDisplay(){
    let searchInpuut = searchInput.value.trim().toLowerCase();
    if(searchInpuut === '') {
        displayPeople(allPeople)
    }else{
        let filterPeopleByName = allPeople.filter(person => person.name.first.toLowerCase().includes(searchInpuut))
        displayPeople(filterPeopleByName)
    }

}

searchInput.addEventListener('input', searchAndDisplay);

let isAscending = true;
function sortBtn(sortWithA, sortWithB){
    let name1 = sortWithA.first.toLowerCase();
    let name2 = sortWithB.first.toLowerCase()

}
// document.querySelector('[button]').addEventListener('click', );
