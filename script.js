function topFunction(){
    console.log(document.documentElement.scrollTop);
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


//reason for this function was when click 'about us' button, scroll down landing page to 'about us' section
//great concept - scroll however just went to first pixel of 'about us' so you couldn't see the whole section - oh sad face
//hence commented out document.getElement lines
//implemented a quick wookie hack to solve this
function aboutus() {
    //document.getElementById("about").scrollIntoView({
      //  block: "start"
    //});
    document.documentElement.scrollTop = 967; //have to say this is a wookie hack!! dont do this on a complex site
    }

