/* Utility */

// clock
let clock_hour = document.getElementById('clock-hour')
let clock_minute = document.getElementById('clock-minute')
let clock_second = document.getElementById('clock-second')
let clock_AMPM = document.getElementById('clock-AMPM')

setInterval(()=> {
    let current_local_time = new Date()
    clock_hour.innerHTML =  (current_local_time.getHours() < 10 ? "0" : "") + ( current_local_time.getHours() > 12 ? current_local_time.getHours() - 12 : current_local_time.getHours()) 
    clock_minute.innerHTML = (current_local_time.getMinutes() < 10 ? "0" : "") + current_local_time.getMinutes()
    clock_second.innerHTML = (current_local_time.getSeconds() < 10 ? "0" : "") + current_local_time.getSeconds()
    clock_AMPM.innerHTML = (current_local_time.getHours() <= 12 ? "AM" : "PM")
}, 1000)

const theme_toggler = document.getElementById('theme-toggler')
const theme_slider = document.getElementById('theme-slider')

theme_toggler.addEventListener('click', () => {
    let body = document.getElementsByTagName('body')[0]
    
    body.classList.toggle('dark-theme')

    if( theme_slider.value == 1 ){
        theme_slider.value = 0
        theme_slider.classList.remove('dark')
        theme_slider.toggleAttribute('disabled')
    } else {
        theme_slider.value = 1
        theme_slider.classList.add('dark')
        theme_slider.toggleAttribute('disabled')
    }

})

