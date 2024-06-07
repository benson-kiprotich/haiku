import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './css/styles.css';
import { checkIfHaiku, countNumSyllables } from './haikuChecker';

function handleHaikuForm() {
  event.preventDefault();
  const input1 = document.querySelector('#line1').value;
  const input2 = document.querySelector('#line2').value;
  const input3 = document.querySelector('#line3').value;

  const result = checkIfHaiku(input1, input2, input3);

  const header = document.createElement('h4');
  const breakP = document.createElement('br');
  const pTag1 = document.createElement('p');
  const pTag2 = document.createElement('p');
  const pTag3 = document.createElement('p');

  document.querySelector('#results-div').style.display = 'block';

  if (result) {
    header.append('You have a Haiku!');
    pTag1.append(input1);
    pTag2.append(input2);
    pTag3.append(input3);
  } else {
    const Line1Count = countNumSyllables(input1);
    const Line2Count = countNumSyllables(input2);
    const Line3Count = countNumSyllables(input3);

    header.append('Sorry, This poem is not a Haiku!');
    pTag1.append(`Line 1 is ${Line1Count} syllables, and should be 5.`);
    pTag2.append(`Line 2 is ${Line2Count} syllables, and should be 7.`);
    pTag3.append(`Line 3 is ${Line3Count} syllables, and should be 5.`);
  }

  document
    .querySelector('#results-div')
    .append(header, breakP, pTag1, pTag2, pTag3);
}

window.addEventListener('load', () => {
  document
    .querySelector('#haiku-form')
    .addEventListener('submit', handleHaikuForm);
});
