const fNameSpan = document.querySelector('#fName');
const lNameSpan = document.querySelector('#lName');
const ageSpan = document.querySelector('#age');
const skillsList = document.querySelector('#skills');
const phoneSpan = document.querySelector('#phone');
const emailSpan = document.querySelector('#email');
const addressSpan = document.querySelector('#address');
const eduSpan = document.querySelector('#edu');

window.onload = () => {

    fetch('profile.json')
    .then(response => response.json())
    .then(data => {
        fNameSpan.textContent = data.fName;
        lNameSpan.textContent = data.lName;
        ageSpan.textContent = data.age;
    
        for (let i = 0; i < data.skills.length; i++){
           let li = document.createElement('li');
           li.innerHTML = data.skills[i];

           skillsList.appendChild(li);
        }

        phoneSpan.textContent = data.phone;
        emailSpan.textContent = data.email;
        addressSpan.textContent = data.address;
        eduSpan.textContent = data.edu;

    })

}






