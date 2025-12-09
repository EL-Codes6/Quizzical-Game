`use strict`
console.log(`check in`);
//so help me God

let helpDiv = document.querySelector('.help_div_1');
let displayText = document.querySelector('#display_text');

helpDiv.addEventListener('click', function(){
if (displayText.style.display === 'block'){
    displayText.style.display ='none';
}else displayText.style.display = 'block';
});


let bibleButton = document.querySelector('.bible');
let childBible = document.querySelector('.child_Bible_section');


let animalsButton = document.querySelector('.animals');
let childAnimals = document.querySelector('.child_animals_section');



let placesButton = document.querySelector('.places');
let childPlaces = document.querySelector('.child_palces_section');


//CHOOSING QUIZ

//Activating Bible button
bibleButton.addEventListener('click', function(){
    childBible.style.display='block';
    bibleButton.style.backgroundColor = 'blue';
    placesButton.style.backgroundColor = 'transparent';
    animalsButton.style.backgroundColor='transparent';

    //Eliminating others
   childPlaces.style.display='none';
   childAnimals.style.display='none';
   //clearing background color

   startBtn.style.display='flex';
});

//Activating animals button
animalsButton.addEventListener('click', function(){
childAnimals.style.display='block';
   animalsButton.style.backgroundColor = 'blue';
   bibleButton.style.backgroundColor ='transparent';
   placesButton.style.backgroundColor = 'transparent';

//Eliminating others
 childBible.style.display='none';
 childPlaces.style.display='none';

  startBtn.style.display='flex';
});

//Activating places button
placesButton.addEventListener('click', function(){
    childPlaces.style.display='block';
    placesButton.style.backgroundColor = 'blue';
    animalsButton.style.backgroundColor='transparent';
    bibleButton.style.backgroundColor='transparent';

    //Eliminating others
   childAnimals.style.display='none';
  childBible.style.display='none';


   startBtn.style.display='flex';
});




//CHOOSING N0.OF QUESTIONS

let fiveQuestions = document.querySelector('.five');
let sevenQuestions = document.querySelector('.seven');
let tenQuestions = document.querySelector('.ten');

//n0 of questions to be eliminated
//variables for eliminating last five questions
let sixSeven = document.querySelector('.sixDown');
let secSixSeven = document.querySelector('.sixDownTwo');
let thirdSixSeven = document.querySelector('.sixDownThree');

//variables for eliminating last three
let eightNineTen = document.querySelector('#eight_nine_ten');
let secEightNineTen = document.querySelector('#eight_nine_ten_sec');
let thirdEightNineTen = document.querySelector('#eight_nine_ten_third');




//activating 5 questions btn
    fiveQuestions.addEventListener('click', function(){
    //color switching
    fiveQuestions.style.backgroundColor = 'blue';
    sevenQuestions.style.backgroundColor='transparent';
    tenQuestions.style.backgroundColor='transparent';

    // eliminating last five questions
    sixSeven.style.display = 'none';
    secSixSeven.style.display ='none';
    thirdSixSeven.style.display ='none';
    
});




//activating seven questions button
sevenQuestions.addEventListener('click', function(){
sevenQuestions.style.backgroundColor = 'blue';
fiveQuestions.style.backgroundColor='transparent';
tenQuestions.style.backgroundColor='transparent';

//bringing back last five questions
sixSeven.style.display = 'block';
secSixSeven.style.display ='block';
thirdSixSeven.style.display ='block';
//displaying the seven questions/eliminating last three
eightNineTen.style.display ='none';
secEightNineTen.style.display ='none';
thirdEightNineTen.style.display ='none';
});


//activating the whole ten

tenQuestions.addEventListener('click', function(){
tenQuestions.style.backgroundColor = 'blue';
    fiveQuestions.style.backgroundColor='transparent';
    sevenQuestions.style.backgroundColor='transparent';

//displaying the whole ten
 
//bringing back last five questions
sixSeven.style.display = 'block';
secSixSeven.style.display ='block';
thirdSixSeven.style.display ='block';
//displaying the seven questions/eliminating last three
eightNineTen.style.display ='block';
secEightNineTen.style.display ='block';
thirdEightNineTen.style.display ='block';
   
});




//displaying the questions
let startBtn = document.querySelector('#start_btn');
let score = document.querySelector('.main');
let firstPart = document.querySelector('.okay');


startBtn.addEventListener('click', function(){
firstPart.style.display ='none';
score.style.display ='block';




//taking out pointer Events


places_One_btn_one.style.pointerEvents = 'all';
places_One_btn_two.style.pointerEvents = 'all';
places_One_btn_three.style.pointerEvents='all';
places_One_btn_four.style.pointerEvents ='all';
places_One_btn_five.style.pointerEvents ='all';

//question 2 for places
places_Two_btn_one.style.pointerEvents = 'all';
places_Two_btn_two.style.pointerEvents = 'all';
places_Two_btn_three.style.pointerEvents='all';
places_Two_btn_four.style.pointerEvents ='all';
places_Two_btn_five.style.pointerEvents ='all';

//question 3 for places
places_Three_btn_one.style.pointerEvents = 'all';
places_Three_btn_two.style.pointerEvents = 'all';
places_Three_btn_three.style.pointerEvents='all';
places_Three_btn_four.style.pointerEvents ='all';
places_Three_btn_five.style.pointerEvents ='all';



places_Four_btn_one.style.pointerEvents = 'all';
places_Four_btn_two.style.pointerEvents = 'all';
places_Four_btn_three.style.pointerEvents='all';
places_Four_btn_four.style.pointerEvents ='all';
places_Four_btn_five.style.pointerEvents ='all';




places_Five_btn_one.style.pointerEvents = 'all';
places_Five_btn_two.style.pointerEvents = 'all';
places_Five_btn_three.style.pointerEvents='all';
places_Five_btn_four.style.pointerEvents ='all';
places_Five_btn_five.style.pointerEvents ='all';



places_Six_btn_one.style.pointerEvents = 'all';
places_Six_btn_two.style.pointerEvents = 'all';
places_Six_btn_three.style.pointerEvents='all';
places_Six_btn_four.style.pointerEvents ='all';
places_Six_btn_five.style.pointerEvents ='all';




places_Seven_btn_one.style.pointerEvents = 'all';
places_Seven_btn_two.style.pointerEvents = 'all';
places_Seven_btn_three.style.pointerEvents='all';
places_Seven_btn_four.style.pointerEvents ='all';
places_Seven_btn_five.style.pointerEvents ='all';



places_Eight_btn_one.style.pointerEvents = 'all';
places_Eight_btn_two.style.pointerEvents = 'all';
places_Eight_btn_three.style.pointerEvents='all';
places_Eight_btn_four.style.pointerEvents ='all';
places_Eight_btn_five.style.pointerEvents ='all';




places_Nine_btn_one.style.pointerEvents = 'all';
places_Nine_btn_two.style.pointerEvents = 'all';
places_Nine_btn_three.style.pointerEvents='all';
places_Nine_btn_four.style.pointerEvents ='all';
places_Nine_btn_five.style.pointerEvents ='all';



places_Ten_btn_one.style.pointerEvents = 'all';
places_Ten_btn_two.style.pointerEvents = 'all';
places_Ten_btn_three.style.pointerEvents='all';
places_Ten_btn_four.style.pointerEvents ='all';
places_Ten_btn_five.style.pointerEvents ='all';

Check_result_Places.style.backgroundColor = 'indigo';



//returning pointer events for bible
////////////////////////////////////
////////////////////////////////////

lazarusBtn.style.pointerEvents ='all';
iscariotBtn.style.pointerEvents = 'all';
mosesBtn.style.pointerEvents = 'all';
pilateBtn.style.pointerEvents = 'all';
baptistBtn.style.pointerEvents = 'all'; 


lazarusBtn_Two.style.pointerEvents ='all';
iscariotBtn_Two.style.pointerEvents = 'all';
mosesBtn_Two.style.pointerEvents = 'all';
pilateBtn_Two.style.pointerEvents = 'all';
baptistBtn_Two.style.pointerEvents = 'all'; 



iscariotBtn_Three.style.pointerEvents ='all';
baptistBtn_Three.style.pointerEvents = 'all';
mosesBtn_Three.style.pointerEvents = 'all';
pilateBtn_Three.style.pointerEvents = 'all';
lazarusBtn_Three.style.pointerEvents = 'all';  



iscariotBtn_four.style.pointerEvents ='all';
baptistBtn_four.style.pointerEvents = 'all';
mosesBtn_four.style.pointerEvents = 'all';
pilateBtn_four.style.pointerEvents = 'all';
lazarusBtn_four.style.pointerEvents = 'all';  


iscariotBtn_five.style.pointerEvents ='all';
baptistBtn_five.style.pointerEvents = 'all';
mosesBtn_five.style.pointerEvents = 'all';
pilateBtn_five.style.pointerEvents = 'all';
lazarusBtn_five.style.pointerEvents = 'all';  


lazarusBtn_six.style.pointerEvents ='all';
iscariotBtn_six.style.pointerEvents = 'all';
mosesBtn_six.style.pointerEvents = 'all';
pilateBtn_six.style.pointerEvents = 'all';
baptistBtn_six.style.pointerEvents = 'all'; 





iscariotBtn_seven.style.pointerEvents ='all';
baptistBtn_seven.style.pointerEvents = 'all';
mosesBtn_seven.style.pointerEvents = 'all';
pilateBtn_seven.style.pointerEvents = 'all';
lazarusBtn_seven.style.pointerEvents = 'all';  




iscariotBtn_eight.style.pointerEvents ='all';
baptistBtn_eight.style.pointerEvents = 'all';
mosesBtn_eight.style.pointerEvents = 'all';
pilateBtn_eight.style.pointerEvents = 'all';
lazarusBtn_eight.style.pointerEvents = 'all';  




iscariotBtn_nine.style.pointerEvents ='all';
baptistBtn_nine.style.pointerEvents = 'all';
mosesBtn_nine.style.pointerEvents =   'all';
pilateBtn_nine.style.pointerEvents =  'all';
lazarusBtn_nine.style.pointerEvents = 'all';  



lazarusBtn_ten.style.pointerEvents ='all';
iscariotBtn_ten.style.pointerEvents = 'all';
mosesBtn_ten.style.pointerEvents = 'all';
pilateBtn_ten.style.pointerEvents = 'all';
baptistBtn_ten.style.pointerEvents = 'all'; 



score.style.cursor = 'default';
check_result_bible.style.backgroundColor ='indigo';





//returning pointer events for Animals
////////////////////////////////////
////////////////////////////////////



question_One_btn_one.style.pointerEvents ='all';
question_One_btn_two.style.pointerEvents = 'all';
question_One_btn_three.style.pointerEvents = 'all';
question_One_btn_four.style.pointerEvents = 'all';
question_One_btn_five.style.pointerEvents = 'all';





question_Two_btn_one.style.pointerEvents ='all';
question_Two_btn_two.style.pointerEvents = 'all';
question_Two_btn_three.style.pointerEvents = 'all';
question_Two_btn_four.style.pointerEvents = 'all';
question_Two_btn_five.style.pointerEvents = 'all';



question_Three_btn_one.style.pointerEvents ='all';
question_Three_btn_two.style.pointerEvents = 'all';
question_Three_btn_three.style.pointerEvents = 'all';
question_Three_btn_four.style.pointerEvents = 'all';
question_Three_btn_five.style.pointerEvents = 'all';





question_Four_btn_five.style.pointerEvents ='all';
question_Four_btn_one.style.pointerEvents = 'all';
question_Four_btn_three.style.pointerEvents = 'all';
question_Four_btn_four.style.pointerEvents = 'all';
question_Four_btn_two.style.pointerEvents = 'all';


question_Five_btn_one.style.pointerEvents ='all';
question_Five_btn_two.style.pointerEvents = 'all';
question_Five_btn_three.style.pointerEvents = 'all';
question_Five_btn_four.style.pointerEvents = 'all';
question_Five_btn_five.style.pointerEvents = 'all';



question_Six_btn_one.style.pointerEvents ='all';
question_Six_btn_two.style.pointerEvents = 'all';
question_Six_btn_three.style.pointerEvents = 'all';
question_Six_btn_four.style.pointerEvents = 'all';
question_Six_btn_five.style.pointerEvents = 'all';



question_Seven_btn_one.style.pointerEvents ='all';
question_Seven_btn_two.style.pointerEvents = 'all';
question_Seven_btn_three.style.pointerEvents = 'all';
question_Seven_btn_four.style.pointerEvents = 'all';
question_Seven_btn_five.style.pointerEvents = 'all';



question_Eight_btn_one.style.pointerEvents ='all';
question_Eight_btn_two.style.pointerEvents = 'all';
question_Eight_btn_three.style.pointerEvents = 'all';
question_Eight_btn_four.style.pointerEvents = 'all';
question_Eight_btn_five.style.pointerEvents = 'all';



question_Nine_btn_one.style.pointerEvents ='all';
question_Nine_btn_two.style.pointerEvents = 'all';
question_Nine_btn_three.style.pointerEvents = 'all';
question_Nine_btn_four.style.pointerEvents = 'all';
question_Nine_btn_five.style.pointerEvents = 'all';



question_Ten_btn_one.style.pointerEvents ='all';
question_Ten_btn_two.style.pointerEvents = 'all';
question_Ten_btn_three.style.pointerEvents = 'all';
question_Ten_btn_four.style.pointerEvents = 'all';
question_Ten_btn_five.style.pointerEvents = 'all';


});  


   //storing bible buttons in variables(question one)
let iscariotBtn =document.getElementById('iscariot_Btn');
let baptistBtn =document.getElementById('baptist_Btn');
let mosesBtn =document.getElementById('moses_Btn');
let pilateBtn =document.getElementById('Pilate_Btn');
let lazarusBtn =document.getElementById('lazarus_Btn');



let text$bible$1$btn$1 = document.getElementById('question-1-text-1');
//first button
iscariotBtn.addEventListener('click', function(){
iscariotBtn.style.backgroundColor ='blue';
baptistBtn.style.backgroundColor = 'white';
mosesBtn.style.backgroundColor = 'white';
pilateBtn.style.backgroundColor = 'white';
lazarusBtn.style.backgroundColor = 'white';  


text$bible$1$btn$5.style.display = 'none';
text$bible$1$btn$4.style.display = 'none';
text$bible$1$btn$1.style.display = 'block';
text$bible$1$btn$2.style.display = 'none';
text$bible$1$btn$3.style.display = 'none';



check_result_bible.style.display ='flex';
});




let text$bible$1$btn$2 = document.getElementById('question-1-text-2');
//second button
baptistBtn.addEventListener('click', function(){ 
baptistBtn.style.backgroundColor ='blue';
iscariotBtn.style.backgroundColor = 'white';
mosesBtn.style.backgroundColor = 'white';
pilateBtn.style.backgroundColor = 'white';
lazarusBtn.style.backgroundColor = 'white'; 


text$bible$1$btn$5.style.display = 'none';
text$bible$1$btn$4.style.display = 'none';
text$bible$1$btn$1.style.display = 'none';
text$bible$1$btn$2.style.display = 'block';
text$bible$1$btn$3.style.display = 'none';



check_result_bible.style.display ='flex';
});


let text$bible$1$btn$3 = document.getElementById('question-1-text-3');
//third button
mosesBtn.addEventListener('click', function(){ 
mosesBtn.style.backgroundColor ='blue';
iscariotBtn.style.backgroundColor = 'white';
baptistBtn.style.backgroundColor = 'white';
pilateBtn.style.backgroundColor = 'white';
lazarusBtn.style.backgroundColor = 'white'; 


text$bible$1$btn$4.style.display = 'none';
text$bible$1$btn$1.style.display = 'none';
text$bible$1$btn$2.style.display = 'none';
text$bible$1$btn$3.style.display = 'block';
text$bible$1$btn$5.style.display = 'none';


check_result_bible.style.display ='flex';
});


let text$bible$1$btn$4 = document.getElementById('question-1-text-4');
//fourth button
pilateBtn.addEventListener('click', function(){ 
pilateBtn.style.backgroundColor ='blue';
iscariotBtn.style.backgroundColor = 'white';
mosesBtn.style.backgroundColor = 'white';
baptistBtn.style.backgroundColor = 'white';
lazarusBtn.style.backgroundColor = 'white'; 

text$bible$1$btn$4.style.display = 'block';
text$bible$1$btn$1.style.display = 'none';
text$bible$1$btn$2.style.display = 'none';
text$bible$1$btn$3.style.display = 'none';
text$bible$1$btn$5.style.display = 'none';

check_result_bible.style.display ='flex';
});



let text$bible$1$btn$5 = document.getElementById('question-1-text-5');
//fifth button
lazarusBtn.addEventListener('click', function(){ 
lazarusBtn.style.backgroundColor ='blue';
iscariotBtn.style.backgroundColor = 'white';
mosesBtn.style.backgroundColor = 'white';
pilateBtn.style.backgroundColor = 'white';
baptistBtn.style.backgroundColor = 'white'; 

text$bible$1$btn$5.style.display = 'block';
text$bible$1$btn$4.style.display = 'none';
text$bible$1$btn$1.style.display = 'none';
text$bible$1$btn$2.style.display = 'none';
text$bible$1$btn$3.style.display = 'none';



check_result_bible.style.display ='flex';
});



//storing question two variables in a variable

let iscariotBtn_Two =document.getElementById('iscariot_Btn_sec');
let baptistBtn_Two =document.getElementById('baptist_Btn_sec');
let mosesBtn_Two =document.getElementById('moses_Btn_sec');
let pilateBtn_Two =document.getElementById('Pilate_Btn_sec');
let lazarusBtn_Two =document.getElementById('lazarus_Btn_sec');



let text$bible$2$btn$1 = document.getElementById('question-2-text-1');
//first button
iscariotBtn_Two.addEventListener('click', function(){
iscariotBtn_Two.style.backgroundColor ='blue';
baptistBtn_Two.style.backgroundColor = 'white';
mosesBtn_Two.style.backgroundColor = 'white';
pilateBtn_Two.style.backgroundColor = 'white';
lazarusBtn_Two.style.backgroundColor = 'white';  



text$bible$2$btn$5.style.display = 'none';
text$bible$2$btn$4.style.display = 'none';
text$bible$2$btn$1.style.display = 'block';
text$bible$2$btn$2.style.display = 'none';
text$bible$2$btn$3.style.display = 'none';

check_result_bible.style.display ='flex';
});



let text$bible$2$btn$2 = document.getElementById('question-2-text-2');
//second button
baptistBtn_Two.addEventListener('click', function(){ 
baptistBtn_Two.style.backgroundColor ='blue';
iscariotBtn_Two.style.backgroundColor = 'white';
mosesBtn_Two.style.backgroundColor = 'white';
pilateBtn_Two.style.backgroundColor = 'white';
lazarusBtn_Two.style.backgroundColor = 'white'; 


text$bible$2$btn$5.style.display = 'none';
text$bible$2$btn$4.style.display = 'none';
text$bible$2$btn$1.style.display = 'none';
text$bible$2$btn$2.style.display = 'block';
text$bible$2$btn$3.style.display = 'none';

check_result_bible.style.display ='flex';
});



let text$bible$2$btn$3 = document.getElementById('question-2-text-3');
//third button
mosesBtn_Two.addEventListener('click', function(){ 
mosesBtn_Two.style.backgroundColor ='blue';
iscariotBtn_Two.style.backgroundColor = 'white';
baptistBtn_Two.style.backgroundColor = 'white';
pilateBtn_Two.style.backgroundColor = 'white';
lazarusBtn_Two.style.backgroundColor = 'white'; 


text$bible$2$btn$5.style.display = 'none';
text$bible$2$btn$4.style.display = 'none';
text$bible$2$btn$1.style.display = 'none';
text$bible$2$btn$2.style.display = 'none';
text$bible$2$btn$3.style.display = 'block';

check_result_bible.style.display ='flex';
});



let text$bible$2$btn$4 = document.getElementById('question-2-text-4');
//fourth button
pilateBtn_Two.addEventListener('click', function(){ 
pilateBtn_Two.style.backgroundColor ='blue';
iscariotBtn_Two.style.backgroundColor = 'white';
mosesBtn_Two.style.backgroundColor = 'white';
baptistBtn_Two.style.backgroundColor = 'white';
lazarusBtn_Two.style.backgroundColor = 'white'; 


text$bible$2$btn$5.style.display = 'none';
text$bible$2$btn$4.style.display = 'block';
text$bible$2$btn$1.style.display = 'none';
text$bible$2$btn$2.style.display = 'none';
text$bible$2$btn$3.style.display = 'none';

check_result_bible.style.display ='flex';
});



let text$bible$2$btn$5 = document.getElementById('question-2-text-5');
//fifth button
lazarusBtn_Two.addEventListener('click', function(){ 
lazarusBtn_Two.style.backgroundColor ='blue';
iscariotBtn_Two.style.backgroundColor = 'white';
mosesBtn_Two.style.backgroundColor = 'white';
pilateBtn_Two.style.backgroundColor = 'white';
baptistBtn_Two.style.backgroundColor = 'white'; 



text$bible$2$btn$5.style.display = 'block';
text$bible$2$btn$4.style.display = 'none';
text$bible$2$btn$1.style.display = 'none';
text$bible$2$btn$2.style.display = 'none';
text$bible$2$btn$3.style.display = 'none';

check_result_bible.style.display ='flex';
});



//storing question three variables in a variable

let iscariotBtn_Three =document.getElementById('iscariot_Btn_third');
let baptistBtn_Three =document.getElementById('baptist_Btn_third');
let mosesBtn_Three =document.getElementById('moses_Btn_third');
let pilateBtn_Three =document.getElementById('Pilate_Btn_third');
let lazarusBtn_Three =document.getElementById('lazarus_Btn_third');



let text$bible$3$btn$1 = document.getElementById('question-3-text-1');
//first button
iscariotBtn_Three.addEventListener('click', function(){
iscariotBtn_Three.style.backgroundColor ='blue';
baptistBtn_Three.style.backgroundColor = 'white';
mosesBtn_Three.style.backgroundColor = 'white';
pilateBtn_Three.style.backgroundColor = 'white';
lazarusBtn_Three.style.backgroundColor = 'white';  


text$bible$3$btn$5.style.display = 'none';
text$bible$3$btn$4.style.display = 'none';
text$bible$3$btn$1.style.display = 'block';
text$bible$3$btn$2.style.display = 'none';
text$bible$3$btn$3.style.display = 'none';



check_result_bible.style.display ='flex';
});


let text$bible$3$btn$2 = document.getElementById('question-3-text-2');
//second button
baptistBtn_Three.addEventListener('click', function(){ 
baptistBtn_Three.style.backgroundColor ='blue';
iscariotBtn_Three.style.backgroundColor = 'white';
mosesBtn_Three.style.backgroundColor = 'white';
pilateBtn_Three.style.backgroundColor = 'white';
lazarusBtn_Three.style.backgroundColor = 'white'; 



text$bible$3$btn$5.style.display = 'none';
text$bible$3$btn$4.style.display = 'none';
text$bible$3$btn$1.style.display = 'none';
text$bible$3$btn$2.style.display = 'block';
text$bible$3$btn$3.style.display = 'none';

check_result_bible.style.display ='flex';
});



let text$bible$3$btn$3 = document.getElementById('question-3-text-3');
//third button
mosesBtn_Three.addEventListener('click', function(){ 
mosesBtn_Three.style.backgroundColor ='blue';
iscariotBtn_Three.style.backgroundColor = 'white';
baptistBtn_Three.style.backgroundColor = 'white';
pilateBtn_Three.style.backgroundColor = 'white';
lazarusBtn_Three.style.backgroundColor = 'white'; 


text$bible$3$btn$5.style.display = 'none';
text$bible$3$btn$4.style.display = 'none';
text$bible$3$btn$1.style.display = 'none';
text$bible$3$btn$2.style.display = 'none';
text$bible$3$btn$3.style.display = 'block';


check_result_bible.style.display ='flex';
});




let text$bible$3$btn$4 = document.getElementById('question-3-text-4');
//fourth button
pilateBtn_Three.addEventListener('click', function(){ 
pilateBtn_Three.style.backgroundColor ='blue';
iscariotBtn_Three.style.backgroundColor = 'white';
mosesBtn_Three.style.backgroundColor = 'white';
baptistBtn_Three.style.backgroundColor = 'white';
lazarusBtn_Three.style.backgroundColor = 'white'; 



text$bible$3$btn$5.style.display = 'none';
text$bible$3$btn$4.style.display = 'block';
text$bible$3$btn$1.style.display = 'none';
text$bible$3$btn$2.style.display = 'none';
text$bible$3$btn$3.style.display = 'none';


check_result_bible.style.display ='flex';
});





let text$bible$3$btn$5 = document.getElementById('question-3-text-5');
//fifth button
lazarusBtn_Three.addEventListener('click', function(){ 
lazarusBtn_Three.style.backgroundColor ='blue';
iscariotBtn_Three.style.backgroundColor = 'white';
mosesBtn_Three.style.backgroundColor = 'white';
pilateBtn_Three.style.backgroundColor = 'white';
baptistBtn_Three.style.backgroundColor = 'white'; 


text$bible$3$btn$5.style.display = 'block';
text$bible$3$btn$4.style.display = 'none';
text$bible$3$btn$1.style.display = 'none';
text$bible$3$btn$2.style.display = 'none';
text$bible$3$btn$3.style.display = 'none';

check_result_bible.style.display ='flex';
});



//storing question four variables in a variable

let iscariotBtn_four =document.getElementById('iscariot_Btn_fourth');
let baptistBtn_four =document.getElementById('baptist_Btn_fourth');
let mosesBtn_four =document.getElementById('moses_Btn_fourth');
let pilateBtn_four =document.getElementById('Pilate_Btn_fourth');
let lazarusBtn_four =document.getElementById('lazarus_Btn_fourth');


let text$bible$4$btn$1 = document.getElementById('question-4-text-1');
//first button
iscariotBtn_four.addEventListener('click', function(){
iscariotBtn_four.style.backgroundColor ='blue';
baptistBtn_four.style.backgroundColor = 'white';
mosesBtn_four.style.backgroundColor = 'white';
pilateBtn_four.style.backgroundColor = 'white';
lazarusBtn_four.style.backgroundColor = 'white';  


text$bible$4$btn$5.style.display = 'none';
text$bible$4$btn$4.style.display = 'none';
text$bible$4$btn$1.style.display = 'block';
text$bible$4$btn$2.style.display = 'none';
text$bible$4$btn$3.style.display = 'none';


check_result_bible.style.display ='flex';
});



let text$bible$4$btn$2 = document.getElementById('question-4-text-2');
//second button
baptistBtn_four.addEventListener('click', function(){ 
baptistBtn_four.style.backgroundColor ='blue';
iscariotBtn_four.style.backgroundColor = 'white';
mosesBtn_four.style.backgroundColor = 'white';
pilateBtn_four.style.backgroundColor = 'white';
lazarusBtn_four.style.backgroundColor = 'white'; 


text$bible$4$btn$5.style.display = 'none';
text$bible$4$btn$4.style.display = 'none';
text$bible$4$btn$1.style.display = 'none';
text$bible$4$btn$2.style.display = 'block';
text$bible$4$btn$3.style.display = 'none';


check_result_bible.style.display ='flex';
});



let text$bible$4$btn$3 = document.getElementById('question-4-text-3');
//third button
mosesBtn_four.addEventListener('click', function(){ 
mosesBtn_four.style.backgroundColor ='blue';
iscariotBtn_four.style.backgroundColor = 'white';
baptistBtn_four.style.backgroundColor = 'white';
pilateBtn_four.style.backgroundColor = 'white';
lazarusBtn_four.style.backgroundColor = 'white'; 


text$bible$4$btn$5.style.display = 'none';
text$bible$4$btn$4.style.display = 'none';
text$bible$4$btn$1.style.display = 'none';
text$bible$4$btn$2.style.display = 'none';
text$bible$4$btn$3.style.display = 'block';

check_result_bible.style.display ='flex';
});


let text$bible$4$btn$4 = document.getElementById('question-4-text-4');
//fourth button
pilateBtn_four.addEventListener('click', function(){ 
pilateBtn_four.style.backgroundColor ='blue';
iscariotBtn_four.style.backgroundColor = 'white';
mosesBtn_four.style.backgroundColor = 'white';
baptistBtn_four.style.backgroundColor = 'white';
lazarusBtn_four.style.backgroundColor = 'white'; 



text$bible$4$btn$5.style.display = 'none';
text$bible$4$btn$4.style.display = 'block';
text$bible$4$btn$1.style.display = 'none';
text$bible$4$btn$2.style.display = 'none';
text$bible$4$btn$3.style.display = 'none';

check_result_bible.style.display ='flex';
});


let text$bible$4$btn$5 = document.getElementById('question-4-text-5');
//fifth button
lazarusBtn_four.addEventListener('click', function(){ 
lazarusBtn_four.style.backgroundColor ='blue';
iscariotBtn_four.style.backgroundColor = 'white';
mosesBtn_four.style.backgroundColor = 'white';
pilateBtn_four.style.backgroundColor = 'white';
baptistBtn_four.style.backgroundColor = 'white'; 


text$bible$4$btn$5.style.display = 'block';
text$bible$4$btn$4.style.display = 'none';
text$bible$4$btn$1.style.display = 'none';
text$bible$4$btn$2.style.display = 'none';
text$bible$4$btn$3.style.display = 'none';

check_result_bible.style.display ='flex';
});






//storing question five variables in a variable

let iscariotBtn_five =document.getElementById('iscariot_Btn_fifth');
let baptistBtn_five =document.getElementById('baptist_Btn_fifth');
let mosesBtn_five =document.getElementById('moses_Btn_fifth');
let pilateBtn_five =document.getElementById('Pilate_Btn_fifth');
let lazarusBtn_five =document.getElementById('lazarus_Btn_fifth');


let text$bible$5$btn$1=document.getElementById('question-5-text-1');
//first button
iscariotBtn_five.addEventListener('click', function(){
iscariotBtn_five.style.backgroundColor ='blue';
baptistBtn_five.style.backgroundColor = 'white';
mosesBtn_five.style.backgroundColor = 'white';
pilateBtn_five.style.backgroundColor = 'white';
lazarusBtn_five.style.backgroundColor = 'white';  


text$bible$5$btn$5.style.display = 'none';
text$bible$5$btn$4.style.display = 'none';
text$bible$5$btn$1.style.display = 'block';
text$bible$5$btn$2.style.display = 'none';
text$bible$5$btn$3.style.display = 'none';


check_result_bible.style.display ='flex';
});


let text$bible$5$btn$2=document.getElementById('question-5-text-2');
//second button
baptistBtn_five.addEventListener('click', function(){ 
baptistBtn_five.style.backgroundColor ='blue';
iscariotBtn_five.style.backgroundColor = 'white';
mosesBtn_five.style.backgroundColor = 'white';
pilateBtn_five.style.backgroundColor = 'white';
lazarusBtn_five.style.backgroundColor = 'white'; 



text$bible$5$btn$5.style.display = 'none';
text$bible$5$btn$4.style.display = 'none';
text$bible$5$btn$1.style.display = 'none';
text$bible$5$btn$2.style.display = 'block';
text$bible$5$btn$3.style.display = 'none';


check_result_bible.style.display ='flex';
});


let text$bible$5$btn$3=document.getElementById('question-5-text-3');
//third button
mosesBtn_five.addEventListener('click', function(){ 
mosesBtn_five.style.backgroundColor ='blue';
iscariotBtn_five.style.backgroundColor = 'white';
baptistBtn_five.style.backgroundColor = 'white';
pilateBtn_five.style.backgroundColor = 'white';
lazarusBtn_five.style.backgroundColor = 'white'; 



text$bible$5$btn$5.style.display = 'none';
text$bible$5$btn$4.style.display = 'none';
text$bible$5$btn$1.style.display = 'none';
text$bible$5$btn$2.style.display = 'none';
text$bible$5$btn$3.style.display = 'block';


check_result_bible.style.display ='flex';
});


let text$bible$5$btn$4=document.getElementById('question-5-text-4');
//fourth button
pilateBtn_five.addEventListener('click', function(){ 
pilateBtn_five.style.backgroundColor ='blue';
iscariotBtn_five.style.backgroundColor = 'white';
mosesBtn_five.style.backgroundColor = 'white';
baptistBtn_five.style.backgroundColor = 'white';
lazarusBtn_five.style.backgroundColor = 'white'; 


text$bible$5$btn$5.style.display = 'none';
text$bible$5$btn$4.style.display = 'block';
text$bible$5$btn$1.style.display = 'none';
text$bible$5$btn$2.style.display = 'none';
text$bible$5$btn$3.style.display = 'none';


check_result_bible.style.display ='flex';
});


let text$bible$5$btn$5=document.getElementById('question-5-text-5');
//fifth button
lazarusBtn_five.addEventListener('click', function(){ 
lazarusBtn_five.style.backgroundColor ='blue';
iscariotBtn_five.style.backgroundColor = 'white';
mosesBtn_five.style.backgroundColor = 'white';
pilateBtn_five.style.backgroundColor = 'white';
baptistBtn_five.style.backgroundColor = 'white'; 


text$bible$5$btn$5.style.display = 'block';
text$bible$5$btn$4.style.display = 'none';
text$bible$5$btn$1.style.display = 'none';
text$bible$5$btn$2.style.display = 'none';
text$bible$5$btn$3.style.display = 'none';


check_result_bible.style.display ='flex';
});





//storing question six variables in a variable

let iscariotBtn_six =document.getElementById('iscariot_Btn_sixth');
let baptistBtn_six =document.getElementById('baptist_Btn_sixth');
let mosesBtn_six =document.getElementById('moses_Btn_sixth');
let pilateBtn_six =document.getElementById('Pilate_Btn_sixth');
let lazarusBtn_six =document.getElementById('lazarus_Btn_sixth');


let text$bible$6$btn$1=document.getElementById('question-6-text-1');
//first button
iscariotBtn_six.addEventListener('click', function(){
iscariotBtn_six.style.backgroundColor ='blue';
baptistBtn_six.style.backgroundColor = 'white';
mosesBtn_six.style.backgroundColor = 'white';
pilateBtn_six.style.backgroundColor = 'white';
lazarusBtn_six.style.backgroundColor = 'white'; 


text$bible$6$btn$5.style.display = 'none';
text$bible$6$btn$4.style.display = 'none';
text$bible$6$btn$1.style.display = 'block';
text$bible$6$btn$2.style.display = 'none';
text$bible$6$btn$3.style.display = 'none';

check_result_bible.style.display ='flex';
});



let text$bible$6$btn$2=document.getElementById('question-6-text-2');
//second button
baptistBtn_six.addEventListener('click', function(){ 
baptistBtn_six.style.backgroundColor ='blue';
iscariotBtn_six.style.backgroundColor = 'white';
mosesBtn_six.style.backgroundColor = 'white';
pilateBtn_six.style.backgroundColor = 'white';
lazarusBtn_six.style.backgroundColor = 'white'; 


text$bible$6$btn$5.style.display = 'none';
text$bible$6$btn$4.style.display = 'none';
text$bible$6$btn$1.style.display = 'none';
text$bible$6$btn$2.style.display = 'block';
text$bible$6$btn$3.style.display = 'none';

check_result_bible.style.display ='flex';
});


let text$bible$6$btn$3=document.getElementById('question-6-text-3');
//third button
mosesBtn_six.addEventListener('click', function(){ 
mosesBtn_six.style.backgroundColor ='blue';
iscariotBtn_six.style.backgroundColor = 'white';
baptistBtn_six.style.backgroundColor = 'white';
pilateBtn_six.style.backgroundColor = 'white';
lazarusBtn_six.style.backgroundColor = 'white'; 


text$bible$6$btn$5.style.display = 'none';
text$bible$6$btn$4.style.display = 'none';
text$bible$6$btn$1.style.display = 'none';
text$bible$6$btn$2.style.display = 'none';
text$bible$6$btn$3.style.display = 'block';

check_result_bible.style.display ='flex';
});


let text$bible$6$btn$4=document.getElementById('question-6-text-4');
//fourth button
pilateBtn_six.addEventListener('click', function(){ 
pilateBtn_six.style.backgroundColor ='blue';
iscariotBtn_six.style.backgroundColor = 'white';
mosesBtn_six.style.backgroundColor = 'white';
baptistBtn_six.style.backgroundColor = 'white';
lazarusBtn_six.style.backgroundColor = 'white'; 


text$bible$6$btn$5.style.display = 'none';
text$bible$6$btn$4.style.display = 'block';
text$bible$6$btn$1.style.display = 'none';
text$bible$6$btn$2.style.display = 'none';
text$bible$6$btn$3.style.display = 'none';

check_result_bible.style.display ='flex';
});



let text$bible$6$btn$5=document.getElementById('question-6-text-1');

//fifth button
lazarusBtn_six.addEventListener('click', function(){ 
lazarusBtn_six.style.backgroundColor ='blue';
iscariotBtn_six.style.backgroundColor = 'white';
mosesBtn_six.style.backgroundColor = 'white';
pilateBtn_six.style.backgroundColor = 'white';
baptistBtn_six.style.backgroundColor = 'white'; 


text$bible$6$btn$5.style.display = 'block';
text$bible$6$btn$4.style.display = 'none';
text$bible$6$btn$1.style.display = 'none';
text$bible$6$btn$2.style.display = 'none';
text$bible$6$btn$3.style.display = 'none';

check_result_bible.style.display ='flex';
});




//storing question seven variables in a variable

let iscariotBtn_seven =document.getElementById('iscariot_Btn_seventh');
let baptistBtn_seven =document.getElementById('baptist_Btn_seventh');
let mosesBtn_seven =document.getElementById('moses_Btn_seventh');
let pilateBtn_seven =document.getElementById('Pilate_Btn_seventh');
let lazarusBtn_seven =document.getElementById('lazarus_Btn_seventh');




let text$bible$7$btn$1=document.getElementById('question-7-text-1');

//first button
iscariotBtn_seven.addEventListener('click', function(){
iscariotBtn_seven.style.backgroundColor ='blue';
baptistBtn_seven.style.backgroundColor = 'white';
mosesBtn_seven.style.backgroundColor = 'white';
pilateBtn_seven.style.backgroundColor = 'white';
lazarusBtn_seven.style.backgroundColor = 'white';  


text$bible$7$btn$5.style.display = 'none';
text$bible$7$btn$4.style.display = 'none';
text$bible$7$btn$1.style.display = 'block';
text$bible$7$btn$2.style.display = 'none';
text$bible$7$btn$3.style.display = 'none';

check_result_bible.style.display ='flex';
});



let text$bible$7$btn$2=document.getElementById('question-7-text-2');

//second button
baptistBtn_seven.addEventListener('click', function(){ 
baptistBtn_seven.style.backgroundColor ='blue';
iscariotBtn_seven.style.backgroundColor = 'white';
mosesBtn_seven.style.backgroundColor = 'white';
pilateBtn_seven.style.backgroundColor = 'white';
lazarusBtn_seven.style.backgroundColor = 'white'; 



text$bible$7$btn$5.style.display = 'none';
text$bible$7$btn$4.style.display = 'none';
text$bible$7$btn$1.style.display = 'none';
text$bible$7$btn$2.style.display = 'block';
text$bible$7$btn$3.style.display = 'none';


check_result_bible.style.display ='flex';
});




let text$bible$7$btn$3=document.getElementById('question-7-text-3');

//third button
mosesBtn_seven.addEventListener('click', function(){ 
mosesBtn_seven.style.backgroundColor ='blue';
iscariotBtn_seven.style.backgroundColor = 'white';
baptistBtn_seven.style.backgroundColor = 'white';
pilateBtn_seven.style.backgroundColor = 'white';
lazarusBtn_seven.style.backgroundColor = 'white'; 


text$bible$7$btn$5.style.display = 'none';
text$bible$7$btn$4.style.display = 'none';
text$bible$7$btn$1.style.display = 'none';
text$bible$7$btn$2.style.display = 'none';
text$bible$7$btn$3.style.display = 'block';

check_result_bible.style.display ='flex';
});



let text$bible$7$btn$4=document.getElementById('question-7-text-4');

//fourth button
pilateBtn_seven.addEventListener('click', function(){ 
pilateBtn_seven.style.backgroundColor ='blue';
iscariotBtn_seven.style.backgroundColor = 'white';
mosesBtn_seven.style.backgroundColor = 'white';
baptistBtn_seven.style.backgroundColor = 'white';
lazarusBtn_seven.style.backgroundColor = 'white'; 


text$bible$7$btn$5.style.display = 'none';
text$bible$7$btn$4.style.display = 'block';
text$bible$7$btn$1.style.display = 'none';
text$bible$7$btn$2.style.display = 'none';
text$bible$7$btn$3.style.display = 'none';


check_result_bible.style.display ='flex';
});


let text$bible$7$btn$5=document.getElementById('question-7-text-5');

//fifth button
lazarusBtn_seven.addEventListener('click', function(){ 
lazarusBtn_seven.style.backgroundColor ='blue';
iscariotBtn_seven.style.backgroundColor = 'white';
mosesBtn_seven.style.backgroundColor = 'white';
pilateBtn_seven.style.backgroundColor = 'white';
baptistBtn_seven.style.backgroundColor = 'white'; 


text$bible$7$btn$5.style.display = 'block';
text$bible$7$btn$4.style.display = 'none';
text$bible$7$btn$1.style.display = 'none';
text$bible$7$btn$2.style.display = 'none';
text$bible$7$btn$3.style.display = 'none';

check_result_bible.style.display ='flex';
});





//storing question eight variables in a variable

let iscariotBtn_eight =document.getElementById('iscariot_Btn_eight');
let baptistBtn_eight =document.getElementById('baptist_Btn_eight');
let mosesBtn_eight =document.getElementById('moses_Btn_eight');
let pilateBtn_eight =document.getElementById('Pilate_Btn_eight');
let lazarusBtn_eight =document.getElementById('lazarus_Btn_eight');


let text$bible$8$btn$1=document.getElementById('question-8-text-1');
//first button
iscariotBtn_eight.addEventListener('click', function(){
iscariotBtn_eight.style.backgroundColor ='blue';
baptistBtn_eight.style.backgroundColor = 'white';
mosesBtn_eight.style.backgroundColor = 'white';
pilateBtn_eight.style.backgroundColor = 'white';
lazarusBtn_eight.style.backgroundColor = 'white';  



text$bible$8$btn$5.style.display = 'none';
text$bible$8$btn$4.style.display = 'none';
text$bible$8$btn$1.style.display = 'block';
text$bible$8$btn$2.style.display = 'none';
text$bible$8$btn$3.style.display = 'none';

check_result_bible.style.display ='flex';
});


let text$bible$8$btn$2=document.getElementById('question-8-text-2');
//second button
baptistBtn_eight.addEventListener('click', function(){ 
baptistBtn_eight.style.backgroundColor ='blue';
iscariotBtn_eight.style.backgroundColor = 'white';
mosesBtn_eight.style.backgroundColor = 'white';
pilateBtn_eight.style.backgroundColor = 'white';
lazarusBtn_eight.style.backgroundColor = 'white'; 


text$bible$8$btn$5.style.display = 'none';
text$bible$8$btn$4.style.display = 'none';
text$bible$8$btn$1.style.display = 'none';
text$bible$8$btn$2.style.display = 'block';
text$bible$8$btn$3.style.display = 'none';


check_result_bible.style.display ='flex';
});

let text$bible$8$btn$3=document.getElementById('question-8-text-3');
//third button
mosesBtn_eight.addEventListener('click', function(){ 
mosesBtn_eight.style.backgroundColor ='blue';
iscariotBtn_eight.style.backgroundColor = 'white';
baptistBtn_eight.style.backgroundColor = 'white';
pilateBtn_eight.style.backgroundColor = 'white';
lazarusBtn_eight.style.backgroundColor = 'white'; 


text$bible$8$btn$5.style.display = 'none';
text$bible$8$btn$4.style.display = 'none';
text$bible$8$btn$1.style.display = 'none';
text$bible$8$btn$2.style.display = 'none';
text$bible$8$btn$3.style.display = 'block';

check_result_bible.style.display ='flex';
});


let text$bible$8$btn$4=document.getElementById('question-8-text-4');
//fourth button
pilateBtn_eight.addEventListener('click', function(){ 
pilateBtn_eight.style.backgroundColor ='blue';
iscariotBtn_eight.style.backgroundColor = 'white';
mosesBtn_eight.style.backgroundColor = 'white';
baptistBtn_eight.style.backgroundColor = 'white';
lazarusBtn_eight.style.backgroundColor = 'white'; 


text$bible$8$btn$5.style.display = 'none';
text$bible$8$btn$4.style.display = 'block';
text$bible$8$btn$1.style.display = 'none';
text$bible$8$btn$2.style.display = 'none';
text$bible$8$btn$3.style.display = 'none';



check_result_bible.style.display ='flex';
});


let text$bible$8$btn$5=document.getElementById('question-8-text-5');
//fifth button
lazarusBtn_eight.addEventListener('click', function(){ 
lazarusBtn_eight.style.backgroundColor ='blue';
iscariotBtn_eight.style.backgroundColor = 'white';
mosesBtn_eight.style.backgroundColor = 'white';
pilateBtn_eight.style.backgroundColor = 'white';
baptistBtn_eight.style.backgroundColor = 'white'; 


text$bible$8$btn$5.style.display = 'block';
text$bible$8$btn$4.style.display = 'none';
text$bible$8$btn$1.style.display = 'none';
text$bible$8$btn$2.style.display = 'none';
text$bible$8$btn$3.style.display = 'none';


check_result_bible.style.display ='flex';
});




//storing question nine variables in a variable

let iscariotBtn_nine =document.getElementById('iscariot_Btn_nineth');
let baptistBtn_nine =document.getElementById('baptist_Btn_nineth');
let mosesBtn_nine =document.getElementById('moses_Btn_nineth');
let pilateBtn_nine =document.getElementById('Pilate_Btn_nineth');
let lazarusBtn_nine =document.getElementById('lazarus_Btn_nineth');


let text$bible$9$btn$1=document.getElementById('question-9-text-1');
//first button
iscariotBtn_nine.addEventListener('click', function(){
iscariotBtn_nine.style.backgroundColor ='blue';
baptistBtn_nine.style.backgroundColor = 'white';
mosesBtn_nine.style.backgroundColor =   'white';
pilateBtn_nine.style.backgroundColor =  'white';
lazarusBtn_nine.style.backgroundColor = 'white';  


text$bible$9$btn$5.style.display = 'none';
text$bible$9$btn$4.style.display = 'none';
text$bible$9$btn$1.style.display = 'block';
text$bible$9$btn$2.style.display = 'none';
text$bible$9$btn$3.style.display = 'none';

check_result_bible.style.display ='flex';
});


let text$bible$9$btn$2=document.getElementById('question-9-text-2');
//second button
baptistBtn_nine.addEventListener('click', function(){ 
baptistBtn_nine.style.backgroundColor ='blue';
iscariotBtn_nine.style.backgroundColor ='white';
mosesBtn_nine.style.backgroundColor =   'white';
pilateBtn_nine.style.backgroundColor =  'white';
lazarusBtn_nine.style.backgroundColor = 'white'; 


text$bible$9$btn$5.style.display = 'none';
text$bible$9$btn$4.style.display = 'none';
text$bible$9$btn$1.style.display = 'none';
text$bible$9$btn$2.style.display = 'block';
text$bible$9$btn$3.style.display = 'none';

check_result_bible.style.display ='flex';
});


let text$bible$9$btn$3=document.getElementById('question-9-text-3');
//third button
mosesBtn_nine.addEventListener('click', function(){ 
mosesBtn_nine.style.backgroundColor ='blue';
iscariotBtn_nine.style.backgroundColor = 'white';
baptistBtn_nine.style.backgroundColor =  'white';
pilateBtn_nine.style.backgroundColor =   'white';
lazarusBtn_nine.style.backgroundColor =  'white'; 


text$bible$9$btn$5.style.display = 'none';
text$bible$9$btn$4.style.display = 'none';
text$bible$9$btn$1.style.display = 'none';
text$bible$9$btn$2.style.display = 'none';
text$bible$9$btn$3.style.display = 'block';


check_result_bible.style.display ='flex';
});


let text$bible$9$btn$4=document.getElementById('question-9-text-4');
//fourth button
pilateBtn_nine.addEventListener('click', function(){ 
pilateBtn_nine.style.backgroundColor ='blue';
iscariotBtn_nine.style.backgroundColor = 'white';
mosesBtn_nine.style.backgroundColor =    'white';
baptistBtn_nine.style.backgroundColor =  'white';
lazarusBtn_nine.style.backgroundColor =  'white'; 


text$bible$9$btn$5.style.display = 'none';
text$bible$9$btn$4.style.display = 'block';
text$bible$9$btn$1.style.display = 'none';
text$bible$9$btn$2.style.display = 'none';
text$bible$9$btn$3.style.display = 'none';


check_result_bible.style.display ='flex';
});



let text$bible$9$btn$5=document.getElementById('question-9-text-5');
//fifth button
lazarusBtn_nine.addEventListener('click', function(){ 
lazarusBtn_nine.style.backgroundColor ='blue';
iscariotBtn_nine.style.backgroundColor = 'white';
mosesBtn_nine.style.backgroundColor =    'white';
pilateBtn_nine.style.backgroundColor =   'white';
baptistBtn_nine.style.backgroundColor =  'white'; 


text$bible$9$btn$5.style.display = 'block';
text$bible$9$btn$4.style.display = 'none';
text$bible$9$btn$1.style.display = 'none';
text$bible$9$btn$2.style.display = 'none';
text$bible$9$btn$3.style.display = 'none';


check_result_bible.style.display ='flex';
});




//storing question ten variables in a variable

let iscariotBtn_ten =document.getElementById('iscariot_Btn_ten');
let baptistBtn_ten =document.getElementById('baptist_Btn_ten');
let mosesBtn_ten =document.getElementById('moses_Btn_ten');
let pilateBtn_ten =document.getElementById('Pilate_Btn_ten');
let lazarusBtn_ten =document.getElementById('lazarus_Btn_ten');


let text$bible$10$btn$1=document.getElementById('question-10-text-1');
//first button
iscariotBtn_ten.addEventListener('click', function(){
iscariotBtn_ten.style.backgroundColor ='blue';
baptistBtn_ten.style.backgroundColor = 'white';
mosesBtn_ten.style.backgroundColor =   'white';
pilateBtn_ten.style.backgroundColor =  'white';
lazarusBtn_ten.style.backgroundColor = 'white';  


text$bible$10$btn$5.style.display = 'none';
text$bible$10$btn$4.style.display = 'none';
text$bible$10$btn$1.style.display = 'block';
text$bible$10$btn$2.style.display = 'none';
text$bible$10$btn$3.style.display = 'none';


check_result_bible.style.display ='flex';
});


let text$bible$10$btn$2=document.getElementById('question-10-text-2');
//second button
baptistBtn_ten.addEventListener('click', function(){ 
baptistBtn_ten.style.backgroundColor ='blue';
iscariotBtn_ten.style.backgroundColor = 'white';
mosesBtn_ten.style.backgroundColor =    'white';
pilateBtn_ten.style.backgroundColor =   'white';
lazarusBtn_ten.style.backgroundColor =  'white'; 


text$bible$10$btn$5.style.display = 'none';
text$bible$10$btn$4.style.display = 'none';
text$bible$10$btn$1.style.display = 'none';
text$bible$10$btn$2.style.display = 'block';
text$bible$10$btn$3.style.display = 'none';


check_result_bible.style.display ='flex';
});



let text$bible$10$btn$3=document.getElementById('question-10-text-3');
//third button
mosesBtn_ten.addEventListener('click', function(){ 
mosesBtn_ten.style.backgroundColor ='blue';
iscariotBtn_ten.style.backgroundColor = 'white';
baptistBtn_ten.style.backgroundColor =  'white';
pilateBtn_ten.style.backgroundColor =   'white';
lazarusBtn_ten.style.backgroundColor =  'white'; 


text$bible$10$btn$5.style.display = 'none';
text$bible$10$btn$4.style.display = 'none';
text$bible$10$btn$1.style.display = 'none';
text$bible$10$btn$2.style.display = 'none';
text$bible$10$btn$3.style.display = 'block';



check_result_bible.style.display ='flex';
});



let text$bible$10$btn$4=document.getElementById('question-10-text-4');
//fourth button
pilateBtn_ten.addEventListener('click', function(){ 
pilateBtn_ten.style.backgroundColor ='blue';
iscariotBtn_ten.style.backgroundColor = 'white';
mosesBtn_ten.style.backgroundColor =    'white';
baptistBtn_ten.style.backgroundColor =  'white';
lazarusBtn_ten.style.backgroundColor =  'white'; 


text$bible$10$btn$5.style.display = 'none';
text$bible$10$btn$4.style.display = 'block';
text$bible$10$btn$1.style.display = 'none';
text$bible$10$btn$2.style.display = 'none';
text$bible$10$btn$3.style.display = 'none';


check_result_bible.style.display ='flex';
});




let text$bible$10$btn$5=document.getElementById('question-10-text-5');
//fifth button
lazarusBtn_ten.addEventListener('click', function(){ 
lazarusBtn_ten.style.backgroundColor ='blue';
iscariotBtn_ten.style.backgroundColor = 'white';
mosesBtn_ten.style.backgroundColor = 'white';
pilateBtn_ten.style.backgroundColor = 'white';
baptistBtn_ten.style.backgroundColor = 'white'; 
 


text$bible$10$btn$5.style.display = 'block';
text$bible$10$btn$4.style.display = 'none';
text$bible$10$btn$1.style.display = 'none';
text$bible$10$btn$2.style.display = 'none';
text$bible$10$btn$3.style.display = 'none';

check_result_bible.style.display ='flex';
});




let check_result_bible = document.getElementById('Check_result_bible');
let playAgain_Bible = document.getElementById('playAgain_Bible');

check_result_bible.style.display ='none';

check_result_bible.addEventListener('click', function(){


check_result_bible.style.backgroundColor='blue';

iscariotBtn.style.backgroundColor ='green';
pilateBtn_Two.style.backgroundColor ='green';
lazarusBtn_Three.style.backgroundColor ='green';
mosesBtn_four.style.backgroundColor ='green';
baptistBtn_five.style.backgroundColor ='green';
mosesBtn_six.style.backgroundColor ='green';
baptistBtn_seven.style.backgroundColor ='green';
iscariotBtn_eight.style.backgroundColor ='green';
pilateBtn_nine.style.backgroundColor ='green';
mosesBtn_ten.style.backgroundColor ='green';

let lost = document.getElementById('lost_question');

if (baptistBtn.style.backgroundColor==='blue') {
    baptistBtn.style.backgroundColor ='red';
    
}else if (iscariotBtn.style.backgroundColor==='blue') {
     lost.style.display = 'block';
     iscariotBtn.style.backgroundColor ='red';
    
}else if (lazarusBtn.style.backgroundColor==='blue') {
       lost.style.display = 'block';
    lazarusBtn.style.backgroundColor ='red';
}else if (pilateBtn.style.backgroundColor==='blue') {
     lost.style.display = 'block';
     pilateBtn.style.backgroundColor ='red';
}else if (mosesBtn.style.backgroundColor==='blue') {
     lost.style.display = 'block';
     mosesBtn.style.backgroundColor ='red';
};


     // function calcScore(params) {
//          if (iscariotBtn.style.backgroundColor ==='green' && mosesBtn.style.backgroundColor !=='red' && lazarusBtn.style.backgroundColor !=='red' && pilateBtn.style.backgroundColor !=='red' && baptistBtn.style.backgroundColor !=='red') {
//    let score1 = 1;
//          };
   
         
//           if (pilateBtn_Two.style.backgroundColor ==='green' && mosesBtn_Two.style.backgroundColor !=='red' && lazarusBtn_Two.style.backgroundColor !=='red' && iscariotBtn_Two.style.backgroundColor !=='red' && baptistBtn_Three.style.backgroundColor !=='red') {
//   let score2 =1;
//          };
//      };

// calcScore()

let secondLost = document.querySelector('.second');

if (baptistBtn_Two.style.backgroundColor==='blue') {
     secondLost.style.display = 'block';
    baptistBtn_Two.style.backgroundColor ='red';
}else if (iscariotBtn_Two.style.backgroundColor==='blue') {
      secondLost.style.display = 'block';
     iscariotBtn_Two.style.backgroundColor ='red';
}else if (lazarusBtn_Two.style.backgroundColor==='blue') {
     secondLost.style.display = 'block';
    lazarusBtn_Two.style.backgroundColor ='red';
}else if (pilateBtn_Two.style.backgroundColor==='blue') {
     secondLost.style.display = 'block';
     pilateBtn_Two.style.backgroundColor ='red';
}else if (mosesBtn_Two.style.backgroundColor==='blue') {
     secondLost.style.display = 'block';
     mosesBtn_Two.style.backgroundColor ='red';
};


let thirdLost = document.querySelector('.third');

if (baptistBtn_Three.style.backgroundColor==='blue') {
     thirdLost.style.display = 'block';
    baptistBtn_Three.style.backgroundColor ='red';
}else if (iscariotBtn_Three.style.backgroundColor==='blue') {
      thirdLost.style.display = 'block';
     iscariotBtn_Three.style.backgroundColor ='red';
}else if (lazarusBtn_Three.style.backgroundColor==='blue') {
      thirdLost.style.display = 'block';
    lazarusBtn_Three.style.backgroundColor ='red';
}else if (pilateBtn_Three.style.backgroundColor==='blue') {
      thirdLost.style.display = 'block';
     pilateBtn_Three.style.backgroundColor ='red';
}else if (mosesBtn_Three.style.backgroundColor==='blue') {
      thirdLost.style.display = 'block';
     mosesBtn_Three.style.backgroundColor ='red';
};




let fourthLost = document.querySelector('.fourth');
if (baptistBtn_four.style.backgroundColor==='blue') {
     fourthLost.style.display = 'block';
    baptistBtn_four.style.backgroundColor ='red';
}else if (iscariotBtn_four.style.backgroundColor==='blue') {
     fourthLost.style.display = 'block';
     iscariotBtn_four.style.backgroundColor ='red';
}else if (lazarusBtn_four.style.backgroundColor==='blue') {
     fourthLost.style.display = 'block';
    lazarusBtn_four.style.backgroundColor ='red';
}else if (pilateBtn_four.style.backgroundColor==='blue') {
     fourthLost.style.display = 'block';
     pilateBtn_four.style.backgroundColor ='red';
}else if (mosesBtn_five.style.backgroundColor==='blue') {
     fourthLost.style.display = 'block';
     mosesBtn_four.style.backgroundColor ='red';
};




let fifthLost = document.querySelector('.fifth');
if (baptistBtn_five.style.backgroundColor==='blue') {
     fifthLost.style.display = 'block';
    baptistBtn_five.style.backgroundColor ='red';
}else if (iscariotBtn_five.style.backgroundColor==='blue') {
      fifthLost.style.display = 'block';
     iscariotBtn_five.style.backgroundColor ='red';
}else if (lazarusBtn_five.style.backgroundColor==='blue') {
      fifthLost.style.display = 'block';
    lazarusBtn_five.style.backgroundColor ='red';
}else if (pilateBtn_five.style.backgroundColor==='blue') {
      fifthLost.style.display = 'block';
     pilateBtn_five.style.backgroundColor ='red';
}else if (mosesBtn_five.style.backgroundColor==='blue') {
      fifthLost.style.display = 'block';
     mosesBtn_five.style.backgroundColor ='red';
};




let sixthLost = document.querySelector('.sixth');
if (baptistBtn_six.style.backgroundColor==='blue') {
     sixthLost.style.display ='block';
    baptistBtn_six.style.backgroundColor ='red';
}else if (iscariotBtn_six.style.backgroundColor==='blue') {
      sixthLost.style.display ='block';
     iscariotBtn_six.style.backgroundColor ='red';
}else if (lazarusBtn_six.style.backgroundColor==='blue') {
      sixthLost.style.display ='block';
    lazarusBtn_six.style.backgroundColor ='red';
}else if (pilateBtn_six.style.backgroundColor==='blue') {
      sixthLost.style.display ='block';
     pilateBtn_six.style.backgroundColor ='red';
}else if (mosesBtn_six.style.backgroundColor==='blue') {
      sixthLost.style.display ='block';
     mosesBtn_six.style.backgroundColor ='red';
};




let seventhLost = document.querySelector('.seventh');
if (baptistBtn_seven.style.backgroundColor==='blue') {
     seventhLost.style.display ='block';
    baptistBtn_seven.style.backgroundColor ='red';
}else if (iscariotBtn_seven.style.backgroundColor==='blue') {
     seventhLost.style.display ='block';
     iscariotBtn_seven.style.backgroundColor ='red';
}else if (lazarusBtn_seven.style.backgroundColor==='blue') {
     seventhLost.style.display ='block';
    lazarusBtn_seven.style.backgroundColor ='red';
}else if (pilateBtn_seven.style.backgroundColor==='blue') {
     seventhLost.style.display ='block';
     pilateBtn_seven.style.backgroundColor ='red';
}else if (mosesBtn_seven.style.backgroundColor==='blue') {
     seventhLost.style.display ='block';
     mosesBtn_seven.style.backgroundColor ='red';
};




let eigthLost = document.querySelector('.eight');
if (baptistBtn_eight.style.backgroundColor==='blue') {
     eigthLost.style.display ='block';
    baptistBtn_eight.style.backgroundColor ='red';
}else if (iscariotBtn_eight.style.backgroundColor==='blue') {
       eigthLost.style.display ='block';
     iscariotBtn_eight.style.backgroundColor ='red';
}else if (lazarusBtn_eight.style.backgroundColor==='blue') {
       eigthLost.style.display ='block';
    lazarusBtn_eight.style.backgroundColor ='red';
}else if (pilateBtn_eight.style.backgroundColor==='blue') {
       eigthLost.style.display ='block';
     pilateBtn_eight.style.backgroundColor ='red';
}else if (mosesBtn_eight.style.backgroundColor==='blue') {
       eigthLost.style.display ='block';
     mosesBtn_eight.style.backgroundColor ='red';
};




let ninethLost = document.querySelector('.nineth');
if (baptistBtn_nine.style.backgroundColor==='blue') {
     ninethLost.style.display ='block';
    baptistBtn_nine.style.backgroundColor ='red';
}else if (iscariotBtn_nine.style.backgroundColor==='blue') {
      ninethLost.style.display ='block';
     iscariotBtn_nine.style.backgroundColor ='red';
}else if (lazarusBtn_nine.style.backgroundColor==='blue') {
      ninethLost.style.display ='block';
    lazarusBtn_nine.style.backgroundColor ='red';
}else if (pilateBtn_nine.style.backgroundColor==='blue') {
      ninethLost.style.display ='block';
     pilateBtn_nine.style.backgroundColor ='red';
}else if (mosesBtn_nine.style.backgroundColor==='blue') {
      ninethLost.style.display ='block';
     mosesBtn_nine.style.backgroundColor ='red';
};




let tenthLost = document.querySelector('.tenth');
if (baptistBtn_ten.style.backgroundColor==='blue') {
     tenthLost.style.display ='block';
    baptistBtn_ten.style.backgroundColor ='red';
}else if (iscariotBtn_ten.style.backgroundColor==='blue') {
     tenthLost.style.display ='block';
     iscariotBtn_ten.style.backgroundColor ='red';
}else if (lazarusBtn_ten.style.backgroundColor==='blue') {
     tenthLost.style.display ='block';
    lazarusBtn_ten.style.backgroundColor ='red';
}else if (pilateBtn_ten.style.backgroundColor==='blue') {
     tenthLost.style.display ='block';
     pilateBtn_ten.style.backgroundColor ='red';
}else if (mosesBtn_ten.style.backgroundColor==='blue') {
     tenthLost.style.display ='block';
     mosesBtn_ten.style.backgroundColor ='red';
};

//taking out the 'you lost comment'
playAgain_Bible.addEventListener('click', function(){
     section1.style.display='none';
   myName.value=''

     lost.style.display = 'none';
     secondLost.style.display = 'none';
     thirdLost.style.display = 'none';
     fourthLost.style.display = 'none';
     fifthLost.style.display = 'none';
     sixthLost.style.display = 'none';
     seventhLost.style.display = 'none';
     eigthLost.style.display = 'none';
     ninethLost.style.display = 'none';
     tenthLost.style.display = 'none';
});


     playAgain_Bible.style.display ='flex';




lazarusBtn.style.pointerEvents ='none';
iscariotBtn.style.pointerEvents = 'none';
mosesBtn.style.pointerEvents = 'none';
pilateBtn.style.pointerEvents = 'none';
baptistBtn.style.pointerEvents = 'none'; 


lazarusBtn_Two.style.pointerEvents ='none';
iscariotBtn_Two.style.pointerEvents = 'none';
mosesBtn_Two.style.pointerEvents = 'none';
pilateBtn_Two.style.pointerEvents = 'none';
baptistBtn_Two.style.pointerEvents = 'none'; 



iscariotBtn_Three.style.pointerEvents ='none';
baptistBtn_Three.style.pointerEvents = 'none';
mosesBtn_Three.style.pointerEvents = 'none';
pilateBtn_Three.style.pointerEvents = 'none';
lazarusBtn_Three.style.pointerEvents = 'none';  



iscariotBtn_four.style.pointerEvents ='none';
baptistBtn_four.style.pointerEvents = 'none';
mosesBtn_four.style.pointerEvents = 'none';
pilateBtn_four.style.pointerEvents = 'none';
lazarusBtn_four.style.pointerEvents = 'none';  


iscariotBtn_five.style.pointerEvents ='none';
baptistBtn_five.style.pointerEvents = 'none';
mosesBtn_five.style.pointerEvents = 'none';
pilateBtn_five.style.pointerEvents = 'none';
lazarusBtn_five.style.pointerEvents = 'none';  


lazarusBtn_six.style.pointerEvents ='none';
iscariotBtn_six.style.pointerEvents = 'none';
mosesBtn_six.style.pointerEvents = 'none';
pilateBtn_six.style.pointerEvents = 'none';
baptistBtn_six.style.pointerEvents = 'none'; 





iscariotBtn_seven.style.pointerEvents ='none';
baptistBtn_seven.style.pointerEvents = 'none';
mosesBtn_seven.style.pointerEvents = 'none';
pilateBtn_seven.style.pointerEvents = 'none';
lazarusBtn_seven.style.pointerEvents = 'none';  




iscariotBtn_eight.style.pointerEvents ='none';
baptistBtn_eight.style.pointerEvents = 'none';
mosesBtn_eight.style.pointerEvents = 'none';
pilateBtn_eight.style.pointerEvents = 'none';
lazarusBtn_eight.style.pointerEvents = 'none';  




iscariotBtn_nine.style.pointerEvents ='none';
baptistBtn_nine.style.pointerEvents = 'none';
mosesBtn_nine.style.pointerEvents =   'none';
pilateBtn_nine.style.pointerEvents =  'none';
lazarusBtn_nine.style.pointerEvents = 'none';  



lazarusBtn_ten.style.pointerEvents ='none';
iscariotBtn_ten.style.pointerEvents = 'none';
mosesBtn_ten.style.pointerEvents = 'none';
pilateBtn_ten.style.pointerEvents = 'none';
baptistBtn_ten.style.pointerEvents = 'none'; 

});


playAgain_Bible.addEventListener('click', function(){
playAgain_Bible.style.backgroundColor = 'blue';

firstPart.style.display ='block'; 
score.style.display ='none';

bibleButton.style.background ='none';

tenQuestions.style.background = 'none';
    fiveQuestions.style.background='none';
    sevenQuestions.style.background='none';



    

lazarusBtn.style.backgroundColor ='white';
iscariotBtn.style.backgroundColor = 'white';
mosesBtn.style.backgroundColor = 'white';
pilateBtn.style.backgroundColor = 'white';
baptistBtn.style.backgroundColor = 'white'; 


lazarusBtn_Two.style.backgroundColor ='white';
iscariotBtn_Two.style.backgroundColor = 'white';
mosesBtn_Two.style.backgroundColor = 'white';
pilateBtn_Two.style.backgroundColor = 'white';
baptistBtn_Two.style.backgroundColor = 'white'; 



iscariotBtn_Three.style.backgroundColor ='white';
baptistBtn_Three.style.backgroundColor = 'white';
mosesBtn_Three.style.backgroundColor = 'white';
pilateBtn_Three.style.backgroundColor = 'white';
lazarusBtn_Three.style.backgroundColor = 'white';  



iscariotBtn_four.style.backgroundColor ='white';
baptistBtn_four.style.backgroundColor = 'white';
mosesBtn_four.style.backgroundColor = 'white';
pilateBtn_four.style.backgroundColor = 'white';
lazarusBtn_four.style.backgroundColor = 'white';  


iscariotBtn_five.style.backgroundColor ='white';
baptistBtn_five.style.backgroundColor = 'white';
mosesBtn_five.style.backgroundColor = 'white';
pilateBtn_five.style.backgroundColor = 'white';
lazarusBtn_five.style.backgroundColor = 'white';  


lazarusBtn_six.style.backgroundColor ='white';
iscariotBtn_six.style.backgroundColor = 'white';
mosesBtn_six.style.backgroundColor = 'white';
pilateBtn_six.style.backgroundColor = 'white';
baptistBtn_six.style.backgroundColor = 'white'; 





iscariotBtn_seven.style.backgroundColor ='white';
baptistBtn_seven.style.backgroundColor = 'white';
mosesBtn_seven.style.backgroundColor = 'white';
pilateBtn_seven.style.backgroundColor = 'white';
lazarusBtn_seven.style.backgroundColor = 'white';  




iscariotBtn_eight.style.backgroundColor ='white';
baptistBtn_eight.style.backgroundColor = 'white';
mosesBtn_eight.style.backgroundColor = 'white';
pilateBtn_eight.style.backgroundColor = 'white';
lazarusBtn_eight.style.backgroundColor = 'white';  




iscariotBtn_nine.style.backgroundColor ='white';
baptistBtn_nine.style.backgroundColor = 'white';
mosesBtn_nine.style.backgroundColor =   'white';
pilateBtn_nine.style.backgroundColor =  'white';
lazarusBtn_nine.style.backgroundColor = 'white';  



lazarusBtn_ten.style.backgroundColor ='white';
iscariotBtn_ten.style.backgroundColor = 'white';
mosesBtn_ten.style.backgroundColor = 'white';
pilateBtn_ten.style.backgroundColor = 'white';
baptistBtn_ten.style.backgroundColor = 'white'; 




//clearing the text
text$bible$1$btn$1.style.display='none';
text$bible$1$btn$2.style.display ='none';
text$bible$1$btn$3.style.display ='none';
text$bible$1$btn$4.style.display = 'none';
text$bible$1$btn$5.style.display = 'none';

text$bible$2$btn$1.style.display ='none';
text$bible$2$btn$2.style.display ='none';
text$bible$2$btn$3.style.display ='none';
text$bible$2$btn$4.style.display ='none';
text$bible$2$btn$5.style.display ='none';

text$bible$3$btn$1.style.display ='none';
text$bible$3$btn$2.style.display ='none';
text$bible$3$btn$3.style.display ='none';
text$bible$3$btn$4.style.display ='none';
text$bible$3$btn$5.style.display ='none';

text$bible$4$btn$1.style.display ='none';
text$bible$4$btn$2.style.display ='none';
text$bible$4$btn$3.style.display ='none';
text$bible$4$btn$4.style.display ='none';
text$bible$4$btn$5.style.display ='none';

text$bible$5$btn$1.style.display ='none';
text$bible$5$btn$2.style.display ='none';
text$bible$5$btn$3.style.display ='none';
text$bible$5$btn$4.style.display ='none';
text$bible$5$btn$5.style.display ='none';

text$animals$6$btn$1.style.display ='none';
text$animals$6$btn$2.style.display ='none';
text$animals$6$btn$3.style.display ='none';
text$animals$6$btn$4.style.display ='none';
text$animals$6$btn$5.style.display ='none';

text$bible$7$btn$1.style.display ='none';
text$bible$7$btn$2.style.display ='none';
text$bible$7$btn$3.style.display ='none';
text$bible$7$btn$4.style.display ='none';
text$bible$7$btn$5.style.display ='none';

text$bible$8$btn$1.style.display ='none';
text$bible$8$btn$2.style.display ='none';
text$bible$8$btn$3.style.display ='none';
text$bible$8$btn$4.style.display ='none';
text$bible$8$btn$5.style.display ='none';

text$bible$9$btn$1.style.display ='none';
text$bible$9$btn$2.style.display ='none';
text$bible$9$btn$3.style.display ='none';
text$bible$9$btn$4.style.display ='none';
text$bible$9$btn$5.style.display ='none';

text$bible$10$btn$1.style.display ='none';
text$bible$10$btn$2.style.display ='none';
text$bible$10$btn$3.style.display ='none';
text$bible$10$btn$4.style.display ='none';
text$bible$10$btn$5.style.display ='none';


check_result_bible.style.display='none';
playAgain_Bible.style.display='none';
startBtn.style.display = 'none';


//taking out lost comments

});










///Animals question

//storing in variables for question 1ne

let question_One_btn_one = document.getElementById('animals_question_one_btn_one');
let question_One_btn_two = document.getElementById('animals_question_one_btn_two');
let question_One_btn_three = document.getElementById('animals_question_one_btn_three');
let question_One_btn_four =document.getElementById('animals_question_one_btn_four');
let question_One_btn_five = document.getElementById('animals_question_one_btn_five');


let text$animals$1$btn$1 = document.getElementById('animals-question-1-text-1');
//activating button one
question_One_btn_one.addEventListener('click', function(){
question_One_btn_one.style.backgroundColor ='blue';
question_One_btn_two.style.backgroundColor = 'white';
question_One_btn_three.style.backgroundColor = 'white';
question_One_btn_four.style.backgroundColor = 'white';
question_One_btn_five.style.backgroundColor = 'white';



text$animals$1$btn$5.style.display = 'none';
text$animals$1$btn$4.style.display = 'none';
text$animals$1$btn$1.style.display = 'block';
text$animals$1$btn$2.style.display = 'none';
text$animals$1$btn$3.style.display = 'none';


check_result_Animals.style.display = 'flex';
});



let text$animals$1$btn$2= document.getElementById('animals-question-1-text-2');
//activating button two
question_One_btn_two.addEventListener('click', function(){
 question_One_btn_two.style.backgroundColor ='blue';
 question_One_btn_one.style.backgroundColor ='white';
 question_One_btn_three.style.backgroundColor ='white';
 question_One_btn_four.style.backgroundColor ='white';
 question_One_btn_five.style.backgroundColor ='white';



text$animals$1$btn$5.style.display = 'none';
text$animals$1$btn$4.style.display = 'none';
text$animals$1$btn$1.style.display = 'none';
text$animals$1$btn$2.style.display = 'block';
text$animals$1$btn$3.style.display = 'none';

check_result_Animals.style.display = 'flex';
});




let text$animals$1$btn$3= document.getElementById('animals-question-1-text-3');
//activating button three
question_One_btn_three.addEventListener('click', function(){
 question_One_btn_three.style.backgroundColor ='blue';
 question_One_btn_one.style.backgroundColor ='white';
 question_One_btn_two.style.backgroundColor ='white';
 question_One_btn_four.style.backgroundColor ='white';
 question_One_btn_five.style.backgroundColor ='white';



text$animals$1$btn$5.style.display = 'none';
text$animals$1$btn$4.style.display = 'none';
text$animals$1$btn$1.style.display = 'none';
text$animals$1$btn$2.style.display = 'none';
text$animals$1$btn$3.style.display = 'block';

check_result_Animals.style.display = 'flex';
});


let text$animals$1$btn$4= document.getElementById('animals-question-1-text-4');
//activating button four
question_One_btn_four.addEventListener('click', function(){
 question_One_btn_four.style.backgroundColor ='blue';
 question_One_btn_one.style.backgroundColor ='white';
 question_One_btn_three.style.backgroundColor ='white';
 question_One_btn_two.style.backgroundColor ='white';
 question_One_btn_five.style.backgroundColor ='white';


text$animals$1$btn$5.style.display = 'none';
text$animals$1$btn$4.style.display = 'block';
text$animals$1$btn$1.style.display = 'none';
text$animals$1$btn$2.style.display = 'none';
text$animals$1$btn$3.style.display = 'none';


check_result_Animals.style.display = 'flex';
});




let text$animals$1$btn$5= document.getElementById('animals-question-1-text-5');
//activating button five
question_One_btn_five.addEventListener('click', function(){
 question_One_btn_five.style.backgroundColor ='blue';
 question_One_btn_one.style.backgroundColor ='white';
 question_One_btn_two.style.backgroundColor ='white';
 question_One_btn_four.style.backgroundColor ='white';
 question_One_btn_three.style.backgroundColor ='white';


text$animals$1$btn$5.style.display = 'block';
text$animals$1$btn$4.style.display = 'none';
text$animals$1$btn$1.style.display = 'none';
text$animals$1$btn$2.style.display = 'none';
text$animals$1$btn$3.style.display = 'none';

check_result_Animals.style.display = 'flex';
});




// //storing in variables for question 2wo

let question_Two_btn_one = document.getElementById('animals_question_two_btn_one');
let question_Two_btn_two = document.getElementById('animals_question_two_btn_two');
let question_Two_btn_three = document.getElementById('animals_question_two_btn_three');
let question_Two_btn_four =document.getElementById('animals_question_two_btn_four');
let question_Two_btn_five = document.getElementById('animals_question_two_btn_five');


let text$animals$2$btn$1 = document.getElementById('animals-question-2-text-1');
//activating question 2 button one 
question_Two_btn_one.addEventListener('click', function(){
question_Two_btn_one.style.backgroundColor ='blue';
question_Two_btn_two.style.backgroundColor = 'white';
question_Two_btn_three.style.backgroundColor = 'white';
question_Two_btn_four.style.backgroundColor = 'white';
question_Two_btn_five.style.backgroundColor = 'white';




text$animals$2$btn$5.style.display = 'none';
text$animals$2$btn$4.style.display = 'none';
text$animals$2$btn$1.style.display = 'block';
text$animals$2$btn$2.style.display = 'none';
text$animals$2$btn$3.style.display = 'none';
check_result_Animals.style.display = 'flex';
});




let text$animals$2$btn$2 = document.getElementById('animals-question-2-text-2');
//activating question 2 button two
question_Two_btn_two.addEventListener('click', function(){
question_Two_btn_two.style.backgroundColor ='blue';
question_Two_btn_one.style.backgroundColor = 'white';
question_Two_btn_three.style.backgroundColor = 'white';
question_Two_btn_four.style.backgroundColor = 'white';
question_Two_btn_five.style.backgroundColor = 'white';


text$animals$2$btn$5.style.display = 'none';
text$animals$2$btn$4.style.display = 'none';
text$animals$2$btn$1.style.display = 'none';
text$animals$2$btn$2.style.display = 'block';
text$animals$2$btn$3.style.display = 'none';


check_result_Animals.style.display = 'flex';
});



let text$animals$2$btn$3 = document.getElementById('animals-question-2-text-3');
//activating question 2 button three
question_Two_btn_three.addEventListener('click', function(){
question_Two_btn_three.style.backgroundColor ='blue';
question_Two_btn_one.style.backgroundColor = 'white';
question_Two_btn_two.style.backgroundColor = 'white';
question_Two_btn_four.style.backgroundColor = 'white';
question_Two_btn_five.style.backgroundColor = 'white';


text$animals$2$btn$5.style.display = 'none';
text$animals$2$btn$4.style.display = 'none';
text$animals$2$btn$1.style.display = 'none';
text$animals$2$btn$2.style.display = 'none';
text$animals$2$btn$3.style.display = 'block';


check_result_Animals.style.display = 'flex';
});




let text$animals$2$btn$4 = document.getElementById('animals-question-2-text-4');
//activating question 2 button four
question_Two_btn_four.addEventListener('click', function(){
question_Two_btn_four.style.backgroundColor ='blue';
question_Two_btn_one.style.backgroundColor = 'white';
question_Two_btn_two.style.backgroundColor = 'white';
question_Two_btn_three.style.backgroundColor = 'white';
question_Two_btn_five.style.backgroundColor = 'white';



text$animals$2$btn$5.style.display = 'none';
text$animals$2$btn$4.style.display = 'block';
text$animals$2$btn$1.style.display = 'none';
text$animals$2$btn$2.style.display = 'none';
text$animals$2$btn$3.style.display = 'none';

check_result_Animals.style.display = 'flex';
});



let text$animals$2$btn$5 = document.getElementById('animals-question-2-text-5');
//activating question 2 button five
question_Two_btn_five.addEventListener('click', function(){
question_Two_btn_five.style.backgroundColor ='blue';
question_Two_btn_one.style.backgroundColor = 'white';
question_Two_btn_three.style.backgroundColor = 'white';
question_Two_btn_four.style.backgroundColor = 'white';
question_Two_btn_two.style.backgroundColor = 'white';


text$animals$2$btn$5.style.display = 'block';
text$animals$2$btn$4.style.display = 'none';
text$animals$2$btn$1.style.display = 'none';
text$animals$2$btn$2.style.display = 'none';
text$animals$2$btn$3.style.display = 'none';



check_result_Animals.style.display = 'flex';
});







//storing question three buttons in variables
let question_Three_btn_one = document.getElementById('animals_question_three_btn_one');
let question_Three_btn_two = document.getElementById('animals_question_three_btn_two');
let question_Three_btn_three = document.getElementById('animals_question_three_btn_three');
let question_Three_btn_four =document.getElementById('animals_question_three_btn_four');
let question_Three_btn_five = document.getElementById('animals_question_three_btn_five');




let text$animals$3$btn$1 = document.getElementById('animals-question-3-text-1');
//activating question 3 button one 
question_Three_btn_one.addEventListener('click', function(){
question_Three_btn_one.style.backgroundColor ='blue';
question_Three_btn_two.style.backgroundColor = 'white';
question_Three_btn_three.style.backgroundColor = 'white';
question_Three_btn_four.style.backgroundColor = 'white';
question_Three_btn_five.style.backgroundColor = 'white';

check_result_Animals.style.display = 'flex';

text$animals$3$btn$1.style.display ='block';
text$animals$3$btn$2.style.display = 'none';
text$animals$3$btn$3.style.display ='none';
text$animals$3$btn$4.style.display ='none';
text$animals$3$btn$5.style.display ='none';
});



let text$animals$3$btn$2 = document.getElementById('animals-question-3-text-2');
//activating question 3 button two
question_Three_btn_two.addEventListener('click', function(){
question_Three_btn_two.style.backgroundColor ='blue';
question_Three_btn_one.style.backgroundColor = 'white';
question_Three_btn_three.style.backgroundColor = 'white';
question_Three_btn_four.style.backgroundColor = 'white';
question_Three_btn_five.style.backgroundColor = 'white';

check_result_Animals.style.display = 'flex';


text$animals$3$btn$1.style.display ='none';
text$animals$3$btn$2.style.display = 'block';
text$animals$3$btn$3.style.display ='none';
text$animals$3$btn$4.style.display ='none';
text$animals$3$btn$5.style.display ='none'
});


let text$animals$3$btn$3 = document.getElementById('animals-question-3-text-3');
//activating question 3 button three
question_Three_btn_three.addEventListener('click', function(){
question_Three_btn_three.style.backgroundColor ='blue';
question_Three_btn_one.style.backgroundColor = 'white';
question_Three_btn_two.style.backgroundColor = 'white';
question_Three_btn_four.style.backgroundColor = 'white';
question_Three_btn_five.style.backgroundColor = 'white';

check_result_Animals.style.display = 'flex';



text$animals$3$btn$1.style.display ='none';
text$animals$3$btn$2.style.display = 'none';
text$animals$3$btn$3.style.display ='block';
text$animals$3$btn$4.style.display ='none';
text$animals$3$btn$5.style.display ='none';
});




let text$animals$3$btn$4 = document.getElementById('animals-question-3-text-4');
//activating question 3 button four
question_Three_btn_four.addEventListener('click', function(){
question_Three_btn_four.style.backgroundColor ='blue';
question_Three_btn_one.style.backgroundColor = 'white';
question_Three_btn_two.style.backgroundColor = 'white';
question_Three_btn_three.style.backgroundColor = 'white';
question_Three_btn_five.style.backgroundColor = 'white';

check_result_Animals.style.display = 'flex';




text$animals$3$btn$1.style.display ='none';
text$animals$3$btn$2.style.display = 'none';
text$animals$3$btn$3.style.display ='none';
text$animals$3$btn$4.style.display ='block';
text$animals$3$btn$5.style.display ='none';
});




let text$animals$3$btn$5 = document.getElementById('animals-question-3-text-5');
//activating question 3 button five
question_Three_btn_five.addEventListener('click', function(){
question_Three_btn_five.style.backgroundColor ='blue';
question_Three_btn_one.style.backgroundColor = 'white';
question_Three_btn_three.style.backgroundColor = 'white';
question_Three_btn_four.style.backgroundColor = 'white';
question_Three_btn_two.style.backgroundColor = 'white';

check_result_Animals.style.display = 'flex';



text$animals$3$btn$1.style.display ='none';
text$animals$3$btn$2.style.display = 'none';
text$animals$3$btn$3.style.display ='none';
text$animals$3$btn$4.style.display ='none';
text$animals$3$btn$5.style.display ='block';
});






//storing question four buttons in variables
let question_Four_btn_one = document.getElementById('animals_question_four_btn_one');
let question_Four_btn_two = document.getElementById('animals_question_four_btn_two');
let question_Four_btn_three = document.getElementById('animals_question_four_btn_three');
let question_Four_btn_four =document.getElementById('animals_question_four_btn_four');
let question_Four_btn_five = document.getElementById('animals_question_four_btn_five');



let text$animals$4$btn$1 = document.getElementById('animals-question-4-text-1');
//activating question 4 button one 
question_Four_btn_one.addEventListener('click', function(){
question_Four_btn_one.style.backgroundColor ='blue';
question_Four_btn_two.style.backgroundColor = 'white';
question_Four_btn_three.style.backgroundColor = 'white';
question_Four_btn_four.style.backgroundColor = 'white';
question_Four_btn_five.style.backgroundColor = 'white';

check_result_Animals.style.display = 'flex';


text$animals$4$btn$1.style.display = 'block';
text$animals$4$btn$2.style.display = 'none';
text$animals$4$btn$3.style.display = 'none';
text$animals$4$btn$4.style.display = 'none';
text$animals$4$btn$5.style.display = 'none';
});



let text$animals$4$btn$2 =document.getElementById('animals-question-4-text-2');
//activating question 4 button two
question_Four_btn_two.addEventListener('click', function(){
question_Four_btn_two.style.backgroundColor ='blue';
question_Four_btn_one.style.backgroundColor = 'white';
question_Four_btn_three.style.backgroundColor = 'white';
question_Four_btn_four.style.backgroundColor = 'white';
question_Four_btn_five.style.backgroundColor = 'white';

check_result_Animals.style.display = 'flex';



text$animals$4$btn$1.style.display = 'none';
text$animals$4$btn$2.style.display = 'block';
text$animals$4$btn$3.style.display = 'none';
text$animals$4$btn$4.style.display = 'none';
text$animals$4$btn$5.style.display = 'none';
});




let text$animals$4$btn$3 =document.getElementById('animals-question-4-text-3');
//activating question 4 button three
question_Four_btn_three.addEventListener('click', function(){
question_Four_btn_three.style.backgroundColor ='blue';
question_Four_btn_one.style.backgroundColor = 'white';
question_Four_btn_two.style.backgroundColor = 'white';
question_Four_btn_four.style.backgroundColor = 'white';
question_Four_btn_five.style.backgroundColor = 'white';

check_result_Animals.style.display = 'flex';


text$animals$4$btn$1.style.display = 'none';
text$animals$4$btn$2.style.display = 'none';
text$animals$4$btn$3.style.display = 'block';
text$animals$4$btn$4.style.display = 'none';
text$animals$4$btn$5.style.display = 'none';
});




let text$animals$4$btn$4 =document.getElementById('animals-question-4-text-4');
//activating question 4 button four
question_Four_btn_four.addEventListener('click', function(){
question_Four_btn_four.style.backgroundColor ='blue';
question_Four_btn_one.style.backgroundColor = 'white';
question_Four_btn_two.style.backgroundColor = 'white';
question_Four_btn_three.style.backgroundColor = 'white';
question_Four_btn_five.style.backgroundColor = 'white';

check_result_Animals.style.display = 'flex';


text$animals$4$btn$1.style.display = 'none';
text$animals$4$btn$2.style.display = 'none';
text$animals$4$btn$3.style.display = 'none';
text$animals$4$btn$4.style.display = 'block';
text$animals$4$btn$5.style.display = 'none';
});



let text$animals$4$btn$5 =document.getElementById('animals-question-4-text-5');
//activating question 4 button five
question_Four_btn_five.addEventListener('click', function(){
question_Four_btn_five.style.backgroundColor ='blue';
question_Four_btn_one.style.backgroundColor = 'white';
question_Four_btn_three.style.backgroundColor = 'white';
question_Four_btn_four.style.backgroundColor = 'white';
question_Four_btn_two.style.backgroundColor = 'white';

check_result_Animals.style.display = 'flex';



text$animals$4$btn$1.style.display = 'none';
text$animals$4$btn$2.style.display = 'none';
text$animals$4$btn$3.style.display = 'none';
text$animals$4$btn$4.style.display = 'none';
text$animals$4$btn$5.style.display = 'block';
});







//storing question five buttons in variables
let question_Five_btn_one = document.getElementById('animals_question_five_btn_one');
let question_Five_btn_two = document.getElementById('animals_question_five_btn_two');
let question_Five_btn_three = document.getElementById('animals_question_five_btn_three');
let question_Five_btn_four =document.getElementById('animals_question_five_btn_four');
let question_Five_btn_five = document.getElementById('animals_question_five_btn_five');


let text$animals$5$btn$1 =document.getElementById('animals-question-5-text-1');
//activating question 5 button one 
question_Five_btn_one.addEventListener('click', function(){
question_Five_btn_one.style.backgroundColor ='blue';
question_Five_btn_two.style.backgroundColor = 'white';
question_Five_btn_three.style.backgroundColor = 'white';
question_Five_btn_four.style.backgroundColor = 'white';
question_Five_btn_five.style.backgroundColor = 'white';

     check_result_Animals.style.display = 'flex';


text$animals$5$btn$1.style.display ='block';
text$animals$5$btn$2.style.display ='none';
text$animals$5$btn$3.style.display ='none';
text$animals$5$btn$4.style.display ='none';
text$animals$5$btn$5.style.display ='none';
});




let text$animals$5$btn$2 =document.getElementById('animals-question-5-text-2');
//activating question 5 button two
question_Five_btn_two.addEventListener('click', function(){
question_Five_btn_two.style.backgroundColor ='blue';
question_Five_btn_one.style.backgroundColor = 'white';
question_Five_btn_three.style.backgroundColor = 'white';
question_Five_btn_four.style.backgroundColor = 'white';
question_Five_btn_five.style.backgroundColor = 'white';

check_result_Animals.style.display = 'flex';


text$animals$5$btn$1.style.display ='none';
text$animals$5$btn$2.style.display ='block';
text$animals$5$btn$3.style.display ='none';
text$animals$5$btn$4.style.display ='none';
text$animals$5$btn$5.style.display ='none';
});



let text$animals$5$btn$3 =document.getElementById('animals-question-5-text-3');
//activating question 5 button three
question_Five_btn_three.addEventListener('click', function(){
question_Five_btn_three.style.backgroundColor ='blue';
question_Five_btn_one.style.backgroundColor = 'white';
question_Five_btn_two.style.backgroundColor = 'white';
question_Five_btn_four.style.backgroundColor = 'white';
question_Five_btn_five.style.backgroundColor = 'white';

check_result_Animals.style.display = 'flex';




text$animals$5$btn$1.style.display ='none';
text$animals$5$btn$2.style.display ='none';
text$animals$5$btn$3.style.display ='block';
text$animals$5$btn$4.style.display ='none';
text$animals$5$btn$5.style.display ='none';
});



let text$animals$5$btn$4 =document.getElementById('animals-question-5-text-4');
//activating question 5 button four
question_Five_btn_four.addEventListener('click', function(){
question_Five_btn_four.style.backgroundColor ='blue';
question_Five_btn_one.style.backgroundColor = 'white';
question_Five_btn_two.style.backgroundColor = 'white';
question_Five_btn_three.style.backgroundColor = 'white';
question_Five_btn_five.style.backgroundColor = 'white';

check_result_Animals.style.display = 'flex';



text$animals$5$btn$1.style.display ='none';
text$animals$5$btn$2.style.display ='none';
text$animals$5$btn$3.style.display ='none';
text$animals$5$btn$4.style.display ='block';
text$animals$5$btn$5.style.display ='none';
});



let text$animals$5$btn$5 =document.getElementById('animals-question-5-text-5');
//activating question 5 button five
question_Five_btn_five.addEventListener('click', function(){
question_Five_btn_five.style.backgroundColor ='blue';
question_Five_btn_one.style.backgroundColor = 'white';
question_Five_btn_three.style.backgroundColor = 'white';
question_Five_btn_four.style.backgroundColor = 'white';
question_Five_btn_two.style.backgroundColor = 'white';

check_result_Animals.style.display = 'flex';


text$animals$5$btn$1.style.display ='none';
text$animals$5$btn$2.style.display ='none';
text$animals$5$btn$3.style.display ='none';
text$animals$5$btn$4.style.display ='none';
text$animals$5$btn$5.style.display ='block';
});





//storing question six buttons in variables
let question_Six_btn_one = document.getElementById('animals_question_six_btn_one');
let question_Six_btn_two = document.getElementById('animals_question_six_btn_two');
let question_Six_btn_three = document.getElementById('animals_question_six_btn_three');
let question_Six_btn_four =document.getElementById('animals_question_six_btn_four');
let question_Six_btn_five = document.getElementById('animals_question_six_btn_five');


let text$animals$6$btn$1 =document.getElementById('animals-question-6-text-1');
//activating question 6 button one 
question_Six_btn_one.addEventListener('click', function(){
question_Six_btn_one.style.backgroundColor ='blue';
question_Six_btn_two.style.backgroundColor = 'white';
question_Six_btn_three.style.backgroundColor = 'white';
question_Six_btn_four.style.backgroundColor = 'white';
question_Six_btn_five.style.backgroundColor = 'white';

check_result_Animals.style.display = 'flex';


text$animals$6$btn$1.style.display ='block';
text$animals$6$btn$2.style.display ='none';
text$animals$6$btn$3.style.display ='none';
text$animals$6$btn$4.style.display ='none';
text$animals$6$btn$5.style.display ='none';
});


let text$animals$6$btn$2 =document.getElementById('animals-question-6-text-2');
//activating question 6 button two
question_Six_btn_two.addEventListener('click', function(){
question_Six_btn_two.style.backgroundColor ='blue';
question_Six_btn_one.style.backgroundColor = 'white';
question_Six_btn_three.style.backgroundColor = 'white';
question_Six_btn_four.style.backgroundColor = 'white';
question_Six_btn_five.style.backgroundColor = 'white';

check_result_Animals.style.display = 'flex';


text$animals$6$btn$1.style.display ='none';
text$animals$6$btn$2.style.display ='block';
text$animals$6$btn$3.style.display ='none';
text$animals$6$btn$4.style.display ='none';
text$animals$6$btn$5.style.display ='none';
});


let text$animals$6$btn$3 =document.getElementById('animals-question-6-text-3');
//activating question 6 button three
question_Six_btn_three.addEventListener('click', function(){
question_Six_btn_three.style.backgroundColor ='blue';
question_Six_btn_one.style.backgroundColor = 'white';
question_Six_btn_two.style.backgroundColor = 'white';
question_Six_btn_four.style.backgroundColor = 'white';
question_Six_btn_five.style.backgroundColor = 'white';

check_result_Animals.style.display = 'flex';


text$animals$6$btn$1.style.display ='none';
text$animals$6$btn$2.style.display ='none';
text$animals$6$btn$3.style.display ='block';
text$animals$6$btn$4.style.display ='none';
text$animals$6$btn$5.style.display ='none';
});


let text$animals$6$btn$4 =document.getElementById('animals-question-6-text-4');
//activating question 6 button four
question_Six_btn_four.addEventListener('click', function(){
question_Six_btn_four.style.backgroundColor ='blue';
question_Six_btn_one.style.backgroundColor = 'white';
question_Six_btn_two.style.backgroundColor = 'white';
question_Six_btn_three.style.backgroundColor = 'white';
question_Six_btn_five.style.backgroundColor = 'white';

check_result_Animals.style.display = 'flex';


text$animals$6$btn$1.style.display ='none';
text$animals$6$btn$2.style.display ='none';
text$animals$6$btn$3.style.display ='none';
text$animals$6$btn$4.style.display ='block';
text$animals$6$btn$5.style.display ='none';
});



let text$animals$6$btn$5 =document.getElementById('animals-question-6-text-5');
//activating question 6 button five
question_Six_btn_five.addEventListener('click', function(){
question_Six_btn_five.style.backgroundColor ='blue';
question_Six_btn_one.style.backgroundColor = 'white';
question_Six_btn_three.style.backgroundColor = 'white';
question_Six_btn_four.style.backgroundColor = 'white';
question_Six_btn_two.style.backgroundColor = 'white';

check_result_Animals.style.display = 'flex';



text$animals$6$btn$1.style.display ='none';
text$animals$6$btn$2.style.display ='none';
text$animals$6$btn$3.style.display ='none';
text$animals$6$btn$4.style.display ='none';
text$animals$6$btn$5.style.display ='block';
});





//storing question seven buttons in variables
let question_Seven_btn_one = document.getElementById('animals_question_seven_btn_one');
let question_Seven_btn_two = document.getElementById('animals_question_seven_btn_two');
let question_Seven_btn_three = document.getElementById('animals_question_seven_btn_three');
let question_Seven_btn_four =document.getElementById('animals_question_seven_btn_four');
let question_Seven_btn_five = document.getElementById('animals_question_seven_btn_five');


let text$animals$7$btn$1 =document.getElementById('animals-question-7-text-1');
//activating question 7 button one 
question_Seven_btn_one.addEventListener('click', function(){
question_Seven_btn_one.style.backgroundColor ='blue';
question_Seven_btn_two.style.backgroundColor = 'white';
question_Seven_btn_three.style.backgroundColor = 'white';
question_Seven_btn_four.style.backgroundColor = 'white';
question_Seven_btn_five.style.backgroundColor = 'white';

check_result_Animals.style.display = 'flex';



text$animals$7$btn$1.style.display ='block';
text$animals$7$btn$2.style.display ='none';
text$animals$7$btn$3.style.display ='none';
text$animals$7$btn$4.style.display ='none';
text$animals$7$btn$5.style.display ='none';
});


let text$animals$7$btn$2 =document.getElementById('animals-question-7-text-2');
//activating question 7 button two
question_Seven_btn_two.addEventListener('click', function(){
question_Seven_btn_two.style.backgroundColor ='blue';
question_Seven_btn_one.style.backgroundColor = 'white';
question_Seven_btn_three.style.backgroundColor = 'white';
question_Seven_btn_four.style.backgroundColor = 'white';
question_Seven_btn_five.style.backgroundColor = 'white';

check_result_Animals.style.display = 'flex';


text$animals$7$btn$1.style.display ='none';
text$animals$7$btn$2.style.display ='block';
text$animals$7$btn$3.style.display ='none';
text$animals$7$btn$4.style.display ='none';
text$animals$7$btn$5.style.display ='none';
});


let text$animals$7$btn$3 =document.getElementById('animals-question-7-text-3');
//activating question 7 button three
question_Seven_btn_three.addEventListener('click', function(){
question_Seven_btn_three.style.backgroundColor ='blue';
question_Seven_btn_one.style.backgroundColor = 'white';
question_Seven_btn_two.style.backgroundColor = 'white';
question_Seven_btn_four.style.backgroundColor = 'white';
question_Seven_btn_five.style.backgroundColor = 'white';

check_result_Animals.style.display = 'flex';


text$animals$7$btn$1.style.display ='none';
text$animals$7$btn$2.style.display ='none';
text$animals$7$btn$3.style.display ='block';
text$animals$7$btn$4.style.display ='none';
text$animals$7$btn$5.style.display ='none';
});


let text$animals$7$btn$4 =document.getElementById('animals-question-7-text-4');
//activating question 7 button four
question_Seven_btn_four.addEventListener('click', function(){
question_Seven_btn_four.style.backgroundColor ='blue';
question_Seven_btn_one.style.backgroundColor = 'white';
question_Seven_btn_two.style.backgroundColor = 'white';
question_Seven_btn_three.style.backgroundColor = 'white';
question_Seven_btn_five.style.backgroundColor = 'white';

check_result_Animals.style.display = 'flex';


text$animals$7$btn$1.style.display ='none';
text$animals$7$btn$2.style.display ='none';
text$animals$7$btn$3.style.display ='none';
text$animals$7$btn$4.style.display ='block';
text$animals$7$btn$5.style.display ='none';
});



let text$animals$7$btn$5 =document.getElementById('animals-question-7-text-5');
//activating question 7 button five
question_Seven_btn_five.addEventListener('click', function(){
question_Seven_btn_five.style.backgroundColor ='blue';
question_Seven_btn_one.style.backgroundColor = 'white';
question_Seven_btn_three.style.backgroundColor = 'white';
question_Seven_btn_four.style.backgroundColor = 'white';
question_Seven_btn_two.style.backgroundColor = 'white';

check_result_Animals.style.display = 'flex';


text$animals$7$btn$1.style.display ='none';
text$animals$7$btn$2.style.display ='none';
text$animals$7$btn$3.style.display ='none';
text$animals$7$btn$4.style.display ='none';
text$animals$7$btn$5.style.display ='block';
});







//storing question eight buttons in variables
let question_Eight_btn_one = document.getElementById('animals_question_eight_btn_one');
let question_Eight_btn_two = document.getElementById('animals_question_eight_btn_two');
let question_Eight_btn_three = document.getElementById('animals_question_eight_btn_three');
let question_Eight_btn_four =document.getElementById('animals_question_eight_btn_four');
let question_Eight_btn_five = document.getElementById('animals_question_eight_btn_five');


let text$animals$8$btn$1 =document.getElementById('animals-question-8-text-1');
//activating question 8 button one 
question_Eight_btn_one.addEventListener('click', function(){
question_Eight_btn_one.style.backgroundColor ='blue';
question_Eight_btn_two.style.backgroundColor = 'white';
question_Eight_btn_three.style.backgroundColor = 'white';
question_Eight_btn_four.style.backgroundColor = 'white';
question_Eight_btn_five.style.backgroundColor = 'white';

check_result_Animals.style.display = 'flex';

text$animals$8$btn$1.style.display ='block';
text$animals$8$btn$2.style.display ='none';
text$animals$8$btn$3.style.display ='none';
text$animals$8$btn$4.style.display ='none';
text$animals$8$btn$5.style.display ='none';
});


let text$animals$8$btn$2 =document.getElementById('animals-question-8-text-2');
//activating question 8 button two
question_Eight_btn_two.addEventListener('click', function(){
question_Eight_btn_two.style.backgroundColor ='blue';
question_Eight_btn_one.style.backgroundColor = 'white';
question_Eight_btn_three.style.backgroundColor = 'white';
question_Eight_btn_four.style.backgroundColor = 'white';
question_Eight_btn_five.style.backgroundColor = 'white';

check_result_Animals.style.display = 'flex';


text$animals$8$btn$1.style.display ='none';
text$animals$8$btn$2.style.display ='block';
text$animals$8$btn$3.style.display ='none';
text$animals$8$btn$4.style.display ='none';
text$animals$8$btn$5.style.display ='none';
});




let text$animals$8$btn$3 =document.getElementById('animals-question-8-text-3');
//activating question 8 button three
question_Eight_btn_three.addEventListener('click', function(){
question_Eight_btn_three.style.backgroundColor ='blue';
question_Eight_btn_one.style.backgroundColor = 'white';
question_Eight_btn_two.style.backgroundColor = 'white';
question_Eight_btn_four.style.backgroundColor = 'white';
question_Eight_btn_five.style.backgroundColor = 'white';

check_result_Animals.style.display = 'flex';


text$animals$8$btn$1.style.display ='none';
text$animals$8$btn$2.style.display ='none';
text$animals$8$btn$3.style.display ='block';
text$animals$8$btn$4.style.display ='none';
text$animals$8$btn$5.style.display ='none';
});


let text$animals$8$btn$4 =document.getElementById('animals-question-8-text-4');
//activating question 8 button four
question_Eight_btn_four.addEventListener('click', function(){
question_Eight_btn_four.style.backgroundColor ='blue';
question_Eight_btn_one.style.backgroundColor = 'white';
question_Eight_btn_two.style.backgroundColor = 'white';
question_Eight_btn_three.style.backgroundColor = 'white';
question_Eight_btn_five.style.backgroundColor = 'white';

check_result_Animals.style.display = 'flex';


text$animals$8$btn$1.style.display ='none';
text$animals$8$btn$2.style.display ='none';
text$animals$8$btn$3.style.display ='none';
text$animals$8$btn$4.style.display ='block';
text$animals$8$btn$5.style.display ='none';
});

let text$animals$8$btn$5 =document.getElementById('animals-question-8-text-5');
//activating question 8 button five
question_Eight_btn_five.addEventListener('click', function(){
question_Eight_btn_five.style.backgroundColor ='blue';
question_Eight_btn_one.style.backgroundColor = 'white';
question_Eight_btn_three.style.backgroundColor = 'white';
question_Eight_btn_four.style.backgroundColor = 'white';
question_Eight_btn_two.style.backgroundColor = 'white';

check_result_Animals.style.display = 'flex';


text$animals$8$btn$1.style.display ='none';
text$animals$8$btn$2.style.display ='none';
text$animals$8$btn$3.style.display ='none';
text$animals$8$btn$4.style.display ='none';
text$animals$8$btn$5.style.display ='block';
});





//storing question nine buttons in variables
let question_Nine_btn_one = document.getElementById('animals_question_nine_btn_one');
let question_Nine_btn_two = document.getElementById('animals_question_nine_btn_two');
let question_Nine_btn_three = document.getElementById('animals_question_nine_btn_three');
let question_Nine_btn_four =document.getElementById('animals_question_nine_btn_four');
let question_Nine_btn_five = document.getElementById('animals_question_nine_btn_five');


let text$animals$9$btn$1 =document.getElementById('animals-question-9-text-1');
//activating question 9 button one 
question_Nine_btn_one.addEventListener('click', function(){
question_Nine_btn_one.style.backgroundColor ='blue';
question_Nine_btn_two.style.backgroundColor = 'white';
question_Nine_btn_three.style.backgroundColor = 'white';
question_Nine_btn_four.style.backgroundColor = 'white';
question_Nine_btn_five.style.backgroundColor = 'white';

check_result_Animals.style.display = 'flex';


text$animals$9$btn$1.style.display ='block';
text$animals$9$btn$2.style.display ='none';
text$animals$9$btn$3.style.display ='none';
text$animals$9$btn$4.style.display ='none';
text$animals$9$btn$5.style.display ='none';
});


let text$animals$9$btn$2 =document.getElementById('animals-question-9-text-2');
//activating question 9 button two
question_Nine_btn_two.addEventListener('click', function(){
question_Nine_btn_two.style.backgroundColor ='blue';
question_Nine_btn_one.style.backgroundColor = 'white';
question_Nine_btn_three.style.backgroundColor = 'white';
question_Nine_btn_four.style.backgroundColor = 'white';
question_Nine_btn_five.style.backgroundColor = 'white';

check_result_Animals.style.display = 'flex';


text$animals$9$btn$1.style.display ='none';
text$animals$9$btn$2.style.display ='block';
text$animals$9$btn$3.style.display ='none';
text$animals$9$btn$4.style.display ='none';
text$animals$9$btn$5.style.display ='none';
});


let text$animals$9$btn$3 =document.getElementById('animals-question-9-text-3');
//activating question 9 button three
question_Nine_btn_three.addEventListener('click', function(){
question_Nine_btn_three.style.backgroundColor ='blue';
question_Nine_btn_one.style.backgroundColor = 'white';
question_Nine_btn_two.style.backgroundColor = 'white';
question_Nine_btn_four.style.backgroundColor = 'white';
question_Nine_btn_five.style.backgroundColor = 'white';

check_result_Animals.style.display = 'flex';


text$animals$9$btn$1.style.display ='none';
text$animals$9$btn$2.style.display ='none';
text$animals$9$btn$3.style.display ='block';
text$animals$9$btn$4.style.display ='none';
text$animals$9$btn$5.style.display ='none';
});


let text$animals$9$btn$4 =document.getElementById('animals-question-9-text-4');
//activating question 9 button four
question_Nine_btn_four.addEventListener('click', function(){
question_Nine_btn_four.style.backgroundColor ='blue';
question_Nine_btn_one.style.backgroundColor = 'white';
question_Nine_btn_two.style.backgroundColor = 'white';
question_Nine_btn_three.style.backgroundColor = 'white';
question_Nine_btn_five.style.backgroundColor = 'white';

check_result_Animals.style.display = 'flex';


text$animals$9$btn$1.style.display ='none';
text$animals$9$btn$2.style.display ='none';
text$animals$9$btn$3.style.display ='none';
text$animals$9$btn$4.style.display ='block';
text$animals$9$btn$5.style.display ='none';
});


let text$animals$9$btn$5 =document.getElementById('animals-question-9-text-5');
//activating question 9 button five
question_Nine_btn_five.addEventListener('click', function(){
question_Nine_btn_five.style.backgroundColor ='blue';
question_Nine_btn_one.style.backgroundColor = 'white';
question_Nine_btn_three.style.backgroundColor = 'white';
question_Nine_btn_four.style.backgroundColor = 'white';
question_Nine_btn_two.style.backgroundColor = 'white';

check_result_Animals.style.display = 'flex';


text$animals$9$btn$1.style.display ='none';
text$animals$9$btn$2.style.display ='none';
text$animals$9$btn$3.style.display ='none';
text$animals$9$btn$4.style.display ='none';
text$animals$9$btn$5.style.display ='block';
});









//storing question 10 buttons in variables
let question_Ten_btn_one = document.getElementById('animals_question_ten_btn_one');
let question_Ten_btn_two = document.getElementById('animals_question_ten_btn_two');
let question_Ten_btn_three = document.getElementById('animals_question_ten_btn_three');
let question_Ten_btn_four =document.getElementById('animals_question_ten_btn_four');
let question_Ten_btn_five = document.getElementById('animals_question_ten_btn_five');



let text$animals$10$btn$1 =document.getElementById('animals-question-10-text-1');
//activating question 10 button one 
question_Ten_btn_one.addEventListener('click', function(){
question_Ten_btn_one.style.backgroundColor ='blue';
question_Ten_btn_two.style.backgroundColor = 'white';
question_Ten_btn_three.style.backgroundColor = 'white';
question_Ten_btn_four.style.backgroundColor = 'white';
question_Ten_btn_five.style.backgroundColor = 'white';

check_result_Animals.style.display = 'flex';



text$animals$10$btn$1.style.display ='block';
text$animals$10$btn$2.style.display ='none';
text$animals$10$btn$3.style.display ='none';
text$animals$10$btn$4.style.display ='none';
text$animals$10$btn$5.style.display ='none';
});


let text$animals$10$btn$2 =document.getElementById('animals-question-10-text-2');
//activating question 10 button two
question_Ten_btn_two.addEventListener('click', function(){
question_Ten_btn_two.style.backgroundColor ='blue';
question_Ten_btn_one.style.backgroundColor = 'white';
question_Ten_btn_three.style.backgroundColor = 'white';
question_Ten_btn_four.style.backgroundColor = 'white';
question_Ten_btn_five.style.backgroundColor = 'white';

check_result_Animals.style.display = 'flex';


text$animals$10$btn$1.style.display ='none';
text$animals$10$btn$2.style.display ='block';
text$animals$10$btn$3.style.display ='none';
text$animals$10$btn$4.style.display ='none';
text$animals$10$btn$5.style.display ='none';
});


let text$animals$10$btn$3 =document.getElementById('animals-question-10-text-3');
//activating question 10 button three
question_Ten_btn_three.addEventListener('click', function(){
question_Ten_btn_three.style.backgroundColor ='blue';
question_Ten_btn_one.style.backgroundColor = 'white';
question_Ten_btn_two.style.backgroundColor = 'white';
question_Ten_btn_four.style.backgroundColor = 'white';
question_Ten_btn_five.style.backgroundColor = 'white';

check_result_Animals.style.display = 'flex';



text$animals$10$btn$1.style.display ='none';
text$animals$10$btn$2.style.display ='none';
text$animals$10$btn$3.style.display ='block';
text$animals$10$btn$4.style.display ='none';
text$animals$10$btn$5.style.display ='none';
});


let text$animals$10$btn$4 =document.getElementById('animals-question-10-text-4');
//activating question 10 button four
question_Ten_btn_four.addEventListener('click', function(){
question_Ten_btn_four.style.backgroundColor ='blue';
question_Ten_btn_one.style.backgroundColor = 'white';
question_Ten_btn_two.style.backgroundColor = 'white';
question_Ten_btn_three.style.backgroundColor = 'white';
question_Ten_btn_five.style.backgroundColor = 'white';

check_result_Animals.style.display = 'flex';


text$animals$10$btn$1.style.display ='none';
text$animals$10$btn$2.style.display ='none';
text$animals$10$btn$3.style.display ='none';
text$animals$10$btn$4.style.display ='block';
text$animals$10$btn$5.style.display ='none';
});


let text$animals$10$btn$5 =document.getElementById('animals-question-10-text-5');
//activating question 10 button five
question_Ten_btn_five.addEventListener('click', function(){
question_Ten_btn_five.style.backgroundColor ='blue';
question_Ten_btn_one.style.backgroundColor = 'white';
question_Ten_btn_three.style.backgroundColor = 'white';
question_Ten_btn_four.style.backgroundColor = 'white';
question_Ten_btn_two.style.backgroundColor = 'white';

check_result_Animals.style.display = 'flex';


text$animals$10$btn$1.style.display ='none';
text$animals$10$btn$2.style.display ='none';
text$animals$10$btn$3.style.display ='none';
text$animals$10$btn$4.style.display ='none';
text$animals$10$btn$5.style.display ='block';
});



//activating the animals check result

let check_result_Animals = document.getElementById('Check_result_animals');
let playAgain_animals = document.getElementById('playAgain_animals');

check_result_Animals.style.display = 'none';
check_result_Animals.addEventListener('click', function(){
check_result_Animals.style.backgroundColor='blue';

question_One_btn_one.style.backgroundColor ='green';
question_Two_btn_three.style.backgroundColor ='green';
question_Three_btn_five.style.backgroundColor ='green';
question_Four_btn_two.style.backgroundColor ='green';
question_Five_btn_one.style.backgroundColor ='green';
question_Six_btn_four.style.backgroundColor ='green';
question_Seven_btn_three.style.backgroundColor ='green';
question_Eight_btn_one.style.backgroundColor ='green';
question_Nine_btn_five.style.backgroundColor ='green';
question_Ten_btn_two.style.backgroundColor ='green';


let question_1_lost = document.querySelector('.firstA');
if (question_One_btn_one.style.backgroundColor==='blue') {
     question_1_lost.style.display = 'block';
    question_One_btn_one.style.backgroundColor ='red';
}else if (question_One_btn_two.style.backgroundColor==='blue') {
     question_1_lost.style.display = 'block';
     question_One_btn_two.style.backgroundColor ='red';
}else if (question_One_btn_three.style.backgroundColor==='blue') {
     question_1_lost.style.display = 'block';
    question_One_btn_three.style.backgroundColor ='red';
}else if (question_One_btn_four.style.backgroundColor==='blue') {
     question_1_lost.style.display = 'block';
     question_One_btn_four.style.backgroundColor ='red';
}else if (question_One_btn_five.style.backgroundColor==='blue') {
     question_1_lost.style.display = 'block';
     question_One_btn_five.style.backgroundColor ='red';
};


let question_2_lost = document.querySelector('.secondA');
if (question_Two_btn_one.style.backgroundColor==='blue') {
      question_2_lost.style.display = 'block';
    question_Two_btn_one.style.backgroundColor ='red';
}else if (question_Two_btn_two.style.backgroundColor==='blue') {
     question_2_lost.style.display = 'block';
     question_Two_btn_two.style.backgroundColor ='red';
}else if (question_Two_btn_three.style.backgroundColor==='blue') {
     question_2_lost.style.display = 'block';
    question_Two_btn_three.style.backgroundColor ='red';
}else if (question_Two_btn_four.style.backgroundColor==='blue') {
     question_2_lost.style.display = 'block';
     question_Two_btn_four.style.backgroundColor ='red';
}else if (question_Two_btn_five.style.backgroundColor==='blue') {
     question_2_lost.style.display = 'block';
     question_Two_btn_five.style.backgroundColor ='red';
};



let question_3_lost = document.querySelector('.thirdA');
if (question_Three_btn_one.style.backgroundColor==='blue') {
     question_3_lost.style.display = 'block';
    question_Three_btn_one.style.backgroundColor ='red';
}else if (question_Three_btn_two.style.backgroundColor==='blue') {
      question_3_lost.style.display = 'block';
     question_Three_btn_two.style.backgroundColor ='red';
}else if (question_Three_btn_three.style.backgroundColor==='blue') {
      question_3_lost.style.display = 'block';
    question_Three_btn_three.style.backgroundColor ='red';
}else if (question_Three_btn_four.style.backgroundColor==='blue') {
      question_3_lost.style.display = 'block';
     question_Three_btn_four.style.backgroundColor ='red';
}else if (question_Three_btn_five.style.backgroundColor==='blue') {
      question_3_lost.style.display = 'block';
     question_Three_btn_five.style.backgroundColor ='red';
};




let question_4_lost = document.querySelector('.fourthA');
if (question_Four_btn_one.style.backgroundColor==='blue') {
      question_4_lost.style.display = 'block';
    question_Four_btn_one.style.backgroundColor ='red';
}else if (question_Four_btn_two.style.backgroundColor==='blue') {
     question_4_lost.style.display = 'block';
     question_Four_btn_two.style.backgroundColor ='red';
}else if (question_Four_btn_three.style.backgroundColor==='blue') {
     question_4_lost.style.display = 'block';
    question_Four_btn_three.style.backgroundColor ='red';
}else if (question_Four_btn_four.style.backgroundColor==='blue') {
     question_4_lost.style.display = 'block';
     question_Four_btn_four.style.backgroundColor ='red';
}else if (question_Four_btn_five.style.backgroundColor==='blue') {
     question_4_lost.style.display = 'block';
     question_Four_btn_five.style.backgroundColor ='red';
};




let question_5_lost = document.querySelector('.fifthA');
if (question_Five_btn_one.style.backgroundColor==='blue') {
     question_5_lost.style.display = 'block';
    question_Five_btn_one.style.backgroundColor ='red';
}else if (question_Five_btn_two.style.backgroundColor==='blue') {
       question_5_lost.style.display = 'block';
     question_Five_btn_two.style.backgroundColor ='red';
}else if (question_Five_btn_three.style.backgroundColor==='blue') {
       question_5_lost.style.display = 'block';
    question_Five_btn_three.style.backgroundColor ='red';
}else if (question_Five_btn_four.style.backgroundColor==='blue') {
       question_5_lost.style.display = 'block';
     question_Five_btn_four.style.backgroundColor ='red';
}else if (question_Five_btn_five.style.backgroundColor==='blue') {
       question_5_lost.style.display = 'block';
     question_Five_btn_five.style.backgroundColor ='red';
};




let question_6_lost = document.querySelector('.sixthA');
if (question_Six_btn_one.style.backgroundColor==='blue') {
       question_6_lost.style.display = 'block';
    question_Six_btn_one.style.backgroundColor ='red';
}else if (question_Six_btn_two.style.backgroundColor==='blue') {
     question_6_lost.style.display = 'block';
     question_Six_btn_two.style.backgroundColor ='red';
}else if (question_Six_btn_three.style.backgroundColor==='blue') {
     question_6_lost.style.display = 'block';
    question_Six_btn_three.style.backgroundColor ='red';
}else if (question_Six_btn_four.style.backgroundColor==='blue') {
     question_6_lost.style.display = 'block';
     question_Six_btn_four.style.backgroundColor ='red';
}else if (question_Six_btn_five.style.backgroundColor==='blue') {
     question_6_lost.style.display = 'block';
     question_Six_btn_five.style.backgroundColor ='red';
};




let question_7_lost = document.querySelector('.seventhA');
if (question_Seven_btn_one.style.backgroundColor==='blue') {
     question_7_lost.style.display = 'block';
    question_Seven_btn_one.style.backgroundColor ='red';
}else if (question_Seven_btn_two.style.backgroundColor==='blue') {
     question_7_lost.style.display = 'block';
     question_Seven_btn_two.style.backgroundColor ='red';
}else if (question_Seven_btn_three.style.backgroundColor==='blue') {
     question_7_lost.style.display = 'block';
    question_Seven_btn_three.style.backgroundColor ='red';
}else if (question_Seven_btn_four.style.backgroundColor==='blue') {
     question_7_lost.style.display = 'block';
     question_Seven_btn_four.style.backgroundColor ='red';
}else if (question_Seven_btn_five.style.backgroundColor==='blue') {
     question_7_lost.style.display = 'block';
     question_Seven_btn_five.style.backgroundColor ='red';
};




let question_8_lost = document.querySelector('.eightA');
if (question_Eight_btn_one.style.backgroundColor==='blue') {
     question_8_lost.style.display = 'block';
    question_Eight_btn_one.style.backgroundColor ='red';
}else if (question_Eight_btn_two.style.backgroundColor==='blue') {
     question_8_lost.style.display = 'block';
     question_Eight_btn_two.style.backgroundColor ='red';
}else if (question_Eight_btn_three.style.backgroundColor==='blue') {
     question_8_lost.style.display = 'block';
    question_Eight_btn_three.style.backgroundColor ='red';
}else if (question_Eight_btn_four.style.backgroundColor==='blue') {
     question_8_lost.style.display = 'block';
     question_Eight_btn_four.style.backgroundColor ='red';
}else if (question_Eight_btn_five.style.backgroundColor==='blue') {
     question_8_lost.style.display = 'block';
     question_Eight_btn_five.style.backgroundColor ='red';
};




let question_9_lost = document.querySelector('.ninethA');
if (question_Nine_btn_one.style.backgroundColor==='blue') {
     question_9_lost.style.display = 'block';
    question_Nine_btn_one.style.backgroundColor ='red';
}else if (question_Nine_btn_two.style.backgroundColor==='blue') {
     question_9_lost.style.display = 'block';
     question_Nine_btn_two.style.backgroundColor ='red';
}else if (question_Nine_btn_three.style.backgroundColor==='blue') {
     question_9_lost.style.display = 'block';
    question_Nine_btn_three.style.backgroundColor ='red';
}else if (question_Nine_btn_four.style.backgroundColor==='blue') {
     question_9_lost.style.display = 'block';
     question_Nine_btn_four.style.backgroundColor ='red';
}else if (question_Nine_btn_four.style.backgroundColor==='blue') {
     question_9_lost.style.display = 'block';
     question_Nine_btn_four.style.backgroundColor ='red';
};





let question_10_lost = document.querySelector('.tenthA');
if (question_Ten_btn_one.style.backgroundColor==='blue') {
     question_10_lost.style.display = 'block';
    question_Ten_btn_one.style.backgroundColor ='red';
}else if (question_Ten_btn_two.style.backgroundColor==='blue') {
      question_10_lost.style.display = 'block';
     question_Ten_btn_two.style.backgroundColor ='red';
}else if (question_Ten_btn_three.style.backgroundColor==='blue') {
      question_10_lost.style.display = 'block';
    question_Ten_btn_three.style.backgroundColor ='red';
}else if (question_Ten_btn_four.style.backgroundColor==='blue') {
      question_10_lost.style.display = 'block';
     question_Ten_btn_four.style.backgroundColor ='red';
}else if (question_Ten_btn_five.style.backgroundColor==='blue') {
      question_10_lost.style.display = 'block';
    question_Ten_btn_five.style.backgroundColor ='red';
};

//Removing the 'you lost comments'
playAgain_animals.addEventListener('click', function(){

myName.value="";
section1.style.display="none";

question_1_lost.style.display = 'none';
question_2_lost.style.display = 'none';
question_3_lost.style.display = 'none';
question_4_lost.style.display = 'none';
question_5_lost.style.display = 'none';
question_6_lost.style.display = 'none';
question_7_lost.style.display = 'none';
question_8_lost.style.display = 'none';
question_9_lost.style.display = 'none';
question_10_lost.style.display = 'none';
});


playAgain_animals.style.display = 'flex';






question_One_btn_one.style.pointerEvents ='none';
question_One_btn_two.style.pointerEvents = 'none';
question_One_btn_three.style.pointerEvents = 'none';
question_One_btn_four.style.pointerEvents = 'none';
question_One_btn_five.style.pointerEvents = 'none';





question_Two_btn_one.style.pointerEvents ='none';
question_Two_btn_two.style.pointerEvents = 'none';
question_Two_btn_three.style.pointerEvents = 'none';
question_Two_btn_four.style.pointerEvents = 'none';
question_Two_btn_five.style.pointerEvents = 'none';



question_Three_btn_one.style.pointerEvents ='none';
question_Three_btn_two.style.pointerEvents = 'none';
question_Three_btn_three.style.pointerEvents = 'none';
question_Three_btn_four.style.pointerEvents = 'none';
question_Three_btn_five.style.pointerEvents = 'none';





question_Four_btn_five.style.pointerEvents ='none';
question_Four_btn_one.style.pointerEvents = 'none';
question_Four_btn_three.style.pointerEvents = 'none';
question_Four_btn_four.style.pointerEvents = 'none';
question_Four_btn_two.style.pointerEvents = 'none';


question_Five_btn_one.style.pointerEvents ='none';
question_Five_btn_two.style.pointerEvents = 'none';
question_Five_btn_three.style.pointerEvents = 'none';
question_Five_btn_four.style.pointerEvents = 'none';
question_Five_btn_five.style.pointerEvents = 'none';



question_Six_btn_one.style.pointerEvents ='none';
question_Six_btn_two.style.pointerEvents = 'none';
question_Six_btn_three.style.pointerEvents = 'none';
question_Six_btn_four.style.pointerEvents = 'none';
question_Six_btn_five.style.pointerEvents = 'none';



question_Seven_btn_one.style.pointerEvents ='none';
question_Seven_btn_two.style.pointerEvents = 'none';
question_Seven_btn_three.style.pointerEvents = 'none';
question_Seven_btn_four.style.pointerEvents = 'none';
question_Seven_btn_five.style.pointerEvents = 'none';



question_Eight_btn_one.style.pointerEvents ='none';
question_Eight_btn_two.style.pointerEvents = 'none';
question_Eight_btn_three.style.pointerEvents = 'none';
question_Eight_btn_four.style.pointerEvents = 'none';
question_Eight_btn_five.style.pointerEvents = 'none';



question_Nine_btn_one.style.pointerEvents ='none';
question_Nine_btn_two.style.pointerEvents = 'none';
question_Nine_btn_three.style.pointerEvents = 'none';
question_Nine_btn_four.style.pointerEvents = 'none';
question_Nine_btn_five.style.pointerEvents = 'none';



question_Ten_btn_one.style.pointerEvents ='none';
question_Ten_btn_two.style.pointerEvents = 'none';
question_Ten_btn_three.style.pointerEvents = 'none';
question_Ten_btn_four.style.pointerEvents = 'none';
question_Ten_btn_five.style.pointerEvents = 'none';


});


playAgain_animals.addEventListener('click', function(){
playAgain_animals.style.backgroundColor = 'blue';

firstPart.style.display ='block';
score.style.display ='none';

// animalsButton.style.backgroundColor = 'transparent';
animalsButton.style.background ='none';



tenQuestions.style.background = 'none';
    fiveQuestions.style.background='none';
    sevenQuestions.style.background='none';



question_One_btn_one.style.backgroundColor ='white';
question_One_btn_two.style.backgroundColor = 'white';
question_One_btn_three.style.backgroundColor = 'white';
question_One_btn_four.style.backgroundColor = 'white';
question_One_btn_five.style.backgroundColor = 'white';





question_Two_btn_one.style.backgroundColor ='white';
question_Two_btn_two.style.backgroundColor = 'white';
question_Two_btn_three.style.backgroundColor = 'white';
question_Two_btn_four.style.backgroundColor = 'white';
question_Two_btn_five.style.backgroundColor = 'white';



question_Three_btn_one.style.backgroundColor ='white';
question_Three_btn_two.style.backgroundColor = 'white';
question_Three_btn_three.style.backgroundColor = 'white';
question_Three_btn_four.style.backgroundColor = 'white';
question_Three_btn_five.style.backgroundColor = 'white';





question_Four_btn_five.style.backgroundColor ='white';
question_Four_btn_one.style.backgroundColor = 'white';
question_Four_btn_three.style.backgroundColor = 'white';
question_Four_btn_four.style.backgroundColor = 'white';
question_Four_btn_two.style.backgroundColor = 'white';


question_Five_btn_one.style.backgroundColor ='white';
question_Five_btn_two.style.backgroundColor = 'white';
question_Five_btn_three.style.backgroundColor = 'white';
question_Five_btn_four.style.backgroundColor = 'white';
question_Five_btn_five.style.backgroundColor = 'white';



question_Six_btn_one.style.backgroundColor ='white';
question_Six_btn_two.style.backgroundColor = 'white';
question_Six_btn_three.style.backgroundColor = 'white';
question_Six_btn_four.style.backgroundColor = 'white';
question_Six_btn_five.style.backgroundColor = 'white';



question_Seven_btn_one.style.backgroundColor ='white';
question_Seven_btn_two.style.backgroundColor = 'white';
question_Seven_btn_three.style.backgroundColor = 'white';
question_Seven_btn_four.style.backgroundColor = 'white';
question_Seven_btn_five.style.backgroundColor = 'white';



question_Eight_btn_one.style.backgroundColor ='white';
question_Eight_btn_two.style.backgroundColor = 'white';
question_Eight_btn_three.style.backgroundColor = 'white';
question_Eight_btn_four.style.backgroundColor = 'white';
question_Eight_btn_five.style.backgroundColor = 'white';



question_Nine_btn_one.style.backgroundColor ='white';
question_Nine_btn_two.style.backgroundColor = 'white';
question_Nine_btn_three.style.backgroundColor = 'white';
question_Nine_btn_four.style.backgroundColor = 'white';
question_Nine_btn_five.style.backgroundColor = 'white';



question_Ten_btn_one.style.backgroundColor ='white';
question_Ten_btn_two.style.backgroundColor = 'white';
question_Ten_btn_three.style.backgroundColor = 'white';
question_Ten_btn_four.style.backgroundColor = 'white';
question_Ten_btn_five.style.backgroundColor = 'white';


//clearing the text
text$animals$1$btn$1.style.display='none';
text$animals$1$btn$2.style.display ='none';
text$animals$1$btn$3.style.display ='none';
text$animals$1$btn$4.style.display = 'none';
text$animals$1$btn$5.style.display = 'none';



text$animals$2$btn$1.style.display ='none';
text$animals$2$btn$2.style.display ='none';
text$animals$2$btn$3.style.display ='none';
text$animals$2$btn$4.style.display ='none';
text$animals$2$btn$5.style.display ='none';

text$animals$3$btn$1.style.display ='none';
text$animals$3$btn$2.style.display ='none';
text$animals$3$btn$3.style.display ='none';
text$animals$3$btn$4.style.display ='none';
text$animals$3$btn$5.style.display ='none';

text$animals$4$btn$1.style.display ='none';
text$animals$4$btn$2.style.display ='none';
text$animals$4$btn$3.style.display ='none';
text$animals$4$btn$4.style.display ='none';
text$animals$4$btn$5.style.display ='none';

text$animals$5$btn$1.style.display ='none';
text$animals$5$btn$2.style.display ='none';
text$animals$5$btn$3.style.display ='none';
text$animals$5$btn$4.style.display ='none';
text$animals$5$btn$5.style.display ='none';

text$animals$6$btn$1.style.display ='none';
text$animals$6$btn$2.style.display ='none';
text$animals$6$btn$3.style.display ='none';
text$animals$6$btn$4.style.display ='none';
text$animals$6$btn$5.style.display ='none';

text$animals$7$btn$1.style.display ='none';
text$animals$7$btn$2.style.display ='none';
text$animals$7$btn$3.style.display ='none';
text$animals$7$btn$4.style.display ='none';
text$animals$7$btn$5.style.display ='none';

text$animals$8$btn$1.style.display ='none';
text$animals$8$btn$2.style.display ='none';
text$animals$8$btn$3.style.display ='none';
text$animals$8$btn$4.style.display ='none';
text$animals$8$btn$5.style.display ='none';

text$animals$9$btn$1.style.display ='none';
text$animals$9$btn$2.style.display ='none';
text$animals$9$btn$3.style.display ='none';
text$animals$9$btn$4.style.display ='none';
text$animals$9$btn$5.style.display ='none';

text$animals$10$btn$1.style.display ='none';
text$animals$10$btn$2.style.display ='none';
text$animals$10$btn$3.style.display ='none';
text$animals$10$btn$4.style.display ='none';
text$animals$10$btn$5.style.display ='none';


check_result_Animals.style.display = 'none';
playAgain_animals.style.display = 'none';
startBtn.style.display = 'none';
});











//places section
//places  question

//storing in variables for question 1ne

let places_One_btn_one = document.getElementById('places_question_one_btn_one');
let places_One_btn_two = document.getElementById('places_question_one_btn_two');
let places_One_btn_three = document.getElementById('places_question_one_btn_three');
let places_One_btn_four =document.getElementById('places_question_one_btn_four');
let places_One_btn_five = document.getElementById('places_question_one_btn_five');

let text$places$1$btn$1 = document.getElementById('places-question-1-text-1');
//activating button one
places_One_btn_one.addEventListener('click', function(){
places_One_btn_one.style.backgroundColor ='blue';
places_One_btn_two.style.backgroundColor = 'white';
places_One_btn_three.style.backgroundColor = 'white';
places_One_btn_four.style.backgroundColor = 'white';
places_One_btn_five.style.backgroundColor = 'white';

Check_result_Places.style.display ='flex';


//activating text
text$places$1$btn$1.style.display = 'block';
text$places$1$btn$2.style.display = 'none';
text$places$1$btn$3.style.display = 'none';
text$places$1$btn$4.style.display = 'none';
text$places$1$btn$5.style.display = 'none';
});


let text$places$1$btn$2 = document.getElementById('places-question-1-text-2');
//activating button two
 places_One_btn_two.addEventListener('click', function(){
 places_One_btn_two.style.backgroundColor ='blue';
 places_One_btn_one.style.backgroundColor ='white';
 places_One_btn_three.style.backgroundColor ='white';
 places_One_btn_four.style.backgroundColor ='white';
 places_One_btn_five.style.backgroundColor ='white';

 Check_result_Places.style.display ='flex';


//activating text
text$places$1$btn$1.style.display = 'none';
text$places$1$btn$2.style.display = 'block';
text$places$1$btn$3.style.display = 'none';
text$places$1$btn$4.style.display = 'none';
text$places$1$btn$5.style.display = 'none';
});


let text$places$1$btn$3 = document.getElementById('places-question-1-text-3');
//activating button three
 places_One_btn_three.addEventListener('click', function(){
 places_One_btn_three.style.backgroundColor ='blue';
 places_One_btn_one.style.backgroundColor ='white';
 places_One_btn_two.style.backgroundColor ='white';
 places_One_btn_four.style.backgroundColor ='white';
 places_One_btn_five.style.backgroundColor ='white';

 Check_result_Places.style.display ='flex';

 
//activating text
text$places$1$btn$1.style.display = 'none';
text$places$1$btn$2.style.display = 'none';
text$places$1$btn$3.style.display = 'block';
text$places$1$btn$4.style.display = 'none';
text$places$1$btn$5.style.display = 'none';
});



let text$places$1$btn$4 = document.getElementById('places-question-1-text-4');
//activating button four
 places_One_btn_four.addEventListener('click', function(){
 places_One_btn_four.style.backgroundColor ='blue';
 places_One_btn_one.style.backgroundColor ='white';
 places_One_btn_three.style.backgroundColor ='white';
 places_One_btn_two.style.backgroundColor ='white';
 places_One_btn_five.style.backgroundColor ='white';

 Check_result_Places.style.display ='flex';

 
//activating text
text$places$1$btn$1.style.display = 'none';
text$places$1$btn$2.style.display = 'none';
text$places$1$btn$3.style.display = 'none';
text$places$1$btn$4.style.display = 'block';
text$places$1$btn$5.style.display = 'none';
});


let text$places$1$btn$5 = document.getElementById('places-question-1-text-5');
//activating button five
 places_One_btn_five.addEventListener('click', function(){
 places_One_btn_five.style.backgroundColor ='blue';
 places_One_btn_one.style.backgroundColor ='white';
 places_One_btn_two.style.backgroundColor ='white';
 places_One_btn_four.style.backgroundColor ='white';
 places_One_btn_three.style.backgroundColor ='white';

 Check_result_Places.style.display ='flex';

 
//activating text
text$places$1$btn$1.style.display = 'none';
text$places$1$btn$2.style.display = 'none';
text$places$1$btn$3.style.display = 'none';
text$places$1$btn$4.style.display = 'none';
text$places$1$btn$5.style.display = 'block';
});




// //storing in variables for question two

let places_Two_btn_one = document.getElementById('places_question_two_btn_one');
let places_Two_btn_two = document.getElementById('places_question_two_btn_two');
let places_Two_btn_three = document.getElementById('places_question_two_btn_three');
let places_Two_btn_four =document.getElementById('places_question_two_btn_four');
let places_Two_btn_five = document.getElementById('places_question_two_btn_five');


let text$places$2$btn$1 = document.getElementById('places-question-2-text-1');
//activating question 2 button one 
places_Two_btn_one.addEventListener('click', function(){
places_Two_btn_one.style.backgroundColor ='blue';
places_Two_btn_two.style.backgroundColor = 'white';
places_Two_btn_three.style.backgroundColor = 'white';
places_Two_btn_four.style.backgroundColor = 'white';
places_Two_btn_five.style.backgroundColor = 'white';

Check_result_Places.style.display ='flex';


//activating text
text$places$2$btn$1.style.display = 'block';
text$places$2$btn$2.style.display = 'none';
text$places$2$btn$3.style.display = 'none';
text$places$2$btn$4.style.display = 'none';
text$places$2$btn$5.style.display = 'none';
});


let text$places$2$btn$2 = document.getElementById('places-question-2-text-2');
//activating question 2 button two
places_Two_btn_two.addEventListener('click', function(){
places_Two_btn_two.style.backgroundColor ='blue';
places_Two_btn_one.style.backgroundColor = 'white';
places_Two_btn_three.style.backgroundColor = 'white';
places_Two_btn_four.style.backgroundColor = 'white';
places_Two_btn_five.style.backgroundColor = 'white';

Check_result_Places.style.display ='flex';


//activating text
text$places$2$btn$1.style.display = 'none';
text$places$2$btn$2.style.display = 'block';
text$places$2$btn$3.style.display = 'none';
text$places$2$btn$4.style.display = 'none';
text$places$2$btn$5.style.display = 'none';
});


let text$places$2$btn$3 = document.getElementById('places-question-2-text-3');
//activating question 2 button three
places_Two_btn_three.addEventListener('click', function(){
places_Two_btn_three.style.backgroundColor ='blue';
places_Two_btn_one.style.backgroundColor = 'white';
places_Two_btn_two.style.backgroundColor = 'white';
places_Two_btn_four.style.backgroundColor = 'white';
places_Two_btn_five.style.backgroundColor = 'white';

Check_result_Places.style.display ='flex';


//activating text
text$places$2$btn$1.style.display = 'none';
text$places$2$btn$2.style.display = 'none';
text$places$2$btn$3.style.display = 'block';
text$places$2$btn$4.style.display = 'none';
text$places$2$btn$5.style.display = 'none';
});


let text$places$2$btn$4 = document.getElementById('places-question-2-text-4');
//activating question 2 button four
places_Two_btn_four.addEventListener('click', function(){
places_Two_btn_four.style.backgroundColor ='blue';
places_Two_btn_one.style.backgroundColor = 'white';
places_Two_btn_two.style.backgroundColor = 'white';
places_Two_btn_three.style.backgroundColor = 'white';
places_Two_btn_five.style.backgroundColor = 'white';

Check_result_Places.style.display ='flex';


//activating text
text$places$2$btn$1.style.display = 'none';
text$places$2$btn$2.style.display = 'none';
text$places$2$btn$3.style.display = 'none';
text$places$2$btn$4.style.display = 'block';
text$places$2$btn$5.style.display = 'none';
});


let text$places$2$btn$5 = document.getElementById('places-question-2-text-5');
//activating question 2 button five
places_Two_btn_five.addEventListener('click', function(){
places_Two_btn_five.style.backgroundColor ='blue';
places_Two_btn_one.style.backgroundColor = 'white';
places_Two_btn_three.style.backgroundColor = 'white';
places_Two_btn_four.style.backgroundColor = 'white';
places_Two_btn_two.style.backgroundColor = 'white';

Check_result_Places.style.display ='flex';


//activating text
text$places$2$btn$1.style.display = 'none';
text$places$2$btn$2.style.display = 'none';
text$places$2$btn$3.style.display = 'none';
text$places$2$btn$4.style.display = 'none';
text$places$2$btn$5.style.display = 'block';
});







//storing question three buttons in variables
let places_Three_btn_one = document.getElementById('places_question_three_btn_one');
let places_Three_btn_two = document.getElementById('places_question_three_btn_two');
let places_Three_btn_three = document.getElementById('places_question_three_btn_three');
let places_Three_btn_four =document.getElementById('places_question_three_btn_four');
let places_Three_btn_five = document.getElementById('places_question_three_btn_five');


let text$places$3$btn$1 = document.getElementById('places-question-3-text-1');
//activating question 3 button one 
places_Three_btn_one.addEventListener('click', function(){
places_Three_btn_one.style.backgroundColor ='blue';
places_Three_btn_two.style.backgroundColor = 'white';
places_Three_btn_three.style.backgroundColor = 'white';
places_Three_btn_four.style.backgroundColor = 'white';
places_Three_btn_five.style.backgroundColor = 'white';

Check_result_Places.style.display ='flex';


//activating text
text$places$3$btn$1.style.display = 'block';
text$places$3$btn$2.style.display = 'none';
text$places$3$btn$3.style.display = 'none';
text$places$3$btn$4.style.display = 'none';
text$places$3$btn$5.style.display = 'none';
});


let text$places$3$btn$2 = document.getElementById('places-question-3-text-2');
//activating question 3 button two
places_Three_btn_two.addEventListener('click', function(){
places_Three_btn_two.style.backgroundColor ='blue';
places_Three_btn_one.style.backgroundColor = 'white';
places_Three_btn_three.style.backgroundColor = 'white';
places_Three_btn_four.style.backgroundColor = 'white';
places_Three_btn_five.style.backgroundColor = 'white';

Check_result_Places.style.display ='flex';


//activating text
text$places$3$btn$1.style.display = 'none';
text$places$3$btn$2.style.display = 'block';
text$places$3$btn$3.style.display = 'none';
text$places$3$btn$4.style.display = 'none';
text$places$3$btn$5.style.display = 'none';
});


let text$places$3$btn$3 = document.getElementById('places-question-3-text-3');
//activating question 3 button three
places_Three_btn_three.addEventListener('click', function(){
places_Three_btn_three.style.backgroundColor ='blue';
places_Three_btn_one.style.backgroundColor = 'white';
places_Three_btn_two.style.backgroundColor = 'white';
places_Three_btn_four.style.backgroundColor = 'white';
places_Three_btn_five.style.backgroundColor = 'white';

Check_result_Places.style.display ='flex';


//activating text
text$places$3$btn$1.style.display = 'none';
text$places$3$btn$2.style.display = 'none';
text$places$3$btn$3.style.display = 'block';
text$places$3$btn$4.style.display = 'none';
text$places$3$btn$5.style.display = 'none';
});


let text$places$3$btn$4 = document.getElementById('places-question-3-text-4');
//activating question 3 button four
places_Three_btn_four.addEventListener('click', function(){
places_Three_btn_four.style.backgroundColor ='blue';
places_Three_btn_one.style.backgroundColor = 'white';
places_Three_btn_two.style.backgroundColor = 'white';
places_Three_btn_three.style.backgroundColor = 'white';
places_Three_btn_five.style.backgroundColor = 'white';

Check_result_Places.style.display ='flex';


//activating text
text$places$3$btn$1.style.display = 'none';
text$places$3$btn$2.style.display = 'none';
text$places$3$btn$3.style.display = 'none';
text$places$3$btn$4.style.display = 'block';
text$places$3$btn$5.style.display = 'none';
});


let text$places$3$btn$5 = document.getElementById('places-question-3-text-5');
//activating question 3 button five
places_Three_btn_five.addEventListener('click', function(){
places_Three_btn_five.style.backgroundColor ='blue';
places_Three_btn_one.style.backgroundColor = 'white';
places_Three_btn_three.style.backgroundColor = 'white';
places_Three_btn_four.style.backgroundColor = 'white';
places_Three_btn_two.style.backgroundColor = 'white';

Check_result_Places.style.display ='flex';


//activating text
text$places$3$btn$1.style.display = 'none';
text$places$3$btn$2.style.display = 'none';
text$places$3$btn$3.style.display = 'none';
text$places$3$btn$4.style.display = 'none';
text$places$3$btn$5.style.display = 'block';
});






//storing question four buttons in variables
let places_Four_btn_one = document.getElementById('places_question_four_btn_one');
let places_Four_btn_two = document.getElementById('places_question_four_btn_two');
let places_Four_btn_three = document.getElementById('places_question_four_btn_three');
let places_Four_btn_four =document.getElementById('places_question_four_btn_four');
let places_Four_btn_five = document.getElementById('places_question_four_btn_five');


let text$places$4$btn$1 = document.getElementById('places-question-4-text-1');
//activating question 4 button one 
places_Four_btn_one.addEventListener('click', function(){
places_Four_btn_one.style.backgroundColor ='blue';
places_Four_btn_two.style.backgroundColor = 'white';
places_Four_btn_three.style.backgroundColor = 'white';
places_Four_btn_four.style.backgroundColor = 'white';
places_Four_btn_five.style.backgroundColor = 'white';

Check_result_Places.style.display ='flex';



//activating text
text$places$4$btn$1.style.display = 'block';
text$places$4$btn$2.style.display = 'none';
text$places$4$btn$3.style.display = 'none';
text$places$4$btn$4.style.display = 'none';
text$places$4$btn$5.style.display = 'none';
});


let text$places$4$btn$2 = document.getElementById('places-question-4-text-2');
//activating question 4 button two
places_Four_btn_two.addEventListener('click', function(){
places_Four_btn_two.style.backgroundColor ='blue';
places_Four_btn_one.style.backgroundColor = 'white';
places_Four_btn_three.style.backgroundColor = 'white';
places_Four_btn_four.style.backgroundColor = 'white';
places_Four_btn_five.style.backgroundColor = 'white';

Check_result_Places.style.display ='flex';


//activating text
text$places$4$btn$1.style.display = 'none';
text$places$4$btn$2.style.display = 'block';
text$places$4$btn$3.style.display = 'none';
text$places$4$btn$4.style.display = 'none';
text$places$4$btn$5.style.display = 'none';
});


let text$places$4$btn$3 = document.getElementById('places-question-4-text-3');
//activating question 4 button three
places_Four_btn_three.addEventListener('click', function(){
places_Four_btn_three.style.backgroundColor ='blue';
places_Four_btn_one.style.backgroundColor = 'white';
places_Four_btn_two.style.backgroundColor = 'white';
places_Four_btn_four.style.backgroundColor = 'white';
places_Four_btn_five.style.backgroundColor = 'white';

Check_result_Places.style.display ='flex';

//activating text
text$places$4$btn$1.style.display = 'none';
text$places$4$btn$2.style.display = 'none';
text$places$4$btn$3.style.display = 'block';
text$places$4$btn$4.style.display = 'none';
text$places$4$btn$5.style.display = 'none';
});


let text$places$4$btn$4 = document.getElementById('places-question-4-text-4');
//activating question 4 button four
places_Four_btn_four.addEventListener('click', function(){
places_Four_btn_four.style.backgroundColor ='blue';
places_Four_btn_one.style.backgroundColor = 'white';
places_Four_btn_two.style.backgroundColor = 'white';
places_Four_btn_three.style.backgroundColor = 'white';
places_Four_btn_five.style.backgroundColor = 'white';

Check_result_Places.style.display ='flex';


//activating text
text$places$4$btn$1.style.display = 'none';
text$places$4$btn$2.style.display = 'none';
text$places$4$btn$3.style.display = 'none';
text$places$4$btn$4.style.display = 'block';
text$places$4$btn$5.style.display = 'none';
});



let text$places$4$btn$5 = document.getElementById('places-question-4-text-5');
//activating question 4 button five
places_Four_btn_five.addEventListener('click', function(){
places_Four_btn_five.style.backgroundColor ='blue';
places_Four_btn_one.style.backgroundColor = 'white';
places_Four_btn_three.style.backgroundColor = 'white';
places_Four_btn_four.style.backgroundColor = 'white';
places_Four_btn_two.style.backgroundColor = 'white';

Check_result_Places.style.display ='flex';


//activating text
text$places$4$btn$1.style.display = 'none';
text$places$4$btn$2.style.display = 'none';
text$places$4$btn$3.style.display = 'none';
text$places$4$btn$4.style.display = 'none';
text$places$4$btn$5.style.display = 'block';
});







//storing question five buttons in variables
let places_Five_btn_one = document.getElementById('places_question_five_btn_one');
let places_Five_btn_two = document.getElementById('places_question_five_btn_two');
let places_Five_btn_three = document.getElementById('places_question_five_btn_three');
let places_Five_btn_four =document.getElementById('places_question_five_btn_four');
let places_Five_btn_five = document.getElementById('places_question_five_btn_five');


let text$places$5$btn$1 = document.getElementById('places-question-5-text-1');
//activating question 5 button one 
places_Five_btn_one.addEventListener('click', function(){
places_Five_btn_one.style.backgroundColor ='blue';
places_Five_btn_two.style.backgroundColor = 'white';
places_Five_btn_three.style.backgroundColor = 'white';
places_Five_btn_four.style.backgroundColor = 'white';
places_Five_btn_five.style.backgroundColor = 'white';

Check_result_Places.style.display ='flex';


//activating text
text$places$5$btn$1.style.display = 'block';
text$places$5$btn$2.style.display = 'none';
text$places$5$btn$3.style.display = 'none';
text$places$5$btn$4.style.display = 'none';
text$places$5$btn$5.style.display = 'none';
});


let text$places$5$btn$2 = document.getElementById('places-question-5-text-2');
//activating question 5 button two
places_Five_btn_two.addEventListener('click', function(){
places_Five_btn_two.style.backgroundColor ='blue';
places_Five_btn_one.style.backgroundColor = 'white';
places_Five_btn_three.style.backgroundColor = 'white';
places_Five_btn_four.style.backgroundColor = 'white';
places_Five_btn_five.style.backgroundColor = 'white';

Check_result_Places.style.display ='flex';

//activating text
text$places$5$btn$1.style.display = 'none';
text$places$5$btn$2.style.display = 'block';
text$places$5$btn$3.style.display = 'none';
text$places$5$btn$4.style.display = 'none';
text$places$5$btn$5.style.display = 'none';
});


let text$places$5$btn$3 = document.getElementById('places-question-5-text-3');
//activating question 5 button three
places_Five_btn_three.addEventListener('click', function(){
places_Five_btn_three.style.backgroundColor ='blue';
places_Five_btn_one.style.backgroundColor = 'white';
places_Five_btn_two.style.backgroundColor = 'white';
places_Five_btn_four.style.backgroundColor = 'white';
places_Five_btn_five.style.backgroundColor = 'white';

Check_result_Places.style.display ='flex';

//activating text
text$places$5$btn$1.style.display = 'none';
text$places$5$btn$2.style.display = 'none';
text$places$5$btn$3.style.display = 'block';
text$places$5$btn$4.style.display = 'none';
text$places$5$btn$5.style.display = 'none';
});


let text$places$5$btn$4 = document.getElementById('places-question-5-text-4');
//activating question 5 button four
places_Five_btn_four.addEventListener('click', function(){
places_Five_btn_four.style.backgroundColor ='blue';
places_Five_btn_one.style.backgroundColor = 'white';
places_Five_btn_two.style.backgroundColor = 'white';
places_Five_btn_three.style.backgroundColor = 'white';
places_Five_btn_five.style.backgroundColor = 'white';

Check_result_Places.style.display ='flex';

//activating text
text$places$5$btn$1.style.display = 'none';
text$places$5$btn$2.style.display = 'none';
text$places$5$btn$3.style.display = 'none';
text$places$5$btn$4.style.display = 'block';
text$places$5$btn$5.style.display = 'none';
});


let text$places$5$btn$5 = document.getElementById('places-question-5-text-5');
//activating question 5 button five
places_Five_btn_five.addEventListener('click', function(){
places_Five_btn_five.style.backgroundColor ='blue';
places_Five_btn_one.style.backgroundColor = 'white';
places_Five_btn_three.style.backgroundColor = 'white';
places_Five_btn_four.style.backgroundColor = 'white';
places_Five_btn_two.style.backgroundColor = 'white';

Check_result_Places.style.display ='flex';

//activating text
text$places$5$btn$1.style.display = 'none';
text$places$5$btn$2.style.display = 'none';
text$places$5$btn$3.style.display = 'none';
text$places$5$btn$4.style.display = 'none';
text$places$5$btn$5.style.display = 'block';
});





// storing question six buttons in variables
let places_Six_btn_one = document.getElementById('places_question_six_btn_one');
let places_Six_btn_two = document.getElementById('places_question_six_btn_two');
let places_Six_btn_three = document.getElementById('places_question_six_btn_three');
let places_Six_btn_four =document.getElementById('places_question_six_btn_four');
let places_Six_btn_five = document.getElementById('places_question_six_btn_five');


let text$places$6$btn$1 = document.getElementById('places-question-6-text-1');
// //activating question 6 button one 
places_Six_btn_one.addEventListener('click', function(){
places_Six_btn_one.style.backgroundColor ='blue';
places_Six_btn_two.style.backgroundColor = 'white';
places_Six_btn_three.style.backgroundColor = 'white';
places_Six_btn_four.style.backgroundColor = 'white';
places_Six_btn_five.style.backgroundColor = 'white';

Check_result_Places.style.display ='flex';


//activating text
text$places$6$btn$1.style.display = 'block';
text$places$6$btn$2.style.display = 'none';
text$places$6$btn$3.style.display = 'none';
text$places$6$btn$4.style.display = 'none';
text$places$6$btn$5.style.display = 'none';
});


let text$places$6$btn$2 = document.getElementById('places-question-6-text-2');
// //activating question 6 button two
places_Six_btn_two.addEventListener('click', function(){
places_Six_btn_two.style.backgroundColor ='blue';
places_Six_btn_one.style.backgroundColor = 'white';
places_Six_btn_three.style.backgroundColor = 'white';
places_Six_btn_four.style.backgroundColor = 'white';
places_Six_btn_five.style.backgroundColor = 'white';

Check_result_Places.style.display ='flex';


//activating text
text$places$6$btn$1.style.display = 'none';
text$places$6$btn$2.style.display = 'block';
text$places$6$btn$3.style.display = 'none';
text$places$6$btn$4.style.display = 'none';
text$places$6$btn$5.style.display = 'none';
});


let text$places$6$btn$3 = document.getElementById('places-question-6-text-3');
// //activating question 6 button three
places_Six_btn_three.addEventListener('click', function(){
places_Six_btn_three.style.backgroundColor ='blue';
places_Six_btn_one.style.backgroundColor = 'white';
places_Six_btn_two.style.backgroundColor = 'white';
places_Six_btn_four.style.backgroundColor = 'white';
places_Six_btn_five.style.backgroundColor = 'white';

Check_result_Places.style.display ='flex';


//activating text
text$places$6$btn$1.style.display = 'none';
text$places$6$btn$2.style.display = 'none';
text$places$6$btn$3.style.display = 'block';
text$places$6$btn$4.style.display = 'none';
text$places$6$btn$5.style.display = 'none';
});


let text$places$6$btn$4 = document.getElementById('places-question-6-text-4');
// //activating question 6 button four
places_Six_btn_four.addEventListener('click', function(){
places_Six_btn_four.style.backgroundColor ='blue';
places_Six_btn_one.style.backgroundColor = 'white';
places_Six_btn_two.style.backgroundColor = 'white';
places_Six_btn_three.style.backgroundColor = 'white';
places_Six_btn_five.style.backgroundColor = 'white';

Check_result_Places.style.display ='flex';


//activating text
text$places$6$btn$1.style.display = 'none';
text$places$6$btn$2.style.display = 'none';
text$places$6$btn$3.style.display = 'none';
text$places$6$btn$4.style.display = 'block';
text$places$6$btn$5.style.display = 'none';
});

let text$places$6$btn$5 = document.getElementById('places-question-6-text-5');
// //activating question 6 button five
places_Six_btn_five.addEventListener('click', function(){
places_Six_btn_five.style.backgroundColor ='blue';
places_Six_btn_one.style.backgroundColor = 'white';
places_Six_btn_three.style.backgroundColor = 'white';
places_Six_btn_four.style.backgroundColor = 'white';
places_Six_btn_two.style.backgroundColor = 'white';

Check_result_Places.style.display ='flex';


//activating text
text$places$6$btn$1.style.display = 'none';
text$places$6$btn$2.style.display = 'none';
text$places$6$btn$3.style.display = 'none';
text$places$6$btn$4.style.display = 'none';
text$places$6$btn$5.style.display = 'block';
});





// //storing question seven buttons in variables
let places_Seven_btn_one = document.getElementById('places_question_seven_btn_one');
let places_Seven_btn_two = document.getElementById('places_question_seven_btn_two');
let places_Seven_btn_three = document.getElementById('places_question_seven_btn_three');
let places_Seven_btn_four =document.getElementById('places_question_seven_btn_four');
let places_Seven_btn_five = document.getElementById('places_question_seven_btn_five');

let text$places$7$btn$1 = document.getElementById('places-question-7-text-1');
// //activating question 7 button one 
places_Seven_btn_one.addEventListener('click', function(){
places_Seven_btn_one.style.backgroundColor ='blue';
places_Seven_btn_two.style.backgroundColor = 'white';
places_Seven_btn_three.style.backgroundColor = 'white';
places_Seven_btn_four.style.backgroundColor = 'white';
places_Seven_btn_five.style.backgroundColor = 'white';

Check_result_Places.style.display ='flex';


//activating text
text$places$7$btn$1.style.display = 'block';
text$places$7$btn$2.style.display = 'none';
text$places$7$btn$3.style.display = 'none';
text$places$7$btn$4.style.display = 'none';
text$places$7$btn$5.style.display = 'none';
});


let text$places$7$btn$2 = document.getElementById('places-question-7-text-2');
// //activating question 7 button two
places_Seven_btn_two.addEventListener('click', function(){
places_Seven_btn_two.style.backgroundColor ='blue';
places_Seven_btn_one.style.backgroundColor = 'white';
places_Seven_btn_three.style.backgroundColor = 'white';
places_Seven_btn_four.style.backgroundColor = 'white';
places_Seven_btn_five.style.backgroundColor = 'white';

Check_result_Places.style.display ='flex';

//activating text
text$places$7$btn$1.style.display = 'none';
text$places$7$btn$2.style.display = 'block';
text$places$7$btn$3.style.display = 'none';
text$places$7$btn$4.style.display = 'none';
text$places$7$btn$5.style.display = 'none';
});


let text$places$7$btn$3 = document.getElementById('places-question-7-text-3');
// //activating question 7 button three
places_Seven_btn_three.addEventListener('click', function(){
places_Seven_btn_three.style.backgroundColor ='blue';
places_Seven_btn_one.style.backgroundColor = 'white';
places_Seven_btn_two.style.backgroundColor = 'white';
places_Seven_btn_four.style.backgroundColor = 'white';
places_Seven_btn_five.style.backgroundColor = 'white';

Check_result_Places.style.display ='flex';

//activating text
text$places$7$btn$1.style.display = 'none';
text$places$7$btn$2.style.display = 'none';
text$places$7$btn$3.style.display = 'block';
text$places$7$btn$4.style.display = 'none';
text$places$7$btn$5.style.display = 'none';
});


let text$places$7$btn$4 = document.getElementById('places-question-7-text-4');
// //activating question 7 button four
places_Seven_btn_four.addEventListener('click', function(){
places_Seven_btn_four.style.backgroundColor ='blue';
places_Seven_btn_one.style.backgroundColor = 'white';
places_Seven_btn_two.style.backgroundColor = 'white';
places_Seven_btn_three.style.backgroundColor = 'white';
places_Seven_btn_five.style.backgroundColor = 'white';

Check_result_Places.style.display ='flex';

//activating text
text$places$7$btn$1.style.display = 'none';
text$places$7$btn$2.style.display = 'none';
text$places$7$btn$3.style.display = 'none';
text$places$7$btn$4.style.display = 'block';
text$places$7$btn$5.style.display = 'none';
});


let text$places$7$btn$5 = document.getElementById('places-question-7-text-5');
// //activating question 7 button five
places_Seven_btn_five.addEventListener('click', function(){
places_Seven_btn_five.style.backgroundColor ='blue';
places_Seven_btn_one.style.backgroundColor = 'white';
places_Seven_btn_three.style.backgroundColor = 'white';
places_Seven_btn_four.style.backgroundColor = 'white';
places_Seven_btn_two.style.backgroundColor = 'white';

Check_result_Places.style.display ='flex';

//activating text
text$places$7$btn$1.style.display = 'none';
text$places$7$btn$2.style.display = 'none';
text$places$7$btn$3.style.display = 'none';
text$places$7$btn$4.style.display = 'none';
text$places$7$btn$5.style.display = 'block';
});







// //storing places eight buttons in variables
let places_Eight_btn_one = document.getElementById('places_question_eight_btn_one');
let places_Eight_btn_two = document.getElementById('places_question_eight_btn_two');
let places_Eight_btn_three = document.getElementById('places_question_eight_btn_three');
let places_Eight_btn_four =document.getElementById('places_question_eight_btn_four');
let places_Eight_btn_five = document.getElementById('places_question_eight_btn_five');

let text$places$8$btn$1 = document.getElementById('places-question-8-text-1');
// //activating places 8 button one 
places_Eight_btn_one.addEventListener('click', function(){
places_Eight_btn_one.style.backgroundColor ='blue';
places_Eight_btn_two.style.backgroundColor = 'white';
places_Eight_btn_three.style.backgroundColor = 'white';
places_Eight_btn_four.style.backgroundColor = 'white';
places_Eight_btn_five.style.backgroundColor = 'white';

Check_result_Places.style.display ='flex';

//activating text
text$places$8$btn$1.style.display = 'block';
text$places$8$btn$2.style.display = 'none';
text$places$8$btn$3.style.display = 'none';
text$places$8$btn$4.style.display = 'none';
text$places$8$btn$5.style.display = 'none';
});


let text$places$8$btn$2 = document.getElementById('places-question-8-text-2');
// //activating places 8 button two
places_Eight_btn_two.addEventListener('click', function(){
places_Eight_btn_two.style.backgroundColor ='blue';
places_Eight_btn_one.style.backgroundColor = 'white';
places_Eight_btn_three.style.backgroundColor = 'white';
places_Eight_btn_four.style.backgroundColor = 'white';
places_Eight_btn_five.style.backgroundColor = 'white';

Check_result_Places.style.display ='flex';

//activating text
text$places$8$btn$1.style.display = 'none';
text$places$8$btn$2.style.display = 'block';
text$places$8$btn$3.style.display = 'none';
text$places$8$btn$4.style.display = 'none';
text$places$8$btn$5.style.display = 'none';
});


let text$places$8$btn$3 = document.getElementById('places-question-8-text-3');
// //activating places 8 button three
places_Eight_btn_three.addEventListener('click', function(){
places_Eight_btn_three.style.backgroundColor ='blue';
places_Eight_btn_one.style.backgroundColor = 'white';
places_Eight_btn_two.style.backgroundColor = 'white';
places_Eight_btn_four.style.backgroundColor = 'white';
places_Eight_btn_five.style.backgroundColor = 'white';

Check_result_Places.style.display ='flex';

//activating text
text$places$8$btn$1.style.display = 'none';
text$places$8$btn$2.style.display = 'none';
text$places$8$btn$3.style.display = 'block';
text$places$8$btn$4.style.display = 'none';
text$places$8$btn$5.style.display = 'none';
});


let text$places$8$btn$4 = document.getElementById('places-question-8-text-4');
// //activating places 8 button four
places_Eight_btn_four.addEventListener('click', function(){
places_Eight_btn_four.style.backgroundColor ='blue';
places_Eight_btn_one.style.backgroundColor = 'white';
places_Eight_btn_two.style.backgroundColor = 'white';
places_Eight_btn_three.style.backgroundColor = 'white';
places_Eight_btn_five.style.backgroundColor = 'white';

Check_result_Places.style.display ='flex';

//activating text
text$places$8$btn$1.style.display = 'none';
text$places$8$btn$2.style.display = 'none';
text$places$8$btn$3.style.display = 'none';
text$places$8$btn$4.style.display = 'block';
text$places$8$btn$5.style.display = 'none';
});


let text$places$8$btn$5 = document.getElementById('places-question-8-text-5');
// //activating places 8 button five
places_Eight_btn_five.addEventListener('click', function(){
places_Eight_btn_five.style.backgroundColor ='blue';
places_Eight_btn_one.style.backgroundColor = 'white';
places_Eight_btn_three.style.backgroundColor = 'white';
places_Eight_btn_four.style.backgroundColor = 'white';
places_Eight_btn_two.style.backgroundColor = 'white';

Check_result_Places.style.display ='flex';

//activating text
text$places$8$btn$1.style.display = 'none';
text$places$8$btn$2.style.display = 'none';
text$places$8$btn$3.style.display = 'none';
text$places$8$btn$4.style.display = 'none';
text$places$8$btn$5.style.display = 'block';
});





// //storing places nine buttons in variables
let places_Nine_btn_one = document.getElementById('places_question_nine_btn_one');
let places_Nine_btn_two = document.getElementById('places_question_nine_btn_two');
let places_Nine_btn_three = document.getElementById('places_question_nine_btn_three');
let places_Nine_btn_four =document.getElementById('places_question_nine_btn_four');
let places_Nine_btn_five = document.getElementById('places_question_nine_btn_five');


let text$places$9$btn$1 = document.getElementById('places-question-9-text-1');
// //activating places 9 button one 
places_Nine_btn_one.addEventListener('click', function(){
places_Nine_btn_one.style.backgroundColor ='blue';
places_Nine_btn_two.style.backgroundColor = 'white';
places_Nine_btn_three.style.backgroundColor = 'white';
places_Nine_btn_four.style.backgroundColor = 'white';
places_Nine_btn_five.style.backgroundColor = 'white';

Check_result_Places.style.display ='flex';


//activating text
text$places$9$btn$1.style.display = 'block';
text$places$9$btn$2.style.display = 'none';
text$places$9$btn$3.style.display = 'none';
text$places$9$btn$4.style.display = 'none';
text$places$9$btn$5.style.display = 'none';
});


let text$places$9$btn$2 = document.getElementById('places-question-9-text-2');
// //activating places 9 button two
places_Nine_btn_two.addEventListener('click', function(){
places_Nine_btn_two.style.backgroundColor ='blue';
places_Nine_btn_one.style.backgroundColor = 'white';
places_Nine_btn_three.style.backgroundColor = 'white';
places_Nine_btn_four.style.backgroundColor = 'white';
places_Nine_btn_five.style.backgroundColor = 'white';

Check_result_Places.style.display ='flex';

//activating text
text$places$9$btn$1.style.display = 'none';
text$places$9$btn$2.style.display = 'block';
text$places$9$btn$3.style.display = 'none';
text$places$9$btn$4.style.display = 'none';
text$places$9$btn$5.style.display = 'none';
});



let text$places$9$btn$3 = document.getElementById('places-question-9-text-3');
// //activating question 7 button three
places_Nine_btn_three.addEventListener('click', function(){
places_Nine_btn_three.style.backgroundColor ='blue';
places_Nine_btn_one.style.backgroundColor = 'white';
places_Nine_btn_two.style.backgroundColor = 'white';
places_Nine_btn_four.style.backgroundColor = 'white';
places_Nine_btn_five.style.backgroundColor = 'white';

Check_result_Places.style.display ='flex';

//activating text
text$places$9$btn$1.style.display = 'none';
text$places$9$btn$2.style.display = 'none';
text$places$9$btn$3.style.display = 'block';
text$places$9$btn$4.style.display = 'none';
text$places$9$btn$5.style.display = 'none';
});


let text$places$9$btn$4 = document.getElementById('places-question-9-text-4');
// //activating question 7 button four
places_Nine_btn_four.addEventListener('click', function(){
places_Nine_btn_four.style.backgroundColor ='blue';
places_Nine_btn_one.style.backgroundColor = 'white';
places_Nine_btn_two.style.backgroundColor = 'white';
places_Nine_btn_three.style.backgroundColor = 'white';
places_Nine_btn_five.style.backgroundColor = 'white';

Check_result_Places.style.display ='flex';

//activating text
text$places$9$btn$1.style.display = 'none';
text$places$9$btn$2.style.display = 'none';
text$places$9$btn$3.style.display = 'none';
text$places$9$btn$4.style.display = 'block';
text$places$9$btn$5.style.display = 'none';
});


let text$places$9$btn$5 = document.getElementById('places-question-9-text-5');
// //activating question 9 button five
places_Nine_btn_five.addEventListener('click', function(){
places_Nine_btn_five.style.backgroundColor ='blue';
places_Nine_btn_one.style.backgroundColor = 'white';
places_Nine_btn_three.style.backgroundColor = 'white';
places_Nine_btn_four.style.backgroundColor = 'white';
places_Nine_btn_two.style.backgroundColor = 'white';

Check_result_Places.style.display ='flex';

//activating text
text$places$9$btn$1.style.display = 'none';
text$places$9$btn$2.style.display = 'none';
text$places$9$btn$3.style.display = 'none';
text$places$9$btn$4.style.display = 'none';
text$places$9$btn$5.style.display = 'block';
});









// //storing places ten buttons in variables
let places_Ten_btn_one = document.getElementById('places_question_ten_btn_one');
let places_Ten_btn_two = document.getElementById('places_question_ten_btn_two');
let places_Ten_btn_three = document.getElementById('places_question_ten_btn_three');
let places_Ten_btn_four =document.getElementById('places_question_ten_btn_four');
let places_Ten_btn_five = document.getElementById('places_question_ten_btn_five');



let text$places$10$btn$1 = document.getElementById('places-question-10-text-1');
// //activating question ten button one 
places_Ten_btn_one.addEventListener('click', function(){
places_Ten_btn_one.style.backgroundColor ='blue';
places_Ten_btn_two.style.backgroundColor = 'white';
places_Ten_btn_three.style.backgroundColor = 'white';
places_Ten_btn_four.style.backgroundColor = 'white';
places_Ten_btn_five.style.backgroundColor = 'white';

Check_result_Places.style.display ='flex';


//activating text
text$places$10$btn$1.style.display = 'block';
text$places$10$btn$2.style.display = 'none';
text$places$10$btn$3.style.display = 'none';
text$places$10$btn$4.style.display = 'none';
text$places$10$btn$5.style.display = 'none';
});


let text$places$10$btn$2 = document.getElementById('places-question-10-text-2');
// //activating question 7 button two
places_Ten_btn_two.addEventListener('click', function(){
places_Ten_btn_two.style.backgroundColor ='blue';
places_Ten_btn_one.style.backgroundColor = 'white';
places_Ten_btn_three.style.backgroundColor = 'white';
places_Ten_btn_four.style.backgroundColor = 'white';
places_Ten_btn_five.style.backgroundColor = 'white';

Check_result_Places.style.display ='flex';

//activating text
text$places$10$btn$1.style.display = 'none';
text$places$10$btn$2.style.display = 'block';
text$places$10$btn$3.style.display = 'none';
text$places$10$btn$4.style.display = 'none';
text$places$10$btn$5.style.display = 'none';
});


let text$places$10$btn$3 = document.getElementById('places-question-10-text-3');
// //activating question ten button three
places_Ten_btn_three.addEventListener('click', function(){
places_Ten_btn_three.style.backgroundColor ='blue';
places_Ten_btn_one.style.backgroundColor = 'white';
places_Ten_btn_two.style.backgroundColor = 'white';
places_Ten_btn_four.style.backgroundColor = 'white';
places_Ten_btn_five.style.backgroundColor = 'white';

Check_result_Places.style.display ='flex';


//activating text
text$places$10$btn$1.style.display = 'none';
text$places$10$btn$2.style.display = 'none';
text$places$10$btn$3.style.display = 'block';
text$places$10$btn$4.style.display = 'none';
text$places$10$btn$5.style.display = 'none';
});


let text$places$10$btn$4 = document.getElementById('places-question-10-text-4');
// //activating question ten button four
places_Ten_btn_four.addEventListener('click', function(){
places_Ten_btn_four.style.backgroundColor ='blue';
places_Ten_btn_one.style.backgroundColor = 'white';
places_Ten_btn_two.style.backgroundColor = 'white';
places_Ten_btn_three.style.backgroundColor = 'white';
places_Ten_btn_five.style.backgroundColor = 'white';

Check_result_Places.style.display ='flex';

//activating text
text$places$10$btn$1.style.display = 'none';
text$places$10$btn$2.style.display = 'none';
text$places$10$btn$3.style.display = 'none';
text$places$10$btn$4.style.display = 'block';
text$places$10$btn$5.style.display = 'none';
});


let text$places$10$btn$5 = document.getElementById('places-question-10-text-5');
// //activating question ten button five
places_Ten_btn_five.addEventListener('click', function(){
places_Ten_btn_five.style.backgroundColor ='blue';
places_Ten_btn_one.style.backgroundColor = 'white';
places_Ten_btn_three.style.backgroundColor = 'white';
places_Ten_btn_four.style.backgroundColor = 'white';
places_Ten_btn_two.style.backgroundColor = 'white';

Check_result_Places.style.display ='flex';

//activating text
text$places$10$btn$1.style.display = 'none';
text$places$10$btn$2.style.display = 'none';
text$places$10$btn$3.style.display = 'none';
text$places$10$btn$4.style.display = 'none';
text$places$10$btn$5.style.display = 'block';
});



let Check_result_Places = document.getElementById('Check_result_places');
Check_result_Places.style.display ='none';

let playAgain_places = document.getElementById('playAgain_places');



Check_result_Places.addEventListener('click', function(){


Check_result_Places.style.backgroundColor='blue';


places_One_btn_two.style.backgroundColor ='green';
places_Two_btn_three.style.backgroundColor ='green';
places_Three_btn_two.style.backgroundColor ='green';
places_Four_btn_four.style.backgroundColor ='green';
places_Five_btn_five.style.backgroundColor ='green';
places_Six_btn_three.style.backgroundColor ='green';
places_Seven_btn_one.style.backgroundColor ='green';
places_Eight_btn_four.style.backgroundColor ='green';
places_Nine_btn_two.style.backgroundColor ='green';
places_Ten_btn_one.style.backgroundColor ='green';


let places_1_Lost = document.querySelector('.firstP'); 
if (places_One_btn_one.style.backgroundColor==='blue') {
     places_1_Lost.style.display = 'block';
    places_One_btn_one.style.backgroundColor ='red';
}else if (places_One_btn_two.style.backgroundColor==='blue') {
       places_1_Lost.style.display = 'block';
     places_One_btn_two.style.backgroundColor ='red';
}else if (places_One_btn_three.style.backgroundColor==='blue') {
       places_1_Lost.style.display = 'block';
    places_One_btn_three.style.backgroundColor ='red';
}else if (places_One_btn_four.style.backgroundColor==='blue') {
       places_1_Lost.style.display = 'block';
     places_One_btn_four.style.backgroundColor ='red';
}else if (places_One_btn_five.style.backgroundColor==='blue') {
       places_1_Lost.style.display = 'block';
     places_One_btn_five.style.backgroundColor ='red';
};


let places_2_Lost = document.querySelector('.secondP');
if (places_Two_btn_one.style.backgroundColor==='blue') {
     places_2_Lost.style.display = 'block';
    places_Two_btn_one.style.backgroundColor ='red';
}else if (places_Two_btn_two.style.backgroundColor==='blue') {
     places_2_Lost.style.display = 'block';
     places_Two_btn_two.style.backgroundColor ='red';
}else if (places_Two_btn_three.style.backgroundColor==='blue') {
     places_2_Lost.style.display = 'block';
    places_Two_btn_three.style.backgroundColor ='red';
}else if (places_Two_btn_four.style.backgroundColor==='blue') {
     places_2_Lost.style.display = 'block';
     places_Two_btn_four.style.backgroundColor ='red';
}else if (places_Two_btn_five.style.backgroundColor==='blue') {
     places_2_Lost.style.display = 'block';
     places_Two_btn_five.style.backgroundColor ='red';
};



let places_3_Lost = document.querySelector('.thirdP');
if (places_Three_btn_one.style.backgroundColor==='blue') {
     places_3_Lost.style.display = 'block';
    places_Three_btn_one.style.backgroundColor ='red';
}else if (places_Three_btn_two.style.backgroundColor==='blue') {
     places_3_Lost.style.display = 'block';
     places_Three_btn_two.style.backgroundColor ='red';
}else if (places_Three_btn_three.style.backgroundColor==='blue') {
     places_3_Lost.style.display = 'block';
    places_Three_btn_three.style.backgroundColor ='red';
}else if (places_Three_btn_four.style.backgroundColor==='blue') {
     places_3_Lost.style.display = 'block';
     places_Three_btn_four.style.backgroundColor ='red';
}else if (places_Three_btn_five.style.backgroundColor==='blue') {
     places_3_Lost.style.display = 'block';
     places_Three_btn_five.style.backgroundColor ='red';
};




let places_4_Lost = document.querySelector('.fourthP');
if (places_Four_btn_one.style.backgroundColor==='blue') {
     places_4_Lost.style.display = 'block';
    places_Four_btn_one.style.backgroundColor ='red';
}else if (places_Four_btn_two.style.backgroundColor==='blue') {
      places_4_Lost.style.display = 'block';
     places_Four_btn_two.style.backgroundColor ='red';
}else if (places_Four_btn_three.style.backgroundColor==='blue') {
      places_4_Lost.style.display = 'block';
    places_Four_btn_three.style.backgroundColor ='red';
}else if (places_Four_btn_four.style.backgroundColor==='blue') {
      places_4_Lost.style.display = 'block';
     places_Four_btn_four.style.backgroundColor ='red';
}else if (places_Four_btn_five.style.backgroundColor==='blue') {
      places_4_Lost.style.display = 'block';
     places_Four_btn_five.style.backgroundColor ='red';
};




let places_5_Lost = document.querySelector('.fifthP');
if (places_Five_btn_one.style.backgroundColor==='blue') {
     places_5_Lost.style.display = 'block';
    places_Five_btn_one.style.backgroundColor ='red';
}else if (places_Five_btn_two.style.backgroundColor==='blue') {
      places_5_Lost.style.display = 'block';
     places_Five_btn_two.style.backgroundColor ='red';
}else if (places_Five_btn_three.style.backgroundColor==='blue') {
      places_5_Lost.style.display = 'block';
    places_Five_btn_three.style.backgroundColor ='red';
}else if (places_Five_btn_four.style.backgroundColor==='blue') {
      places_5_Lost.style.display = 'block';
     places_Five_btn_four.style.backgroundColor ='red';
}else if (places_Five_btn_five.style.backgroundColor==='blue') {
      places_5_Lost.style.display = 'block';
     places_Five_btn_five.style.backgroundColor ='red';
};




let places_6_Lost = document.querySelector('.sixthP');
if (places_Six_btn_one.style.backgroundColor==='blue') {
     places_6_Lost.style.display = 'block';
    places_Six_btn_one.style.backgroundColor ='red';
}else if (places_Six_btn_two.style.backgroundColor==='blue') {
     places_6_Lost.style.display = 'block';
     places_Six_btn_two.style.backgroundColor ='red';
}else if (places_Six_btn_three.style.backgroundColor==='blue') {
     places_6_Lost.style.display = 'block';
    places_Six_btn_three.style.backgroundColor ='red';
}else if (places_Six_btn_four.style.backgroundColor==='blue') {
     places_6_Lost.style.display = 'block';
     places_Six_btn_four.style.backgroundColor ='red';
}else if (places_Six_btn_five.style.backgroundColor==='blue') {
     places_6_Lost.style.display = 'block';
     places_Six_btn_five.style.backgroundColor ='red';
};




let places_7_Lost = document.querySelector('.seventhP');
if (places_Seven_btn_one.style.backgroundColor==='blue') {
      places_7_Lost.style.display = 'block';
    places_Seven_btn_one.style.backgroundColor ='red';
}else if (places_Seven_btn_two.style.backgroundColor==='blue') {
     places_7_Lost.style.display = 'block';
     places_Seven_btn_two.style.backgroundColor ='red';
}else if (places_Seven_btn_three.style.backgroundColor==='blue') {
     places_7_Lost.style.display = 'block';
    places_Seven_btn_three.style.backgroundColor ='red';
}else if (places_Seven_btn_four.style.backgroundColor==='blue') {
     places_7_Lost.style.display = 'block';
     places_Seven_btn_four.style.backgroundColor ='red';
}else if (places_Seven_btn_five.style.backgroundColor==='blue') {
     places_7_Lost.style.display = 'block';
     places_Seven_btn_five.style.backgroundColor ='red';
};




let places_8_Lost = document.querySelector('.EigthP');
if (places_Eight_btn_one.style.backgroundColor==='blue') {
     places_8_Lost.style.display = 'block';
    places_Eight_btn_one.style.backgroundColor ='red';
}else if (places_Eight_btn_two.style.backgroundColor==='blue') {
     places_8_Lost.style.display = 'block';
     places_Eight_btn_two.style.backgroundColor ='red';
}else if (places_Eight_btn_three.style.backgroundColor==='blue') {
     places_8_Lost.style.display = 'block';
    places_Eight_btn_three.style.backgroundColor ='red';
}else if (places_Eight_btn_four.style.backgroundColor==='blue') {
     places_8_Lost.style.display = 'block';
     places_Eight_btn_four.style.backgroundColor ='red';
}else if (places_Eight_btn_five.style.backgroundColor==='blue') {
     places_8_Lost.style.display = 'block';
     places_Eight_btn_five.style.backgroundColor ='red';
};




let places_9_Lost = document.querySelector('.ninethP');

if (places_Nine_btn_one.style.backgroundColor==='blue') {
     places_9_Lost.style.display = 'block';
    places_Nine_btn_one.style.backgroundColor ='red';
}else if (places_Nine_btn_two.style.backgroundColor==='blue') {
       places_9_Lost.style.display = 'block';
     places_Nine_btn_two.style.backgroundColor ='red';
}else if (places_Nine_btn_three.style.backgroundColor==='blue') {
       places_9_Lost.style.display = 'block';
    places_Nine_btn_three.style.backgroundColor ='red';
}else if (places_Nine_btn_four.style.backgroundColor==='blue') {
       places_9_Lost.style.display = 'block';
     places_Nine_btn_four.style.backgroundColor ='red';
}else if (places_Nine_btn_five.style.backgroundColor==='blue') {
       places_9_Lost.style.display = 'block';
     places_Nine_btn_five.style.backgroundColor ='red';
};





let places_10_Lost = document.querySelector('.tenthP');
if (places_Ten_btn_one.style.backgroundColor==='blue') {
       places_10_Lost.style.display = 'block';
    places_Ten_btn_one.style.backgroundColor ='red';
}else if (places_Ten_btn_two.style.backgroundColor==='blue') {
        places_10_Lost.style.display = 'block';
     places_Ten_btn_two.style.backgroundColor ='red';
}else if (places_Ten_btn_three.style.backgroundColor==='blue') {
        places_10_Lost.style.display = 'block';
    places_Ten_btn_three.style.backgroundColor ='red';
}else if (places_Ten_btn_four.style.backgroundColor==='blue') {
        places_10_Lost.style.display = 'block';
     places_Ten_btn_four.style.backgroundColor ='red';
}else if (places_Ten_btn_five.style.backgroundColor==='blue') {
        places_10_Lost.style.display = 'block';
   places_Ten_btn_five.style.backgroundColor ='red';
};

playAgain_places.addEventListener('click', function(){

myName.value="";
section1.style.display="none";

places_1_Lost.style.display = 'none';
places_2_Lost.style.display = 'none';
places_3_Lost.style.display = 'none';
places_4_Lost.style.display = 'none';
places_5_Lost.style.display = 'none';
places_6_Lost.style.display = 'none';
places_7_Lost.style.display = 'none';
places_8_Lost.style.display = 'none';
places_9_Lost.style.display = 'none';
places_10_Lost.style.display = 'none';
});

playAgain_places.style.display ='flex';

//taking the cursor out for the whole "MAIN";
Check_result_Places.style.cursor = 'default';

score.style.cursor ='none';




//taking out pointer Events


places_One_btn_one.style.pointerEvents = 'none';
places_One_btn_two.style.pointerEvents = 'none';
places_One_btn_three.style.pointerEvents = 'none';
places_One_btn_four.style.pointerEvents = 'none';
places_One_btn_five.style.pointerEvents = 'none';

//question 2 for places
places_Two_btn_one.style.pointerEvents = 'none';
places_Two_btn_two.style.pointerEvents = 'none';
places_Two_btn_three.style.pointerEvents = 'none';
places_Two_btn_four.style.pointerEvents = 'none';
places_Two_btn_five.style.pointerEvents = 'none';

//question 3 for places
places_Three_btn_one.style.pointerEvents = 'none';
places_Three_btn_two.style.pointerEvents = 'none';
places_Three_btn_three.style.pointerEvents = 'none';
places_Three_btn_four.style.pointerEvents = 'none';
places_Three_btn_five.style.pointerEvents = 'none';



places_Four_btn_one.style.pointerEvents = 'none';
places_Four_btn_two.style.pointerEvents = 'none';
places_Four_btn_three.style.pointerEvents = 'none';
places_Four_btn_four.style.pointerEvents = 'none';
places_Four_btn_five.style.pointerEvents = 'none';




places_Five_btn_one.style.pointerEvents = 'none';
places_Five_btn_two.style.pointerEvents = 'none';
places_Five_btn_three.style.pointerEvents = 'none';
places_Five_btn_four.style.pointerEvents = 'none';
places_Five_btn_five.style.pointerEvents = 'none';



places_Six_btn_one.style.pointerEvents = 'none';
places_Six_btn_two.style.pointerEvents = 'none';
places_Six_btn_three.style.pointerEvents = 'none';
places_Six_btn_four.style.pointerEvents = 'none';
places_Six_btn_five.style.pointerEvents = 'none';




places_Seven_btn_one.style.pointerEvents = 'none';
places_Seven_btn_two.style.pointerEvents = 'none';
places_Seven_btn_three.style.pointerEvents = 'none';
places_Seven_btn_four.style.pointerEvents = 'none';
places_Seven_btn_five.style.pointerEvents = 'none';



places_Eight_btn_one.style.pointerEvents = 'none';
places_Eight_btn_two.style.pointerEvents = 'none';
places_Eight_btn_three.style.pointerEvents = 'none';
places_Eight_btn_four.style.pointerEvents = 'none';
places_Eight_btn_five.style.pointerEvents = 'none';




places_Nine_btn_one.style.pointerEvents = 'none';
places_Nine_btn_two.style.pointerEvents = 'none';
places_Nine_btn_three.style.pointerEvents = 'none';
places_Nine_btn_four.style.pointerEvents = 'none';
places_Nine_btn_five.style.pointerEvents = 'none';



places_Ten_btn_one.style.pointerEvents = 'none';
places_Ten_btn_two.style.pointerEvents = 'none';
places_Ten_btn_three.style.pointerEvents = 'none';
places_Ten_btn_four.style.pointerEvents = 'none';
places_Ten_btn_five.style.pointerEvents = 'none';



score.style.cursor = 'default';
});




playAgain_places.addEventListener('click', function(){
playAgain_places.style.backgroundColor = 'blue';

firstPart.style.display ='block';
score.style.display ='none';

placesButton.style.background ='none';


tenQuestions.style.background = 'none';
    fiveQuestions.style.background='none';
    sevenQuestions.style.background='none';

//turning all buttons back to white

places_One_btn_one.style.backgroundColor ='white';
places_One_btn_two.style.backgroundColor = 'white';
places_One_btn_three.style.backgroundColor = 'white';
places_One_btn_four.style.backgroundColor = 'white';
places_One_btn_five.style.backgroundColor = 'white';

 places_One_btn_two.style.backgroundColor ='white';
 places_One_btn_one.style.backgroundColor ='white';
 places_One_btn_three.style.backgroundColor ='white';
 places_One_btn_four.style.backgroundColor ='white';
 places_One_btn_five.style.backgroundColor ='white';


 places_One_btn_three.style.backgroundColor ='white';
 places_One_btn_one.style.backgroundColor ='white';
 places_One_btn_two.style.backgroundColor ='white';
 places_One_btn_four.style.backgroundColor ='white';
 places_One_btn_five.style.backgroundColor ='white';


 places_One_btn_four.style.backgroundColor ='white';
 places_One_btn_one.style.backgroundColor ='white';
 places_One_btn_three.style.backgroundColor ='white';
 places_One_btn_two.style.backgroundColor ='white';
 places_One_btn_five.style.backgroundColor ='white';



 places_One_btn_five.style.backgroundColor ='white';
 places_One_btn_one.style.backgroundColor ='white';
 places_One_btn_two.style.backgroundColor ='white';
 places_One_btn_four.style.backgroundColor ='white';
 places_One_btn_three.style.backgroundColor ='white';



places_Two_btn_one.style.backgroundColor ='white';
places_Two_btn_two.style.backgroundColor = 'white';
places_Two_btn_three.style.backgroundColor = 'white';
places_Two_btn_four.style.backgroundColor = 'white';
places_Two_btn_five.style.backgroundColor = 'white';



places_Two_btn_two.style.backgroundColor ='white';
places_Two_btn_one.style.backgroundColor = 'white';
places_Two_btn_three.style.backgroundColor = 'white';
places_Two_btn_four.style.backgroundColor = 'white';
places_Two_btn_five.style.backgroundColor = 'white';



places_Two_btn_three.style.backgroundColor ='white';
places_Two_btn_one.style.backgroundColor = 'white';
places_Two_btn_two.style.backgroundColor = 'white';
places_Two_btn_four.style.backgroundColor = 'white';
places_Two_btn_five.style.backgroundColor = 'white';




places_Two_btn_four.style.backgroundColor ='white';
places_Two_btn_one.style.backgroundColor = 'white';
places_Two_btn_two.style.backgroundColor = 'white';
places_Two_btn_three.style.backgroundColor = 'white';
places_Two_btn_five.style.backgroundColor = 'white';



places_Two_btn_five.style.backgroundColor ='white';
places_Two_btn_one.style.backgroundColor = 'white';
places_Two_btn_three.style.backgroundColor = 'white';
places_Two_btn_four.style.backgroundColor = 'white';
places_Two_btn_two.style.backgroundColor = 'white';


places_Three_btn_one.style.backgroundColor ='white';
places_Three_btn_two.style.backgroundColor = 'white';
places_Three_btn_three.style.backgroundColor = 'white';
places_Three_btn_four.style.backgroundColor = 'white';
places_Three_btn_five.style.backgroundColor = 'white';



places_Three_btn_two.style.backgroundColor ='white';
places_Three_btn_one.style.backgroundColor = 'white';
places_Three_btn_three.style.backgroundColor = 'white';
places_Three_btn_four.style.backgroundColor = 'white';
places_Three_btn_five.style.backgroundColor = 'white';



places_Three_btn_three.style.backgroundColor ='white';
places_Three_btn_one.style.backgroundColor = 'white';
places_Three_btn_two.style.backgroundColor = 'white';
places_Three_btn_four.style.backgroundColor = 'white';
places_Three_btn_five.style.backgroundColor = 'white';



places_Three_btn_four.style.backgroundColor ='white';
places_Three_btn_one.style.backgroundColor = 'white';
places_Three_btn_two.style.backgroundColor = 'white';
places_Three_btn_three.style.backgroundColor = 'white';
places_Three_btn_five.style.backgroundColor = 'white';



places_Three_btn_five.style.backgroundColor ='white';
places_Three_btn_one.style.backgroundColor = 'white';
places_Three_btn_three.style.backgroundColor = 'white';
places_Three_btn_four.style.backgroundColor = 'white';
places_Three_btn_two.style.backgroundColor = 'white';


places_Four_btn_one.style.backgroundColor ='white';
places_Four_btn_two.style.backgroundColor = 'white';
places_Four_btn_three.style.backgroundColor = 'white';
places_Four_btn_four.style.backgroundColor = 'white';
places_Four_btn_five.style.backgroundColor = 'white';



places_Four_btn_two.style.backgroundColor ='white';
places_Four_btn_one.style.backgroundColor = 'white';
places_Four_btn_three.style.backgroundColor = 'white';
places_Four_btn_four.style.backgroundColor = 'white';
places_Four_btn_five.style.backgroundColor = 'white';




places_Four_btn_three.style.backgroundColor ='white';
places_Four_btn_one.style.backgroundColor = 'white';
places_Four_btn_two.style.backgroundColor = 'white';
places_Four_btn_four.style.backgroundColor = 'white';
places_Four_btn_five.style.backgroundColor = 'white';




places_Four_btn_four.style.backgroundColor ='white';
places_Four_btn_one.style.backgroundColor = 'white';
places_Four_btn_two.style.backgroundColor = 'white';
places_Four_btn_three.style.backgroundColor = 'white';
places_Four_btn_five.style.backgroundColor = 'white';



places_Four_btn_five.style.backgroundColor ='white';
places_Four_btn_one.style.backgroundColor = 'white';
places_Four_btn_three.style.backgroundColor = 'white';
places_Four_btn_four.style.backgroundColor = 'white';
places_Four_btn_two.style.backgroundColor = 'white';



places_Five_btn_one.style.backgroundColor ='white';
places_Five_btn_two.style.backgroundColor = 'white';
places_Five_btn_three.style.backgroundColor = 'white';
places_Five_btn_four.style.backgroundColor = 'white';
places_Five_btn_five.style.backgroundColor = 'white';




places_Five_btn_two.style.backgroundColor ='white';
places_Five_btn_one.style.backgroundColor = 'white';
places_Five_btn_three.style.backgroundColor = 'white';
places_Five_btn_four.style.backgroundColor = 'white';
places_Five_btn_five.style.backgroundColor = 'white';


places_Five_btn_three.style.backgroundColor ='white';
places_Five_btn_one.style.backgroundColor = 'white';
places_Five_btn_two.style.backgroundColor = 'white';
places_Five_btn_four.style.backgroundColor = 'white';
places_Five_btn_five.style.backgroundColor = 'white';



places_Five_btn_four.style.backgroundColor ='white';
places_Five_btn_one.style.backgroundColor = 'white';
places_Five_btn_two.style.backgroundColor = 'white';
places_Five_btn_three.style.backgroundColor = 'white';
places_Five_btn_five.style.backgroundColor = 'white';



places_Five_btn_five.style.backgroundColor ='white';
places_Five_btn_one.style.backgroundColor = 'white';
places_Five_btn_three.style.backgroundColor = 'white';
places_Five_btn_four.style.backgroundColor = 'white';
places_Five_btn_two.style.backgroundColor = 'white';





places_Six_btn_one.style.backgroundColor ='white';
places_Six_btn_two.style.backgroundColor = 'white';
places_Six_btn_three.style.backgroundColor = 'white';
places_Six_btn_four.style.backgroundColor = 'white';
places_Six_btn_five.style.backgroundColor = 'white';



places_Six_btn_two.style.backgroundColor ='white';
places_Six_btn_one.style.backgroundColor = 'white';
places_Six_btn_three.style.backgroundColor = 'white';
places_Six_btn_four.style.backgroundColor = 'white';
places_Six_btn_five.style.backgroundColor = 'white';



places_Six_btn_three.style.backgroundColor ='white';
places_Six_btn_one.style.backgroundColor = 'white';
places_Six_btn_two.style.backgroundColor = 'white';
places_Six_btn_four.style.backgroundColor = 'white';
places_Six_btn_five.style.backgroundColor = 'white';



places_Six_btn_four.style.backgroundColor ='white';
places_Six_btn_one.style.backgroundColor = 'white';
places_Six_btn_two.style.backgroundColor = 'white';
places_Six_btn_three.style.backgroundColor = 'white';
places_Six_btn_five.style.backgroundColor = 'white';



places_Six_btn_five.style.backgroundColor ='white';
places_Six_btn_one.style.backgroundColor = 'white';
places_Six_btn_three.style.backgroundColor = 'white';
places_Six_btn_four.style.backgroundColor = 'white';
places_Six_btn_two.style.backgroundColor = 'white';



places_Seven_btn_one.style.backgroundColor ='white';
places_Seven_btn_two.style.backgroundColor = 'white';
places_Seven_btn_three.style.backgroundColor = 'white';
places_Seven_btn_four.style.backgroundColor = 'white';
places_Seven_btn_five.style.backgroundColor = 'white';



places_Seven_btn_two.style.backgroundColor ='white';
places_Seven_btn_one.style.backgroundColor = 'white';
places_Seven_btn_three.style.backgroundColor = 'white';
places_Seven_btn_four.style.backgroundColor = 'white';
places_Seven_btn_five.style.backgroundColor = 'white';




places_Seven_btn_three.style.backgroundColor ='white';
places_Seven_btn_one.style.backgroundColor = 'white';
places_Seven_btn_two.style.backgroundColor = 'white';
places_Seven_btn_four.style.backgroundColor = 'white';
places_Seven_btn_five.style.backgroundColor = 'white';




places_Seven_btn_four.style.backgroundColor ='white';
places_Seven_btn_one.style.backgroundColor = 'white';
places_Seven_btn_two.style.backgroundColor = 'white';
places_Seven_btn_three.style.backgroundColor = 'white';
places_Seven_btn_five.style.backgroundColor = 'white';


places_Seven_btn_five.style.backgroundColor ='white';
places_Seven_btn_one.style.backgroundColor = 'white';
places_Seven_btn_three.style.backgroundColor = 'white';
places_Seven_btn_four.style.backgroundColor = 'white';
places_Seven_btn_two.style.backgroundColor = 'white';




places_Eight_btn_one.style.backgroundColor ='white';
places_Eight_btn_two.style.backgroundColor = 'white';
places_Eight_btn_three.style.backgroundColor = 'white';
places_Eight_btn_four.style.backgroundColor = 'white';
places_Eight_btn_five.style.backgroundColor = 'white';




places_Eight_btn_two.style.backgroundColor ='white';
places_Eight_btn_one.style.backgroundColor = 'white';
places_Eight_btn_three.style.backgroundColor = 'white';
places_Eight_btn_four.style.backgroundColor = 'white';
places_Eight_btn_five.style.backgroundColor = 'white';



places_Eight_btn_three.style.backgroundColor ='white';
places_Eight_btn_one.style.backgroundColor = 'white';
places_Eight_btn_two.style.backgroundColor = 'white';
places_Eight_btn_four.style.backgroundColor = 'white';
places_Eight_btn_five.style.backgroundColor = 'white';



places_Eight_btn_four.style.backgroundColor ='white';
places_Eight_btn_one.style.backgroundColor = 'white';
places_Eight_btn_two.style.backgroundColor = 'white';
places_Eight_btn_three.style.backgroundColor = 'white';
places_Eight_btn_five.style.backgroundColor = 'white';



places_Eight_btn_five.style.backgroundColor ='white';
places_Eight_btn_one.style.backgroundColor = 'white';
places_Eight_btn_three.style.backgroundColor = 'white';
places_Eight_btn_four.style.backgroundColor = 'white';
places_Eight_btn_two.style.backgroundColor = 'white';



places_Nine_btn_one.style.backgroundColor ='white';
places_Nine_btn_two.style.backgroundColor = 'white';
places_Nine_btn_three.style.backgroundColor = 'white';
places_Nine_btn_four.style.backgroundColor = 'white';
places_Nine_btn_five.style.backgroundColor = 'white';



places_Nine_btn_two.style.backgroundColor ='white';
places_Nine_btn_one.style.backgroundColor = 'white';
places_Nine_btn_three.style.backgroundColor = 'white';
places_Nine_btn_four.style.backgroundColor = 'white';
places_Nine_btn_five.style.backgroundColor = 'white';



places_Nine_btn_three.style.backgroundColor ='white';
places_Nine_btn_one.style.backgroundColor = 'white';
places_Nine_btn_two.style.backgroundColor = 'white';
places_Nine_btn_four.style.backgroundColor = 'white';
places_Nine_btn_five.style.backgroundColor = 'white';




places_Nine_btn_four.style.backgroundColor ='white';
places_Nine_btn_one.style.backgroundColor = 'white';
places_Nine_btn_two.style.backgroundColor = 'white';
places_Nine_btn_three.style.backgroundColor = 'white';
places_Nine_btn_five.style.backgroundColor = 'white';



places_Nine_btn_five.style.backgroundColor ='white';
places_Nine_btn_one.style.backgroundColor = 'white';
places_Nine_btn_three.style.backgroundColor = 'white';
places_Nine_btn_four.style.backgroundColor = 'white';
places_Nine_btn_two.style.backgroundColor = 'white';



places_Ten_btn_one.style.backgroundColor ='white';
places_Ten_btn_two.style.backgroundColor = 'white';
places_Ten_btn_three.style.backgroundColor = 'white';
places_Ten_btn_four.style.backgroundColor = 'white';
places_Ten_btn_five.style.backgroundColor = 'white';



places_Ten_btn_two.style.backgroundColor ='white';
places_Ten_btn_one.style.backgroundColor = 'white';
places_Ten_btn_three.style.backgroundColor = 'white';
places_Ten_btn_four.style.backgroundColor = 'white';
places_Ten_btn_five.style.backgroundColor = 'white';




places_Ten_btn_three.style.backgroundColor ='white';
places_Ten_btn_one.style.backgroundColor = 'white';
places_Ten_btn_two.style.backgroundColor = 'white';
places_Ten_btn_four.style.backgroundColor = 'white';
places_Ten_btn_five.style.backgroundColor = 'white';




places_Ten_btn_four.style.backgroundColor ='white';
places_Ten_btn_one.style.backgroundColor = 'white';
places_Ten_btn_two.style.backgroundColor = 'white';
places_Ten_btn_three.style.backgroundColor = 'white';
places_Ten_btn_five.style.backgroundColor = 'white';



places_Ten_btn_five.style.backgroundColor ='white';
places_Ten_btn_one.style.backgroundColor = 'white';
places_Ten_btn_three.style.backgroundColor = 'white';
places_Ten_btn_four.style.backgroundColor = 'white';
places_Ten_btn_two.style.backgroundColor = 'white';


//Removing the text
text$places$1$btn$1.style.display = 'none';
text$places$1$btn$2.style.display = 'none';
text$places$1$btn$3.style.display = 'none';
text$places$1$btn$4.style.display = 'none';
text$places$1$btn$5.style.display = 'none';

text$places$2$btn$1.style.display = 'none';
text$places$2$btn$2.style.display = 'none';
text$places$2$btn$3.style.display = 'none';
text$places$2$btn$4.style.display = 'none';
text$places$2$btn$5.style.display = 'none';

text$places$3$btn$1.style.display = 'none';
text$places$3$btn$2.style.display = 'none';
text$places$3$btn$3.style.display = 'none';
text$places$3$btn$4.style.display = 'none';
text$places$3$btn$5.style.display = 'none';


//Eliminating the text

text$places$1$btn$1.style.display = 'none';
text$places$1$btn$2.style.display = 'none';
text$places$1$btn$3.style.display = 'none';
text$places$1$btn$4.style.display = 'none';
text$places$1$btn$5.style.display = 'none';

text$places$2$btn$1.style.display = 'none';
text$places$2$btn$2.style.display = 'none';
text$places$2$btn$3.style.display = 'none';
text$places$2$btn$4.style.display = 'none';
text$places$2$btn$5.style.display = 'none';

text$places$3$btn$1.style.display = 'none';
text$places$3$btn$2.style.display = 'none';
text$places$3$btn$3.style.display = 'none';
text$places$3$btn$4.style.display = 'none';
text$places$3$btn$5.style.display = 'none';

text$places$4$btn$1.style.display = 'none';
text$places$4$btn$2.style.display = 'none';
text$places$4$btn$3.style.display = 'none';
text$places$4$btn$4.style.display = 'none';
text$places$4$btn$5.style.display = 'none';

text$places$5$btn$1.style.display = 'none';
text$places$5$btn$2.style.display = 'none';
text$places$5$btn$3.style.display = 'none';
text$places$5$btn$4.style.display = 'none';
text$places$5$btn$5.style.display = 'none';

text$places$6$btn$1.style.display = 'none';
text$places$6$btn$2.style.display = 'none';
text$places$6$btn$3.style.display = 'none';
text$places$6$btn$4.style.display = 'none';
text$places$6$btn$5.style.display = 'none';

text$places$7$btn$1.style.display = 'none';
text$places$7$btn$2.style.display = 'none';
text$places$7$btn$3.style.display = 'none';
text$places$7$btn$4.style.display = 'none';
text$places$7$btn$5.style.display = 'none';

text$places$8$btn$1.style.display = 'none';
text$places$8$btn$2.style.display = 'none';
text$places$8$btn$3.style.display = 'none';
text$places$8$btn$4.style.display = 'none';
text$places$8$btn$5.style.display = 'none';

text$places$9$btn$1.style.display = 'none';
text$places$9$btn$2.style.display = 'none';
text$places$9$btn$3.style.display = 'none';
text$places$9$btn$4.style.display = 'none';
text$places$9$btn$5.style.display = 'none';

text$places$10$btn$1.style.display = 'none';
text$places$10$btn$2.style.display = 'none';
text$places$10$btn$3.style.display = 'none';
text$places$10$btn$4.style.display = 'none';
text$places$10$btn$5.style.display = 'none';


Check_result_Places.style.display = 'none';
playAgain_places.style.display = 'none';
startBtn.style.display = 'none';



});



let section1 = document.getElementById('section1');
let myName = document.getElementById('myName');
let btnConfirm = document.getElementById('btnConfirm');
let theName = `EL Codes`;

section1.style.display ='none';
btnConfirm.addEventListener('click', function(){
     
if (myName.value===theName) {
   section1.style.display='flex';
}else if(myName.value===''){
     alert('no input');
}
else{
     alert('wrong spelling');
}
});

//////////////////////////changing the questions/////////
let btn_Next_Bible = document.querySelector('.next-question-btn');
let question1paragraph = document.querySelector('.question-bible-1');
let question2paragraph = document.querySelector('.question-bible-2');
let question3paragraph = document.querySelector('.question-bible-3');
let question4paragraph = document.querySelector('.question-bible-4');
let question5paragraph = document.querySelector('.question-bible-5');
let question6paragraph = document.querySelector('.question-bible-6');
let question7paragraph = document.querySelector('.question-bible-7');
let question8paragraph = document.querySelector('.question-bible-8');
let question9paragraph = document.querySelector('.question-bible-9');
let question10paragraph = document.querySelector('.question-bible-10');
btn_Next_Bible.addEventListener('click', function(e){
e.preventDefault();
// Reset all button colors to white
iscariotBtn.style.backgroundColor = 'white';
baptistBtn.style.backgroundColor = 'white';
mosesBtn.style.backgroundColor = 'white';
pilateBtn.style.backgroundColor = 'white';
lazarusBtn.style.backgroundColor = 'white';

iscariotBtn_Two.style.backgroundColor = 'white';
baptistBtn_Two.style.backgroundColor = 'white';
mosesBtn_Two.style.backgroundColor = 'white';
pilateBtn_Two.style.backgroundColor = 'white';
lazarusBtn_Two.style.backgroundColor = 'white';

iscariotBtn_Three.style.backgroundColor = 'white';
baptistBtn_Three.style.backgroundColor = 'white';
mosesBtn_Three.style.backgroundColor = 'white';
pilateBtn_Three.style.backgroundColor = 'white';
lazarusBtn_Three.style.backgroundColor = 'white';

iscariotBtn_four.style.backgroundColor = 'white';
baptistBtn_four.style.backgroundColor = 'white';
mosesBtn_four.style.backgroundColor = 'white';
pilateBtn_four.style.backgroundColor = 'white';
lazarusBtn_four.style.backgroundColor = 'white';

iscariotBtn_five.style.backgroundColor = 'white';
baptistBtn_five.style.backgroundColor = 'white';
mosesBtn_five.style.backgroundColor = 'white';
pilateBtn_five.style.backgroundColor = 'white';
lazarusBtn_five.style.backgroundColor = 'white';

iscariotBtn_six.style.backgroundColor = 'white';
baptistBtn_six.style.backgroundColor = 'white';
mosesBtn_six.style.backgroundColor = 'white';
pilateBtn_six.style.backgroundColor = 'white';
lazarusBtn_six.style.backgroundColor = 'white';

iscariotBtn_seven.style.backgroundColor = 'white';
baptistBtn_seven.style.backgroundColor = 'white';
mosesBtn_seven.style.backgroundColor = 'white';
pilateBtn_seven.style.backgroundColor = 'white';
lazarusBtn_seven.style.backgroundColor = 'white';

iscariotBtn_eight.style.backgroundColor = 'white';
baptistBtn_eight.style.backgroundColor = 'white';
mosesBtn_eight.style.backgroundColor = 'white';
pilateBtn_eight.style.backgroundColor = 'white';
lazarusBtn_eight.style.backgroundColor = 'white';

iscariotBtn_nine.style.backgroundColor = 'white';
baptistBtn_nine.style.backgroundColor = 'white';
mosesBtn_nine.style.backgroundColor = 'white';
pilateBtn_nine.style.backgroundColor = 'white';
lazarusBtn_nine.style.backgroundColor = 'white';

iscariotBtn_ten.style.backgroundColor = 'white';
baptistBtn_ten.style.backgroundColor = 'white';
mosesBtn_ten.style.backgroundColor = 'white';
pilateBtn_ten.style.backgroundColor = 'white';
lazarusBtn_ten.style.backgroundColor = 'white';

// question1paragraph.textContent = '1. Who built an ARK to survive the great flood';
// ... rest of the code


question1paragraph.textContent = '1. Who built an ARK to survive the great flood';
question2paragraph.textContent='2. Which giant did the young david kill with a sling and a stone ';
question3paragraph.textContent='3. WHo denied Knowing Jesus three times';
question4paragraph.textContent="4. Who was swallowed by a fish for  three days and nights";
question5paragraph.textContent='5. Who was the first murderer in the Bible';
question6paragraph.textContent='6. Which king had a dream of a giant statue made with many metals';
question7paragraph.textContent='7. who was the strong man who lost his strength when his hair was cut';
question8paragraph.textContent ='8. Who was the disciple that doubted Jesus\' resurrection until he saw the wounds';
question9paragraph.textContent='9. who was the first king of Isreal';
question10paragraph.textContent='10. Who wrote many of the psalms in the Bible';

///// changing the options ///////
iscariotBtn.textContent='Noah';
pilateBtn.textContent='Jonah';
mosesBtn.textContent='Abednego';
lazarusBtn.textContent='Jude';
baptistBtn.textContent ='Rahab';

iscariotBtn_Two.textContent = 'Saul';
pilateBtn_Two.textContent='Cyrus';
lazarusBtn_Two.textContent='Bezalel';
mosesBtn_Two.textContent='Goliath';
baptistBtn_Two.textContent='Sampson';


iscariotBtn_Three.textContent='John';
pilateBtn_Three.textContent='James';
lazarusBtn_Three.textContent='Jude';
mosesBtn_Three.textContent='Peter';
baptistBtn_Three.textContent='Andrew';

iscariotBtn_four.textContent='Jonah';
pilateBtn_four.textContent='Paul';
lazarusBtn_four.textContent='Job';
mosesBtn_four.textContent='saul';
baptistBtn_four.textContent='Joseph';

iscariotBtn_five.textContent='David';
pilateBtn_five.textContent='Cain';
lazarusBtn_five.textContent='Satan';
mosesBtn_five.textContent='Isaiah';
baptistBtn_five.textContent='Seth';

iscariotBtn_six.textContent='Darius';
pilateBtn_six.textContent='Saul';
lazarusBtn_six.textContent='David'
mosesBtn_six.textContent='Nebuchadnezzar';
baptistBtn_six.textContent='Joseph';

iscariotBtn_seven.textContent='Esau';
pilateBtn_seven.textContent='Jonathan';
lazarusBtn_seven.textContent='David';
mosesBtn_seven.textContent='Simpson';
baptistBtn_seven.textContent='Sampson';


iscariotBtn_eight.textContent='Peter';
pilateBtn_eight.textContent='Andrew';
lazarusBtn_eight.textContent='Mathew';
mosesBtn_eight.textContent='Thomas';
baptistBtn_eight.textContent='Judas';

iscariotBtn_nine.textContent='David';
pilateBtn_nine.textContent='Nebuchadnezzar';
lazarusBtn_nine.textContent='Saul';
mosesBtn_nine.textContent='Pharoah';
baptistBtn_nine.textContent='Tinibu';


iscariotBtn_ten.textContent='Solomon';
pilateBtn_ten.textContent='David';
lazarusBtn_ten.textContent='Jonathan';
mosesBtn_ten.textContent='Peter';
baptistBtn_ten.textContent='Joshua';



});


let btn_Next_Places = document.querySelector(".next-question-btn-places");
let question_1_paragraph_places = document.querySelector(".question-places-1");
let question_2_paragraph_places = document.querySelector(".question-places-2");
let question_3_paragraph_places = document.querySelector(".question-places-3");
let question_4_paragraph_places = document.querySelector(".question-places-4");
let question_5_paragraph_places = document.querySelector(".question-places-5");
let question_6_paragraph_places = document.querySelector(".question-places-6");
let question_7_paragraph_places = document.querySelector(".question-places-7");
let question_8_paragraph_places = document.querySelector(".question-places-8");
let question_9_paragraph_places = document.querySelector(".question-places-9");
let question_10_paragraph_places = document.querySelector(".question-places-10");

btn_Next_Places.addEventListener("click", function(e){
     e.preventDefault();

places_One_btn_one.style.backgroundColor ='white';
places_One_btn_two.style.backgroundColor = 'white';
places_One_btn_three.style.backgroundColor = 'white';
places_One_btn_four.style.backgroundColor = 'white';
places_One_btn_five.style.backgroundColor = 'white';

places_Three_btn_one.style.backgroundColor ='white';
places_Three_btn_two.style.backgroundColor = 'white';
places_Three_btn_three.style.backgroundColor = 'white';
places_Three_btn_four.style.backgroundColor = 'white';
places_Three_btn_five.style.backgroundColor = 'white';

places_Five_btn_three.style.backgroundColor ='white';
places_Five_btn_one.style.backgroundColor = 'white';
places_Five_btn_two.style.backgroundColor = 'white';
places_Five_btn_four.style.backgroundColor = 'white';
places_Five_btn_five.style.backgroundColor = 'white';

places_Ten_btn_one.style.backgroundColor ='white';
places_Ten_btn_two.style.backgroundColor = 'white';
places_Ten_btn_three.style.backgroundColor = 'white';
places_Ten_btn_four.style.backgroundColor = 'white';
places_Ten_btn_five.style.backgroundColor = 'white';

question_1_paragraph_places.textContent ='who';
question_2_paragraph_places.textContent ='what';
question_3_paragraph_places.textContent ='which';
question_4_paragraph_places.textContent ='when';
question_5_paragraph_places.textContent ='why';
question_6_paragraph_places.textContent ='Did';
question_7_paragraph_places.textContent ='How';
question_8_paragraph_places.textContent ='Will';
question_9_paragraph_places.textContent ='Would';
question_10_paragraph_places.textContent='Can';



})







// const cars = ["🚗", "🚙", "🚕"];

// for (const car of cars){
//     // Drive the car
//     console.log(`This is the car ${car}`);
// }