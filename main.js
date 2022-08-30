const inleft = document.querySelector('#inleft');
const inright = document.querySelector('#inright');

const rub = document.querySelector('.rub');
const usd = document.querySelector('.usd');
const eu = document.querySelector('.eu');
const ils = document.querySelector('.ils');

const rub1 = document.querySelector('.rub1');
const usd1 = document.querySelector('.usd1');
const eu1 = document.querySelector('.eu1');
const ils1 = document.querySelector('.ils1');

let dollar = 1;
let euro = 0.8;
let rubble = 53.4;
let shekele = 2.89;
let course;

usd.addEventListener('click', () => {
    let status = (rub.classList.contains('active') || eu.classList.contains('active') || ils.classList.contains('active'))
    if (status == true) {
        rub.classList.remove('active')
        eu.classList.remove('active')
        ils.classList.remove('active')
        usd.classList.add('active')
    }
})

rub.addEventListener('click', () => {
    let status = (usd.classList.contains('active') || eu.classList.contains('active') || ils.classList.contains('active'))
    if (status == true) {
        usd.classList.remove('active')
        eu.classList.remove('active')
        ils.classList.remove('active')
        rub.classList.add('active')
    }
})

eu.addEventListener('click', () => {
    let status = (rub.classList.contains('active') || usd.classList.contains('active') || ils.classList.contains('active'))
    if (status == true) {
        rub.classList.remove('active')
        usd.classList.remove('active')
        ils.classList.remove('active')
        eu.classList.add('active')
    }
})

ils.addEventListener('click', () => {
    let status = (rub.classList.contains('active') || usd.classList.contains('active') || eu.classList.contains('active'))
    if (status == true) {
        rub.classList.remove('active')
        usd.classList.remove('active')
        eu.classList.remove('active')
        ils.classList.add('active')
    }
})

usd1.addEventListener('click', () => {
    let status = (rub1.classList.contains('active') || eu1.classList.contains('active') || ils1.classList.contains('active'))
    if (status == true) {
        rub1.classList.remove('active')
        eu1.classList.remove('active')
        ils1.classList.remove('active')
        usd1.classList.add('active')
    }
})

rub1.addEventListener('click', () => {
    let status = (usd1.classList.contains('active') || eu1.classList.contains('active') || ils1.classList.contains('active'))
    if (status == true) {
        usd1.classList.remove('active')
        eu1.classList.remove('active')
        ils1.classList.remove('active')
        rub1.classList.add('active')
    }
})

eu1.addEventListener('click', () => {
    let status = (rub1.classList.contains('active') || usd1.classList.contains('active') || ils1.classList.contains('active'))
    if (status == true) {
        rub1.classList.remove('active')
        usd1.classList.remove('active')
        ils1.classList.remove('active')
        eu1.classList.add('active')
    }
})

ils1.addEventListener('click', () => {
    let status = (rub1.classList.contains('active') || usd1.classList.contains('active') || eu1.classList.contains('active'))
    if (status == true) {
        rub1.classList.remove('active')
        usd1.classList.remove('active')
        eu1.classList.remove('active')
        ils1.classList.add('active')
    }
})


const get = document.querySelector('.img')

get.addEventListener('click', () => {
    if ((rub.classList.contains('active')) && (usd1.classList.contains('active'))) {
        let in1 = inleft.value;
        let in2 = inright.value;
        let result = in1 / rubble;
        console.log(result)
        inright.value = result
    }
})

get.addEventListener('click', () => {
    if ((usd.classList.contains('active')) && (rub1.classList.contains('active'))) {
        let in1 = inleft.value;
        let in2 = inright.value;
        let result = in1 * rubble;
        console.log(result)
        inright.value = result
    }
})

get.addEventListener('click', () => {
    if ((eu.classList.contains('active')) && (rub1.classList.contains('active'))) {
        let in1 = inleft.value;
        let in2 = inright.value;
        let result = in1 * rubble / euro;
        console.log(result)
        inright.value = result
    }
})

get.addEventListener('click', () => {
    if ((eu1.classList.contains('active')) && (rub.classList.contains('active'))) {
        let in1 = inleft.value;
        let in2 = inright.value;
        let result = in1 * rubble / euro;
        console.log(result)
        inright.value = result
    }
})

get.addEventListener('click', () => {
    if ((eu.classList.contains('active')) && (usd1.classList.contains('active'))) {
        let in1 = inleft.value;
        let in2 = inright.value;
        let result = in1 / euro;
        console.log(result)
        inright.value = result
    }
})

get.addEventListener('click', () => {
    if ((usd.classList.contains('active')) && (eu1.classList.contains('active'))) {
        let in1 = inleft.value;
        let in2 = inright.value;
        let result = in1 / euro;
        console.log(result)
        inright.value = result
    }
})

get.addEventListener('click', () => {
    if ((ils.classList.contains('active')) && (rub1.classList.contains('active'))) {
        let in1 = inleft.value;
        let in2 = inright.value;
        let result = in1 * (rubble / shekele);
        console.log(result)
        inright.value = result
    }
})

get.addEventListener('click', () => {
    if ((ils.classList.contains('active')) && (usd1.classList.contains('active'))) {
        let in1 = inleft.value;
        let in2 = inright.value;
        let result = in1 / shekele;
        console.log(result)
        inright.value = result
    }
})

get.addEventListener('click', () => {
    if ((ils.classList.contains('active')) && (eu1.classList.contains('active'))) {
        let in1 = inleft.value;
        let in2 = inright.value;
        let result = in1 / shekele / euro;
        console.log(result)
        inright.value = result
    }
})

get.addEventListener('click', () => {
    if ((rub.classList.contains('active')) && (ils1.classList.contains('active'))) {
        let in1 = inleft.value;
        let in2 = inright.value;
        let result = in1 / (rubble / shekele);
        console.log(result)
        inright.value = result
    }
})

get.addEventListener('click', () => {
    if ((usd.classList.contains('active')) && (ils1.classList.contains('active'))) {
        let in1 = inleft.value;
        let in2 = inright.value;
        let result = in1 / shekele;
        console.log(result)
        inright.value = result
    }
})

get.addEventListener('click', () => {
    if ((eu.classList.contains('active')) && (ils1.classList.contains('active'))) {
        let in1 = inleft.value;
        let in2 = inright.value;
        let result = in1 / (shekele * euro);
        console.log(result)
        inright.value = result
    }
})


