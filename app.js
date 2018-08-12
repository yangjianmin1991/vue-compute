new Vue({
    el: '#vue-compute',
    data: {
       
       a:1,
       b:1,
       age:10 
      
    
    },
    methods:{
      /* addToA: function () {
      	console.log("addToA");
      	return this.a+this.age;
      },
      addToB: function(){
      	console.log("addToB");
        return this.b+this.age;
      }*/
    },
    computed:{
    	addToA: function () {
      	console.log("addToA");
      	return this.a+this.age;
      },
      addToB: function(){
      	console.log("addToB");
        return this.b+this.age;
      }
    }
});
