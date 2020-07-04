
const fortuneCookie = () => {
    const messages = [
        'A feather in the hand is better than a bird in the air',
        'Don’t be discouraged, because every wrong attempt discarded is another step forward',
        'Any decision you have to make tomorrow is a good decision',
        'Courtesy begins in the home',
        'Do not let ambitions overshadow small success',
        'Every wise man started out by asking many questions',
        'Never fear! The end of something marks the start of something new',
        'Stop searching forever, happiness is just next to you',
        'Well done is better than well said',
        'Those who care will make the effort',
    ];

    // message.length is the array size
    const index = Math.floor(Math.random() * messages.length);

    return messages[index]
}

const handleFortuneCookieClick = () => {
    const message = fortuneCookie()
    document.getElementById('user-choice').innerHTML = message
};



// <img onclick="fortuneCookie()" src="...">


// console.log(fortuneCookie());
// float / decimal
// integer / int