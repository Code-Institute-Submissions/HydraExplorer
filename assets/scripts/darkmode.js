// /* this code was adapted from the tutorial found here: https://www.youtube.com/watch?v=wodWDIdV9BY
// although to test my knowledge and understanding i rewrote it in jquery.
// */

// $(document).ready(function () {
 
// let darkmode = localStorage.getItem('darkMode');
// const darkModeToggle = document.querySelector('#darkmodetoggle');

 
// //check if dark mode is enabled, if disabled turn on.

// const enableDarkMode = () =>{
//     // add class dark mode to body.
//     $('body').addClass('darkmode');
//     // update darkMode in local storage
//     localStorage.setItem('darkMode', 'enabled');
// };

// const disableDarkMode = () =>{
//     // add class dark mode to body.
//     $('body').removeClass('darkmode');
//     // update darkMode in local storage
//     localStorage.setItem('darkMode', null);
// };

// // check mode from previous. 

// if (darkMode ==='enabled') {
//     enableDarkMode();
// }

// // using if and else to enable and disable modes.

// $('#darkModeToggle').click(function(){
//     darkMode = localStorage.getItem('darkMode');
//     if (darkMode !== 'enabled') {
//         enableDarkMode();
//     }
// else {
//     disableDarkMode();
// }

// });
// })
 



$(document).ready(function () {

// alert('check1 check2.... test toggle now in console');


let darkMode = localStorage.getItem('darkMode'); 

const darkModeToggle = document.querySelector('#dark-mode-toggle');

//test on page load if dark mode enables..

console.log(darkMode);

//check if Dmode is enabled, if enabled turn it off if dis turn it on.

const enableDarkMode = () => {
//add class dark mode to body. 
document.body.classList.add('darkmode');
//and update dark mode in locale storage. 
localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
//remove class dark mode to body. 
document.body.classList.remove('darkmode');
//and update dark mode in locale storage. 
localStorage.setItem('darkMode', null);
};


//check for previous visit for dark mode enable or disable. Then test.

if (darkMode === 'enabled') {
    enableDarkMode();
}

darkModeToggle.addEventListener('click',() => {
// console.log('test click event listener');

//set up if statement 
darkMode = localStorage.getItem('darkMode');
if (darkMode !== 'enabled') {
    enableDarkMode();
    console.log(darkMode);

    
        $('#dark-mode-toggle').removeClass('btn-dark').addClass('dark-btn');
        console.log('darkbutton toggler test')
}
else {
    disableDarkMode();
    console.log(darkMode);
    $('#dark-mode-toggle').removeClass('dark-btn').addClass('btn-dark');
}

});

});
