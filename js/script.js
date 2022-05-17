const selectEl = document.getElementById('select');
const registrationImage = document.getElementById('planet-img');

selectEl.addEventListener('change', function() {

switch(true) {
    case this.value === 'mercury' : registrationImage.src = "./Assets/Planet.svg";
    break;
    case this.value === 'uranus' : registrationImage.src = "./Assets/Uran.svg";
    break;
    default: setSneakyRicardo(this); 
}

})


// REST

// Підключення до віддаленого сервера
fetch('http://54.196.182.33/space/planets')
    .then((response) => response.json())
    .then((json) => {
        newOptions = json;
        newOptions.forEach(option => {
           return createNewOption(option.name)
        })
    });


function createNewOption(name) {
    let createdOption = document.createElement("option");
    createdOption.innerText = name;
    appendOption(createdOption);
}

function appendOption(option) {
    selectEl.append(option);
}


// Після того, як підключите локальний сервер
// fetch('http://localhost:3000/planets')
//     .then((response) => response.json())
//     .then((json) => {
//         newOptions = json;
//         newOptions.forEach(option => {
//            return createNewOption(option.value, option.title)
//         })
//     });
//
//
// function createNewOption(value,title) {
//     let createdOption = document.createElement("option");
//     createdOption.innerText = title;
//     createdOption.value = value;
//     appendOption(createdOption);
// }
//
// function appendOption(option) {
//     selectEl.append(option);
// }

// Get

// fetch('http://localhost:3000/planets')
//     .then((response) => response.json())
//     .then((json) => {
//         return newOptions = json;
//     });

// Post

// fetch('http://localhost:3000/planets', {
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'Пандора',
//         value: 'pandorum'
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
//     .then((response) => response.json())
//     .then((json) => console.log(json));

// Delete

// fetch('http://localhost:3000/planets/1', {
//     method: 'DELETE',
// });

// PUT

// fetch('http://localhost:3000/planets/1', {
//     method: 'PUT',
//     body: JSON.stringify({
//         title: 'Альфа-Центавра'
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
//     .then((response) => response.json())
//     .then((json) => console.log(json));

// Patch

// fetch('http://localhost:3000/planets/1', {
//     method: 'PATCH',
//     body: JSON.stringify({
//         title: 'Pandora',
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
//     .then((response) => response.json())
//     .then((json) => console.log(json));
