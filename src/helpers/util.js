class Util {
    constructor() {

    }

    //创建script
    createScript(src) {
        var script = document.createElement('script');
        script.src = src;
        document.body.appendChild(script);
    }

    //判断是否是微信 不是微信插入提示 是则加载微信JS SDK
    isWX() {
        return new Promise((resolve, reject) => {
            var ua = navigator.userAgent.toLowerCase();
            var isWeixin = ua.indexOf('micromessenger') != -1;
            var isAndroid = ua.indexOf('android') != -1;
            var isIos = (ua.indexOf('iphone') != -1) || (ua.indexOf('ipad') != -1);
            if (!isWeixin && this.env !== 'dev') {
                document.head.innerHTML = '<title>抱歉，出错了</title><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0"><style>.weui_msg_title{font-size: 0;}</style><link rel="stylesheet" type="text/css" href="https://res.wx.qq.com/open/libs/weui/0.4.1/weui.css">';
                document.body.innerHTML = '<div class="weui_msg"><div class="weui_icon_area"><i class="weui_icon_info weui_icon_msg"></i></div><div class="weui_text_area"><h4 class="weui_msg_title">请在微信客户端打开链接</h4></div></div>';
                resolve()
            } else {
                this.createScript('http://res.wx.qq.com/open/js/jweixin-1.2.0.js');
                function  autoWx() {
                    try {
                        window.wx = wx;
                        resolve();
                    }catch (error){
                        setTimeout(()=>{
                            autoWx();
                        },50)
                    }
                }
                autoWx();
            }
        });
    }
}

export default new Util();