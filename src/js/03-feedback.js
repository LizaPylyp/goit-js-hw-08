import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('[name = email]');
const message = document.querySelector('[name = message]');
const STORAGE_KEY = "feedback-form-state";

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error("Get state error: ", error.message);
  }
};

const storageData = load(STORAGE_KEY);
if (storageData) {
  email.value = storageData.email;
  message.value = storageData.message;
}


form.addEventListener('input', throttle(event => {
  
  const currentValues = {
    email:  email.value,
    message: message.value,
  }
       
  localStorage.setItem(STORAGE_KEY, JSON.stringify(currentValues));
     
  }, 500) 
);


form.addEventListener('submit', event => {
  event.preventDefault();

  if (email.value === '' || message.value === '') {
    return alert('All fields are to be filled');
  }

  console.log({ email: email.value, message: message.value });
  form.reset(); 
  localStorage.removeItem(STORAGE_KEY); 
});

