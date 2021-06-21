const part1 = document.getElementById('part-1')
const part2 = document.getElementById('part-2')
const part3 = document.getElementById('part-3')
const part4 = document.getElementById('part-4')
const part5 = document.getElementById('part-5')

const next1 = document.getElementById('next-1')
const next2 = document.getElementById('next-2')
const next3 = document.getElementById('next-3')
const next4 = document.getElementById('next-4')

const launch = document.getElementById('launch_lti')

const back1 = document.getElementById('back-1')
const back2 = document.getElementById('back-2')
const back3 = document.getElementById('back-3')
const back4 = document.getElementById('back-4')

const progressZero = document.getElementById('progressZero')
const progressTwentyFive = document.getElementById('progressTwentyFive')
const progressFifty = document.getElementById('progressFifty')
const progressSeventyFive = document.getElementById('progressSeventyFive')
const progressOneHundred = document.getElementById('progressOneHundred')

next1.addEventListener('click', function () {
    part1.classList.add('hide-par')
    part2.classList.remove('hide-par')
    progressZero.classList.add('hide-progress')
    progressTwentyFive.classList.remove('hide-progress')
})

next2.addEventListener('click', function () {
    part2.classList.add('hide-par')
    part3.classList.remove('hide-par')
    progressTwentyFive.classList.add('hide-progress')
    progressFifty.classList.remove('hide-progress')
})

next3.addEventListener('click', function () {
    part3.classList.add('hide-par')
    part4.classList.remove('hide-par')
    progressFifty.classList.add('hide-progress')
    progressSeventyFive.classList.remove('hide-progress')
})

next4.addEventListener('click', function () {
    part4.classList.add('hide-par')
    part5.classList.remove('hide-par')
    progressSeventyFive.classList.add('hide-progress')
    progressOneHundred.classList.remove('hide-progress')
})

back1.addEventListener('click', function () {
    part2.classList.add('hide-par')
    part1.classList.remove('hide-par')
    progressTwentyFive.classList.add('hide-progress')
    progressZero.classList.remove('hide-progress')
})

back2.addEventListener('click', function () {
    part3.classList.add('hide-par')
    part2.classList.remove('hide-par')
    progressFifty.classList.add('hide-progress')
    progressTwentyFive.classList.remove('hide-progress')
})

back3.addEventListener('click', function () {
    part4.classList.add('hide-par')
    part3.classList.remove('hide-par')
    progressSeventyFive.classList.add('hide-progress')
    progressFifty.classList.remove('hide-progress')
})

back4.addEventListener('click', function () {
    part5.classList.add('hide-par')
    part4.classList.remove('hide-par')
    progressOneHundred.classList.add('hide-progress')
    progressSeventyFive.classList.remove('hide-progress')
})
