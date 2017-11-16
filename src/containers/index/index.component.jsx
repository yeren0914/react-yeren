import React from 'react';
import Header from '../../component/head/head.component';
import Home from '../home/home.component';
import Footer from '../../component/footer/footer.component';
import Swiper from '../../component/swiper/swiper.component';
import Search from '../../component/search/search.component';
import Grid from '../grid/grid.component';
import './index.scss';
import Bundle from '../../config/bundle';
import createBrowserHistory from 'history/createBrowserHistory';
import {Router,Route,IndexRoute } from 'react-router-dom';
import {WhiteSpace,Button} from 'antd-mobile';
import { homedir } from 'os';

class Index extends React.Component {
    constructor(){
        super();
        this.state ={
            imgList:['img1','img2','img3','img4','img3'],
            imgHeight:136,
            isAuto:true,
            textList:['我不想这样活着','人没梦想和咸鱼有啥分别','不卑不亢 不慌不忙','难道说60岁后再去寻找我想要的自由'],
            textHeight:40,
            textAuto:true,
            textType:true,
            gridData:[
                {icon:require('../../static/img/head1.jpg'),'text':'嘻哈猴'},
                {icon:require('../../static/img/head1.jpg'),'text':'王老吉'},
                {icon:require('../../static/img/head1.jpg'),'text':'百事可乐'},
                {icon:require('../../static/img/head1.jpg'),'text':'AD概念'},
                {icon:require('../../static/img/head1.jpg'),'text':'加多宝'},
                {icon:require('../../static/img/head1.jpg'),'text':'泸州老窖'},
            ],
            imgSrc:'http://pic49.nipic.com/file/20140927/19617624_230415502002_2.jpg',
            childrenTab:[
                {id:'1',iconName:'icon-bank',text:'首页',link:'/'},
                {id:'2',iconName:'icon-wechat',text:'微信',link:'/home'},
                {id:'3',iconName:'icon-gr',text:'个人中心',link:'/list'},
                {id:'4',iconName:'icon-money',text:'我的钱包',link:'/ToDoApp'}
            ]
        }

        // wx.ready(()=>{
        //     //成功后可以调用微信的 接口
        //     wx.onMenuShareAppMessage({
        //         title: '分享', // 分享标题
        //         desc: '分享描述', // 分享描述
        //         link: 'http://mhyq.kxtx.cn/', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        //         imgUrl: 'http://pic49.nipic.com/file/20140927/19617624_230415502002_2.jpg', // 分享图标
        //         type: '', // 分享类型,music、video或link，不填默认为link
        //         dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
        //         success: function () { 
        //             // 用户确认分享后执行的回调函数
        //         },
        //         cancel: function () { 
        //             // 用户取消分享后执行的回调函数
        //         }
        //     });
        // })
    }

    // onSubimg(){
    //     //拍照或从手机相册中选图接口
    //     var that = this;
    //     //图片上传
    //     wx.chooseImage({
    //         count: 1, // 默认9
    //         sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
    //         sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
    //         success: function (res) {
    //             var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
    //             wx.getLocalImgData({
    //                 localId: localIds[0] || localIds, // 图片的localID
    //                 success: function(resA) {
    //                   that.setState({
    //                     imgSrc: resA.localData
    //                   })
    //                 },
    //                 fail: function(e) {
    //                     Toast.info(e, 3, () => {}, false);
    //                 }
    //             });
    //         }
    //     });
    // }

    render() {
        return (
            <div>
                {/* <Header headerTitle="首页" /> */}
                
                {/* <Search />
                <Swiper swiperList={this.state.imgList} swiperType={false} isAuto={this.state.isAuto} swiperHeight={this.state.imgHeight} />
                <WhiteSpace />  
                <Swiper swiperList={this.state.textList} swiperType={this.state.textType} isAuto={this.state.textAuto} swiperHeight={this.state.textHeight}  />
                <WhiteSpace />
                <Grid gridData={this.state.gridData} />
                <WhiteSpace />
                <Button type="warning" onClick={this.onSubimg.bind(this)}>调取摄像头</Button> */}
                <Header headerTitle="首页" />
                <Footer children={this.state.childrenTab} />
            </div>
        )
    }
}

export default Index;