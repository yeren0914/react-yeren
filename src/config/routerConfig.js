import React from 'react';
import ReactDOM from  'react-dom';
import {Router,Route,IndexRoute } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Bundle from './bundle';

import Index from 'bundle-loader?lazy!../containers/index/index.component';
import Util from '../helpers/util';
import { weChatConfig } from './wechatService';

import ToDoApp from 'bundle-loader?lazy!../containers/todo.js';
import Home from 'bundle-loader?lazy!../containers/router/home';
import List from 'bundle-loader?lazy!../containers/router/list';

const customHistory = createBrowserHistory()

function loaderComp(comp){
    const according = (props) => (
        <Bundle load={comp}>
            {(Container) => <Container {...props}/>}
        </Bundle>
    )
    return according;
}

class RouterConfig extends React.Component {

    async componentDidMount(){
        await Util.isWX();//判断是否是微信
        await weChatConfig();
    }

    render(){
        return(
            <Router history={customHistory}>
                <div>
                    <Route exact path="/" component={loaderComp(Index)}/>
                    <Route path="/ToDoApp" component={loaderComp(ToDoApp)}/>
                    <Route path="/home" component={loaderComp(Home)}/>
                    <Route path="/list" component={loaderComp(List)}/>
                </div>
            </Router>
        )
    }
}

export default RouterConfig;