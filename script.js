let randomNumber = [,]
let likes = [document.getElementById('likes1'), document.getElementById('likes2')];
let indexR;
const likeBtn = [document.getElementById('like-button1'), document.getElementById('like-button2')]
// const likeBtnTest = Array.from(document.getElementsByClassName('fa-heart'));

window.onload = () => {
    randomNumber[0] = Math.floor((Math.random() * 100000) + 1);
    randomNumber[1] = Math.floor((Math.random() * 100000) + 1);
    likes[0].innerHTML = randomNumber[0].toLocaleString('en-US');
    likes[1].innerHTML = randomNumber[1].toLocaleString('en-US');
}

likeBtn[0].addEventListener('click', function onClick1() {
    indexR = 0;
    likeBtn[indexR].style.color = isRed(likeBtn[indexR]);
})

likeBtn[1].addEventListener('click', function onClick2() {
    indexR = 1;
    likeBtn[indexR].style.color = isRed(likeBtn[indexR]);
})

function isRed(button) {
    if (button.style.color === 'red') {
        likes[indexR].innerHTML = (randomNumber[indexR]).toLocaleString('en-US');
        return 'black';
    } else {
        likes[indexR].innerHTML = (randomNumber[indexR] + 1).toLocaleString('en-US');
        return 'red';
    }
}

/* likeBtnTest.forEach((element,index) => {
    element.addEventListener('click', onClick)
})

function onClick() {
    this.style.color = isRedTest(this, test);
}


function isRedTest(button, index) {
    if (button.style.color === 'red') {
        likes[index].innerHTML = (randomNumber[index]).toLocaleString('en-US');
        return 'black';
    } else {
        likes[index].innerHTML = (randomNumber[index] + 1).toLocaleString('en-US');
        return 'red';
    }
} */