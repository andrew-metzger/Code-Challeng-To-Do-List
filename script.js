const inputName = document.getElementById("input-name");
const inputUser = document.getElementById("input-user");
const inputStatus = document.getElementById("input-status");

const listContainer = document.getElementById("list-container");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button")

const form = docuemt.querySelector('#new-task-form');
const input =document.querySelector('input');
const ul = document.querySelector('#list-container')



function createLi() {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = input.value;
    const label = document.createElement('label');
    label.textContent=inputUser.value;

    li.appendChild(span);
    li.appendChild(label);
    return li;
}

form.addEventListener('submit', (event) =>{
    event.preventDefault();

    const li =createLi();

    ul.appendChild(li);
    saveData();
});





// function addTask(){
//     if(inputName !== ''){
//     // if (inputName !== '' && inputUser !== '' && inputStatus !== '') {
//         //var tasks = [inputName, inputUser, inputStatus]


//         let li = document.createElement("li");
//         li.innerHTML= inputName.value;
//         listContainer.appendChild(li);
//         let span = document.createElement("span");
//         span.innerHTML = "\u00d7";
//         li.appendChild(span);
//     }
//     else{
//         alert("Please fill in all the fields");

//     }
//     inputName.value = "";
//     saveData();
// }


listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();


searchButton.addEventListener('click', function() {
    const searchTerm = searchInput.value;   //get the search input value
    //call find task
    findtask(searchTerm);
});

searchInput.addEventListener('keyup', function(event){
    if(event.key === "Enter") {
        //simulates button click
        searchButton.click();
    }
});


function findtask(searchTerm){
    var  filter, li, i;
    filter = searchTerm;;
    li = listContainer.getElementsByTagName("li");

    for(i = 0; i < li.length; i++){
        let List = li[i];

        if(List.innerHTML.indexOf(filter) > -1) {
            console.log(li[i].innerHTML);
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
function redirectPage() {
    //window.location = linkLocation;
    window.location=linkLocation;
}

