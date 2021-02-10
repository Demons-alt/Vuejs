Vue.component('showform', {
    template: '#show-form',
    data(){
        return {
            data: { name: '', address: '', code: ''}
        }
    },
    methods: {
        simpan: function() {
            this.$emit('send-data', this.data);
            this.data.name = "";
            this.data.address = "";
            this.data.code = "";
        }
    }
})

Vue.component('showdata', {
    template: '#show-data',
    props: ['data']
})

var app = new Vue({
    el: '#app',
    data: {
        package: {}
    },
    methods: {
        getData: function (value) {
            this.package = {
                name : value.name,
                address : value.address,
                code : value.code
            }
        }
    }
})
