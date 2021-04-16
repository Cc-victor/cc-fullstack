//打造ctx
let proto ={
  
}

function defineGetter(prop,name){
    prop.__defineGetter__(name,function(){
        return this[prop][name]
    })

}
defineGetter('request','url')  //写Url == request.url 
defineGetter('request','path')

module.exports = proto