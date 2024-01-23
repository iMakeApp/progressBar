// Accessing the progress-bar
const progressBar = document.getElementsByClassName('progress-bar')[0]

setInterval(() =>{
    const computedStyle = getComputedStyle(progressBar)
    const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0
    progressBar.style.setProperty('--width', width + .1)
}, 5)

// Refresh the page
function refreshPage(){
    window.location.reload();
} 