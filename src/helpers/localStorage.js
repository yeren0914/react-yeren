export default {
    getItem:function (key) {
        let value
        try {
            value = localStorage.getItem(key)
        } catch (ex){
            console.log('loacalStorage.getItem 报错',ex.message)
        } finally{
            return value
        }
    },
    setItem: function (key,value) {
        try{
            localStorage.setItem(key,value);
        } catch(ex){
            console.log('localStorage.setItem报错',ex.message)
        }
    },
    removeItem:function(key){
        try{
            localStorage.removeItem(key);
        } catch(ex){
            console.log('localStorage.removeItem报错',ex.message)
        }
    }
}

//openid 保存到全局 名称 openid