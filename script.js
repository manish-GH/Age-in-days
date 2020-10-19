function ageInDays() {
    let birthYear = prompt('What year were you born?');
    let finalAgeValue = (2020 - birthYear) * 365;

    let displayResult = document.createElement('h1');
    let textAnswer = document.createTextNode('You are ' + finalAgeValue + ' days old.');

    displayResult.setAttribute('id', 'ageInDays')
    displayResult.appendChild(textAnswer);
    document.getElementById('result').appendChild(displayResult);
   
}

function reset() {
    document.getElementById('ageInDays').remove();
}