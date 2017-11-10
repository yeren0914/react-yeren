import React from 'react';
import List from '../containers/list'
import Edit from  '../containers/edit';
import Demo from '../containers/demo.jsx'
import {Button} from 'antd-mobile'
import { Link } from 'react-router-dom'
import './style.scss'
class ToDoApp extends React.Component {

    componentWillMount(){
        this.setState({
            list:['ting1','ting2','ting3'],
            newVal:'哇哈哈'
        })
    }

    changeInp(val){
        this.setState({
            newVal:val
        })
    }

    render() {
        return(
            <div className="box">
                <h5>my to do app</h5>
                <Demo />
                <hr/>
                List goes here
                <List listItems={this.state.list} inputVal={this.state.newVal} />
                <Link to="home" >前往首页</Link>
                <Link to="list" >前往列表</Link>
                <span>绑定的信息</span>
                <label htmlFor="">{this.state.val} </label>
                <Edit changeInp={this.changeInp.bind(this)} />
            </div>
        )
    }
}


export default ToDoApp;