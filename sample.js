// console.log('My first sample project on gitHub')
// console.log('This is Trial for modification')
var data={a:1}
var vueInst = new Vue({
    el:'#simple',
    data:{
        data:data
    }
})
console.log(vueInst.data.a)
vueInst.data='change';
console.log(vueInst.data)
vueInst.data='changedValue'
data.a='changedValue'
console.log(data.a);