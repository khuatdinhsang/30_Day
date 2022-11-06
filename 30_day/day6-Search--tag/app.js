// var content = document.querySelector('.content')
// var input = document.querySelector('.content input')
// var btnRemoveAll = document.querySelector('.remove-all')
// var tags = ['Nodejs', 'Reactjs']

// function render() {
//     content.innerHTML = ''
//     for (let i = 0; i < tags.length; i++) {
//         const tag = tags[i];
//         content.innerHTML += `<li>
//         ${tag}
//         <i class="fas fa-times" onclick="removeTag(${i})"></i>
//     </li>
//     `
//     }
//     content.appendChild(input)
//     input.focus()
// }


// render()
// input.addEventListener('keydown', function(event) {
//     if (event.key == 'Enter') {
//         tags.push(input.value.trim())
//         input.value = ''
//         render()
//     }
// })

// function removeTag(index) {
//     tags.splice(index, 1)
//     render()
// }
// btnRemoveAll.addEventListener('click', function() {
//     tags = []
//     render()
// })


// var content = document.querySelector('.content');
// var input = document.querySelector('.content input');
// var close_btn = document.querySelector('.remove-all');
// var tags = ["js", "php"];

// function creatTags() {
//     content.innerHTML = ''
//     for (let i = 0; i < tags.length; i++) {
//         var tag = tags[i];
//         content.innerHTML += `
//         <li>
//             ${tag}
//             <i class="fas fa-times" onclick="removeTag(${i})"></i>
//         </li>

//         `
//     }
//     content.appendChild(input);
//     input.focus();
// }

// creatTags();
// input.addEventListener('keydown', function(event) {
//     if (event.key == 'Enter') {
//         tags.push(input.value.trim());
//         input.value = '';
//         creatTags();

//     }
// })

// function removeTag(index) {
//     tags.splice(index, 1);
//     creatTags();
// }
// close_btn.onclick = function(index) {
//     tags.splice(index);
//     creatTags();
// }

var content = document.querySelector('.content');
var input = document.querySelector('.content input');
var closebtn = document.querySelector('.remove-all');
var tags = ["js", "php"];

function createTags() {
    content.innerHTML = '';
    for (let i = 0; i < tags.length; i++) {
        var tag = tags[i];
        content.innerHTML += `
        <li>
            ${tag}
            <i class="fas fa-times on" onclick="removeTag(${i})" ></i>
        </li>
        `
    }
    content.appendChild(input);
    input.focus();
}
createTags();

document.addEventListener("keydown", function(e) {
    if (e.key == "Enter") {
        tags.push(input.value.trim());
        createTags();
        input.value = '';
    }
})

function removeTag(index) {
    tags.splice(index, 1);
    createTags();
}
closebtn.onclick = function(index) {
    tags.splice(index);
    createTags();
}