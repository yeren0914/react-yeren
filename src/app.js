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
                {icon:require('./static/img/head1.jpg'),'text':'嘻哈猴'},
                {icon:require('./static/img/head1.jpg'),'text':'王老吉'},
                {icon:require('./static/img/head1.jpg'),'text':'百事可乐'},
                {icon:require('./static/img/head1.jpg'),'text':'AD概念'},
                {icon:require('./static/img/head1.jpg'),'text':'加多宝'},
                {icon:require('./static/img/head1.jpg'),'text':'泸州老窖'},
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