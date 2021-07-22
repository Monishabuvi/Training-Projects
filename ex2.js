// let a='Process Drive';
// console.log(`Hello ${a}`);

// const apps=Vue.createApp({
//     template:`<h2>I m from Vue Js</h2><h1>My Sample code on Vue js with CDN</h1>`
// });
// apps.mount("#app")

// var vmObj={name:"ProcessDrive"}
// Object.freeze(vmObj)
// var vm=new Vue({
//     el:'#app',
//     data:{
//         //name: vmObj
//         name:"ProcessDrive"
//     },
//     methods:{
//         greet: function(){
//         return `Good Evening ${this.name}`
//      }
//      }
// })
// console.log(vm.name.name)
// vmObj.name="Tirupattur"
// console.log(vm.name.name);
var app=new Vue({
    el: '#app',
    data:{
        product: 'Books',
        image:'images/book-image.jpg',
        inventory:12,
        details:['Javascript','Node JS','Vue JS'],
        variants:[{
            variant:'OneBook',
            code:2453,
            bookImage:'images/book-image.jpg'
        },{
            variant:'Many Books',
            code:2567,
            bookImage:'images/multiplebook.jpg'
        }],
        cart:0
    },
        methods:{
            addTocart:function (){
                this.cart += 1
            }
            
    }
})