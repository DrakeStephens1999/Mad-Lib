console.log("hello");
const noun1 = document.getElementById('noun1');
const noun2 = document.getElementById('noun2');
const verb1 = document.getElementById('verb1');
const verb2 = document.getElementById('verb2');
const adjective1 = document.getElementById('adjective1');
const adjective2 = document.getElementById('adjective2');

const n1 = document.getElementById('n1');
const n2 = document.getElementById('n2');
const v1 = document.getElementById('v1');
const v2 = document.getElementById('v2');
const a1 = document.getElementById('a1');
const a2 = document.getElementById('a2');

const madlib = document.getElementById('madlib')

const submit = document.getElementById('submit')

function changeMadLib() {
    console.log("poop")
    noun1.innerHTML = n1.value
    noun2.innerHTML = n2.value
    verb1.innerHTML = v1.value
    verb2.innerHTML = v2.value
    adjective1.innerHTML = a1.value
    adjective2.innerHTML = a2.value
    return false;
}