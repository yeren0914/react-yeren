import React from 'react';
import Footer from '../../component/footer/footer.component';
import Swiper from '../../component/swiper/swiper.component';
import Search from '../../component/search/search.component';
import Grid from '../grid/grid.component';
import Bundle from '../../config/bundle';
import createBrowserHistory from 'history/createBrowserHistory';
import {Router,Route,IndexRoute } from 'react-router-dom';
import {WhiteSpace,Button} from 'antd-mobile';
class Home extends React.Component {
    constructor() {
        super()
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
                {icon:require('../../static/img/head1.jpg'),'text':'嘻哈猴'},
                {icon:require('../../static/img/head1.jpg'),'text':'王老吉'},
                {icon:require('../../static/img/head1.jpg'),'text':'百事可乐'},
                {icon:require('../../static/img/head1.jpg'),'text':'AD概念'},
                {icon:require('../../static/img/head1.jpg'),'text':'加多宝'},
                {icon:require('../../static/img/head1.jpg'),'text':'泸州老窖'}
            ],
            imgSrc:'http://pic49.nipic.com/file/20140927/19617624_230415502002_2.jpg',
            childrenTab:[
                {id:'1',iconName:'icon-bank',text:'首页',link:'/'},
                {id:'2',iconName:'icon-wechat',text:'微信',link:'/home'},
                {id:'3',iconName:'icon-gr',text:'个人中心',link:'/list'},
                {id:'4',iconName:'icon-money',text:'我的钱包',link:'/ToDoApp'}
            ]
        }
        
    }

    render() {
        return (
            <div>
                <Search />
                <Swiper swiperList={this.state.imgList} swiperType={false} isAuto={this.state.isAuto} swiperHeight={this.state.imgHeight} />
                <WhiteSpace />  
                <Swiper swiperList={this.state.textList} swiperType={this.state.textType} isAuto={this.state.textAuto} swiperHeight={this.state.textHeight}  />
                <WhiteSpace />
                <Grid gridData={this.state.gridData} />
                <WhiteSpace />
            </div>
        )
    }
}
export default Home;