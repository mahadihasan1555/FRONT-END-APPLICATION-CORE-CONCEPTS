fetch('https://jsonplaceholder.typicode.com/users')
.then (res => res.json())
.then (data => showUserNames(data));

function showUserNames(data){
    let userHTML = '';
    data.forEach(user => {
        userHTML = userHTML + `<div class = "user">
        <h2>${user.name}</h2> 
        <p>Email:${user.email} </p>
        <p>Website: ${user.website}</p>
        <p> ${user.company.name}, ${user.company.catchPhrase},${user.company.bs}.</p>
        </div>`
    });
    const userContainer = document.getElementById('user-container');
    userContainer.innerHTML = userHTML;
}