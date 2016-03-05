var storage = window.localStorage

var isDT = storage.getItem('isDarkTheme')
var fs = storage.getItem('fontSelect')

var store = {
    isDarkTheme: isDT != null && isDT != '0',
    fontSelect: fs
}

var vm = new Vue({
    data: store
})
vm.$watch('isDarkTheme', (newValue, oldValue) => {
    storage.setItem('isDarkTheme', newValue ? '1' : '0')
})
vm.$watch('fontSelect', (newValue, oldValue) => {
    storage.setItem('fontSelect', newValue)
})

export default store