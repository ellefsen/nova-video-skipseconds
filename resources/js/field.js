Nova.booting((Vue, router, store) => {
    Vue.component('index-nova-video-skipseconds', require('./components/IndexField'))
    Vue.component('detail-nova-video-skipseconds', require('./components/DetailField'))
    Vue.component('form-nova-video-skipseconds', require('./components/FormField'))
})
