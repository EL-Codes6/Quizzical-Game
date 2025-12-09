let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

let quotes = [
    {
        person:'Odudu Essien(EL Codes)',
        quote:'coding pays',
    },
     {
        person:'Odudu Essien(EL Codes)',
        quote:'If There is a bug, There is a code to fix it',
    },
 {
        person:'Tech-IT Community',
        quote:'Tech What is yours',
    },
    {
        person:'Tech-IT Community',
        quote:'PAR-TECH : Be a part of Tech',
    },
    {
        person:'Joel Brown',
        quote:'THe only thing standing between you and your dream is the will to try and the belief that it is possible',
    },
     {
        person:'Tech-IT community',
        quote:'Cogito Ergo Sum : I Code Therefore I Am',
    },

    {
        person:'Jim Rohn',
        quote:'Either you run the day, or the day runs you',
    },

    {
        person:'Tech-IT Community',
        quote:'Life is too short to be wasted',
    },

    {
        person:'Theodore Roosevelt',
        quote:'It is hard to fail, but it is worse never to have tried to succeed',
    },
{
        person:'Henry Ford',
        quote:'If you think you can do a thing or think you cant do a thing you are right',
    },

{
        person:'Mahatma Gandhi',
        quote:'You must be the change you wish to see in the world',
    },
    {
        person:'Walt Disney',
        quote:'All our dreams can come true if, if we have the courage to pursue them',
    },
    {
        person:'Anais Nin',
        quote:'Life shrinks or expands according to one\'s courage',
    },
    {
        person:'Walt Whitman',
        quote:'Keep your face always towards the sunshine, and shadows will fall behind you',
    },
    {
        person:'Les Brown',
        quote:'Don\'t let someone else\'s opinion of you, become your reality',
    },
    {
        person:'Chris Grosser',
        quote:'Opportunities don\'t happen, you create them',
    },
    {
        person:'Pst. Oluwatosin Olalere',
        quote:'If it is faith it will work',
    },
     {
        person:'Pst. Oluwatosin Olalere',
        quote:'The spirit of God is the beliver\'s advantage on earth',
    },
     {
        person:'Pst. Oluwatosin Olalere',
        quote:'Don\'t say I am worried, say..This is concerniing',
    },
     {
        person:'Godswill Akpan',
        quote:'It is in the heart, not yet in the Pocket',
    },
];


btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
   person.innerText = quotes[random].person;
});

// let play = document.getElementById('playground');
// play.append('EL Codes 😎');
// console.log(play);

// let creation = document.createElement('div');
// creation.textContent ='🦠';
// play.append(creation);

//modifying text content


// let play = document.getElementById('playground');
// play.append('EL Codes 😎');


// let  scrollOfWisdom = document.createElement('p');

// scrollOfWisdom.innerText = 'True Wisdom Lies Within';

// play.append(scrollOfWisdom);

// console.log(scrollOfWisdom.textContent);


// working with html content
// let ques = document.querySelector('.question');

// let newCreate = document.createElement('div');
// newCreate.innerHTML="<p><bold>Who is El Codes</bold>I gotcha</p>";

// ques.append(newCreate);



//removing elements

//  let play = document.getElementById('playground');

//  let temporaryElement =  document.createElement('p');
// temporaryElement.textContent = 'Now you see me...';
// play.append(temporaryElement);
// temporaryElement.remove();

//  let play = document.getElementById('playground');

//  let fruitBasket = document.createElement('div');
//  fruitBasket.innerHTML =  '<p>Apple</p> <p>banana</p><p>cherry</p>';

// play.append(fruitBasket);

// while (fruitBasket.firstChild) {
//     fruitBasket.removeChild(fruitBasket.firstChild);
// };



// working with attributes
//the setv attribute method takes two values
//  let play = document.getElementById('playground');

//  let attributesTest = document.createElement('div');
//  attributesTest.setAttribute('id', 'idTest');
//  //or attributesTest.id='idTest';
//  attributesTest.setAttribute('class', 'classTest');
// attributesTest.textContent='the GOD OF CODES🐳';

// play.append(attributesTest);
// console.log(play.id);


// working with data attributes
//these is a way of embedding data  in our html for easy accesibility
//there are ignnoredc by css


//  let play = document.getElementById('playground');

//  let secretScroll = document.createElement('div');
//  secretScroll.id='secretScroll';
//  secretScroll.dataset.spellType = 'invisiblity';
//  secretScroll.dataset.components= 'moonlight, shadow essence';
//  secretScroll.textContent = '🦠Acient spell scroll';

//  play.append(secretScroll);




//  console.log('spell type:', secretScroll.dataset.spell);
//  console.log('components:', secretScroll.dataset.components.split(','));

//manipulating classes

 let play = document.getElementById('playground');

 let shapeShifter = document.createElement('div');
shapeShifter.textContent = ' ShapeShifter👾';
play.append(shapeShifter);
shapeShifter.classList.add('magical', 'creature');
console.log('intial classes:',shapeShifter.className);


shapeShifter.classList.remove('creature');
shapeShifter.classList.add('humanoid');

console.log('updated classes', shapeShifter.className);

shapeShifter.classList.toggle('invisible', Math.random()>0.5);
shapeShifter.classList.replace('humanoid', 'beast');

console.log('third class', shapeShifter.classList.item(2));

