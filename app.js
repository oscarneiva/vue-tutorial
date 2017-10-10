new Vue({
    el:'#vue-app',
    data:{
        name: 'Shaun',
        job: 'ninja',
        website: 'lalaa',
        websiteTag: '<a href="lalalala"> The net ninja website' 
    },
    methods:{
        greet: function(time){
            return 'Good' + time + this.name;
        }
    }
});