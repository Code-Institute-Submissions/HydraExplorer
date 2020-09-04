/* this code was adapted from the tutorial found here: https://www.youtube.com/watch?v=wodWDIdV9BY
although to test my knowledge and understanding i rewrote it in jquery.
*/
 
let darkmode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#dark-mode-toggle');


//check if dark mode is enabled, if disabled turn on.

const enableDarkMode = () =>{
    // add class dark mode to body.
    $('body').addClass('darkmode');
    // update darkMode in local storage
    localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () =>{
    // add class dark mode to body.
    $('body').removeClass('darkmode');
    // update darkMode in local storage
    localStorage.setItem('darkMode', null);
};

// check mode from previous. 

if (darkMode ==='enabled') {
    enableDarkMode();
}

// using if and else to enable and disable modes.

$('#darkModeToggle').click(function(){
    darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'enabled') {
        enableDarkMode();
    }
else {
    disableDarkMode();
}

});




