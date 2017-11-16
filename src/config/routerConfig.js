import React from 'react';
import ReactDOM from  'react-dom';
import {Router,Route,IndexRoute } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Bundle from './bundle';

import Index from 'bundle-loader?lazy!../containers/index/index.component';
import Util from '../helpers/util';
import { weChatConfig } from './wechatService';

import Home from 'bundle-loader?lazy!../containers/home/home.component';
import List from 'bundle-loader?lazy!../containers/router/list';

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

class RouterConfig extends React.Component {
    constructor(){
        super()
    }

    async componentDidMount(){
        await Util.isWX();//判断是否是微信
        await weChatConfig();
    }

    render(){
        return(
            <Router history={customHistory}>
                <div>
                    <Route exact path="/" component={loaderComp(Home)}/>
                </div>
            </Router>
        )
    }
}

export default RouterConfig;