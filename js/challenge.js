const minus = document.querySelector('#minus');
const plus = document.querySelector('#plus');
const heart = document.querySelector('#heart');
const pause = document.querySelector('#pause');
const likes = document.querySelector('.likes');
pause.value = 'pause';

pause.addEventListener('click', () => {

if (pause.value === 'pause') {
    console.log('pause');
    pause.textContent = 'resume';
    minus.disabled = true;
    plus.disabled = true;
    heart.disabled = true;
    clearInterval(t);
    pause.value = 'resume'
} else {
    console.log('resume');
    pause.textContent = 'pause';
    minus.disabled = false;
    plus.disabled = false;
    heart.disabled = false;
    pause.value = 'pause'
    timer();
}

});


let i = 0;
let t;
function timer () {
    t = setInterval(function () {
        document.getElementById('counter').textContent = i;
        i++
    }, 1000);
} 
timer()

minus.addEventListener('click', () => {i--;});
plus.addEventListener('click', () => {i++;})

// let n = 1;
// heart.addEventListener('click', () => {
//     const li = document.createElement('li');
//     // const span = document.createElement('span');

//     // span.textContent = n  
//     // setInterval(() => {
//     //     n ++;
//     //     total += 1;
//     // }, 1000);   
    
//     // let total = 0;
//     li.textContent = `${i} has been liked ${n}` + (n > 1 ? ' times' : ' time');

//     // -----new trial------


//     // li.appendChild(span)
//     likes.appendChild(li)
// })

let now = new Data;
let start = clicks = frequency = 0;
heart.addEventListener('click', () => {
    if (!start) start = new Data 
    frequency = ++clicks / (new Data - start) * 1000
    li.textContent = `${i} has been liked ${frequency}` + (frequency > 1 ? ' times' : ' time');
})




const commentForm = document.querySelector('#comment-form');
const input = document.querySelector('#comment-input');
const comment = document.querySelector('#list')

commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const p = document.createElement('p');
    p.textContent = input.value;
    comment.appendChild(p);

});