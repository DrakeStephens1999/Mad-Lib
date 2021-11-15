console.log("hello");
const noun1 = document.getElementById('noun1');
const noun2 = document.getElementById('noun2');
const proNoun1 = document.getElementById('proNoun1');
const proNoun2 = document.getElementById('proNoun2');
const verb1 = document.getElementById('verb1');
const verb2 = document.getElementById('verb2');
const adjective1 = document.getElementById('adjective1');
const adjective2 = document.getElementById('adjective2');
const adVerb1 = document.getElementById('adVerb1');
const adVerb2 = document.getElementById('adVerb2');
const preposition1 = document.getElementById('preposition1');
const preposition2 = document.getElementById('preposition2');
const conjunction1 = document.getElementById('conjunction1');
const conjunction2 = document.getElementById('conjunction2');
const interjection1 = document.getElementById('interjection1');
const interjection2 = document.getElementById('interjection2');

const n1 = document.getElementById('n1');
const n2 = document.getElementById('n2');
const pn1 = document.getElementById('pn1');
const pn2 = document.getElementById('pn2');
const v1 = document.getElementById('v1');
const v2 = document.getElementById('v2');
const a1 = document.getElementById('a1');
const a2 = document.getElementById('a2');
const av1 = document.getElementById('av1');
const av2 = document.getElementById('av2');
const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const c1 = document.getElementById('c1');
const c2 = document.getElementById('c2');
const i1 = document.getElementById('i1');
const i2 = document.getElementById('i2');

const madlib = document.getElementById('madlib')

const submit = document.getElementById('submit')

function changeMadLib() {
    console.log("poop")
    noun1.innerHTML = n1.value
    noun2.innerHTML = n2.value
    proNoun1.innerHTML = pn1.value
    proNoun2.innerHTML = pn2.value
    verb1.innerHTML = v1.value
    verb2.innerHTML = v2.value
    adjective1.innerHTML = a1.value
    adjective2.innerHTML = a2.value
    adVerb1.innerHTML = a1.value
    adVerb2.innerHTML = a2.value
    preposition1.innerHTML = p1.value
    preposition2.innerHTML = p2.value
    conjunction1.innerHTML = c1.value
    conjunction2.innerHTML = c2.value
    interjection1.innerHTML = i1.value
    interjection2.innerHTML = i2.value
    return false;
}