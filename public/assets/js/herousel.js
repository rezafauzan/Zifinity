let herousel = document.getElementById('herousel')
let herousel_list = document.querySelector('.herousel .herousel-list')
let herousel_item = document.querySelectorAll('.herousel .herousel-list .herousel-list-item')
let herousel_indicator_list = document.querySelector('.herousel .herousel-indicator-list')
let herousel_next_button = document.getElementById('herousel-next-button')
let herousel_previous_button = document.getElementById('herousel-previous-button')
let herousel_item_active_index 

let herousel_time_out = 4000

herousel_item.forEach((herousel_item, index) => {
    if (herousel_item.classList.contains('active')) {
        herousel_item_active_index = index;
    }
})

for (let i = 0; i < herousel_item.length; i++) {
    let indicator = document.createElement("li")
    indicator.classList.add("herousel-indicator-list-item")
    indicator.append(document.createElement("span"))
    herousel_indicator_list.append(indicator)
}

herousel_indicator_list.querySelectorAll("li")[herousel_item_active_index].classList.add("active")

herousel_next_button.addEventListener('click', () => {
    herousel_item[herousel_item_active_index].classList.remove("active")
    herousel_indicator_list.querySelectorAll("li")[herousel_item_active_index].classList.remove("active")

    if(herousel_item_active_index < herousel_item.length - 1 ){
        herousel_item_active_index++
    }
    else{
        herousel_item_active_index = 0
    }

    herousel_item[herousel_item_active_index].classList.add("active")
    herousel_indicator_list.querySelectorAll("li")[herousel_item_active_index].classList.add("active")

    herousel.classList.add('next')

    setTimeout(() => {
        herousel.classList.remove('next')
    }, herousel_time_out);

})

herousel_previous_button.addEventListener('click', () => {
    herousel_list.prepend(herousel_item[herousel_last_item])
    herousel.classList.add('previous')
})