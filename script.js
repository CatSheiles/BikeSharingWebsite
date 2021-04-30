function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

var app = new Vue({
    el: '#app',
    data: VueData,
    methods: {
        changePage: function (name) {
            this.page = name;
        }
    }
})

function VueData(){
    return {
       page: 'main'
    };
}
