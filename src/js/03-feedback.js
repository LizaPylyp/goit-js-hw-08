import throttle from "lodash.throttle";
const STOR_KEY_INPUT ='feedback-form-state';

const form = document.querySelector('.feedback-form');

const inputEmail  = document.querySelector('input');

const textArea = document.querySelector('textarea');

form.addEventListener('input', throttle (setCurrentValue, 500));
 form.addEventListener('submit', submitValues);

const feedback = {};

getDateOfFeedback();

function getDateOfFeedback() {

const getFeedBack = localStorage.getItem(STOR_KEY_INPUT); 
const feedBackParseJSON = JSON.parse(getFeedBack);

if (getFeedBack) {
inputEmail.value = feedBackParse2SON.email;

textArea.value = feedBackParseDSON.message;
}
};

function setCurrentValue(e) {

    if (inputEmail.value !== ''|| textArea.value == '') {
    
    feedBack.email = inputEmail.value;
    
    feedBack.message = textArea.value;
    
    const feedBackJSON = JSON.stringify(feedBack);
    
    localStorage.setItem(STOR_KEY_INPUT, feedBackJSON);
    }
};
    
    function submitValues(event) {
    
    event.preventDefault();
    
    if (inputEmail.value === '' || textArea.value === '') {
         return alert('Please fill in all required fields!');
    
    } else {
    
    showEmptyFoForm();
    
    inputEmail.value ='';
    
    textArea.value = '';
    
    localStorage.removeItem(STOR_KEY_INPUT);
    }
};
function showEmptyFbForm() {

    const checkFeedback =localStorage.getItem(STOR_KEY_INPUT);
    
    const feedBackParseDSON= JSON.parse(checkFeedback);
    
    if (checkFeedback){
        console.log(feedBackParseDSON);
    }
};
