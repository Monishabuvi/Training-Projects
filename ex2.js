// let a='Process Drive';
// console.log(`Hello ${a}`);

// const apps=Vue.createApp({
//     template:`<h2>I m from Vue Js</h2><h1>My Sample code on Vue js with CDN</h1>`
// });
// apps.mount("#app")
var vmObj={name:"ProcessDrive"}
Object.freeze(vmObj)
var vm=new Vue({
    el:'#app',
    data:{
        name: vmObj
    }
})

console.log(vm.name.name)
vmObj.name="Tirupattur"
console.log(vm.name.name);
