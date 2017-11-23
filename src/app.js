import React from 'react';
import ReactDOM from  'react-dom';
import { BrowserRouter, Router,Route, Link,IndexRoute } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import RouterConfig from './config/routerConfig';
import Bundle from './config/bundle';
import Util from './helpers/util';
import {weChatConfig} from './config/wechatService';

import 'antd-mobile/dist/antd-mobile.css';
import './static/css/style.scss';

import Header from './component/head/head.component';
import Footer from './component/footer/footer.component';
import Home from './containers/home/home.component';
import List from './containers/router/list';
import Detail from './containers/detail/detail.component';
import Money from './containers/money/money.component';
import PeoCenter from './containers/peocenter/peocenter.component';

const customHistory = createBrowserHistory()
//按需 加载封装
function loaderComp(comp){
    const according = (pro) => (
        <Bundle load={comp}>
            {(Container) => <Container {...pro}/>}
        </Bundle>
    )
    return according;
}

class App extends React.Component {
    constructor(){
        super();
        this.state={
            imgList:['img1','img2','img3','img4','img3'],
            imgHeight:136,
            isAuto:true,
            textList:['我不想这样活着','人没梦想和咸鱼有啥分别','不卑不亢 不慌不忙','难道说60岁后再去寻找我想要的自由'],
            textHeight:40,
            textAuto:true,
            textType:true,
            gridData:[
                {icon:require('./static/img/head1.jpg'),'text':'百事可乐',sex:0,phone:'15678888882',dateTime:'1992-09-01',pwd:'123456'},
                {icon:require('./static/img/head1.jpg'),'text':'无所事事',sex:1,phone:'15678888881',dateTime:'1991-11-01',pwd:'123456'},
                {icon:require('./static/img/head1.jpg'),'text':'无事生非',sex:0,phone:'15678888883',dateTime:'1993-08-01',pwd:'123456'},
                {icon:require('./static/img/head1.jpg'),'text':'春去秋来',sex:0,phone:'15678888884',dateTime:'1994-01-01',pwd:'123456'},
                {icon:require('./static/img/head1.jpg'),'text':'万里无云',sex:1,phone:'15678888885',dateTime:'1995-02-01',pwd:'123456'},
                {icon:require('./static/img/head1.jpg'),'text':'叶公好龙',sex:0,phone:'15678888886',dateTime:'1996-03-01',pwd:'123456'},
            ],
            imgSrc:'http://pic49.nipic.com/file/20140927/19617624_230415502002_2.jpg',
            childrenTab:[
                {id:'1',iconName:'icon-bank',text:'首页',link:'/'},
                {id:'2',iconName:'icon-wechat',text:'详情页面',link:'/detail'},
                {id:'3',iconName:'icon-money',text:'我的钱包',link:'/money'},
                {id:'4',iconName:'icon-gr',text:'个人中心',link:'/peocenter'}
            ]
        }
    }
   
    render(){
        return(
            <div>
                <Header headerTitle="首页" />
                 <BrowserRouter >
                    <div >
                        <main className="content-box">
                            <Route path="/" exact component={Home}  />
                            <Route path="/PeoCenter"  component={PeoCenter} />
                            <Route path="/header"  component={Header} />
                            <Route path="/Footer"  component={Header} />
                            <Route path="/money"  component={Money} />
                            <Route path="/detail"  component={Detail} />
                        </main>
                        <Footer children={this.state.childrenTab} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

ReactDOM.render(<App />,document.getElementById('app'));