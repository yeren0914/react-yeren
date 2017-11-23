import React from 'react';
import { WingBlank,Toast,Button,Picker,DatePicker, List, InputItem, WhiteSpace  } from 'antd-mobile';
import queryString from 'query-string';
import './money.scss';
const sexType =[
    {label:'男',value:1},
    {label:'女',value:0}
]

class Money extends React.Component{
    constructor(props){
        super(props);
        //获取url 传值
        const query = this.query = queryString.parse(unescape(location.search));
        const getTime = new Date(query.dateTime);
        this.state={
            userName:query.name || '',
            userSex:[parseInt(query.sex)]|| 0,
            userPhone:query.phone || '',
            userDate:getTime || '',
            userPwd:query.pwd || ''
        }
    }
    
    //设置用户名称
    setUserName(value){
        this.setState({
            userName:value
        })
    }

    subInfo(){
        console.log(this.state.userName);
        //Toast.fail('请填写用户信息', 1);
        
    }

    render(){
        const minD =  new Date('1989-01-01');
        return(
            <div>
                <div className="head-img">
                    <img src={require('../../static/img/head1.jpg')} />
                </div>
                <List renderHeader={() => '用户基本信息'}>
                    <InputItem placeholder="请输入用户姓名" value={this.state.userName} onChange={(event) =>this.setUserName.call(this,event)} >
                        姓名
                    </InputItem>
                    <Picker 
                        data={sexType} 
                        cols={1} 
                        className="forss"
                        onOk={ e=>console.log('ok',e)}
                        value={this.state.userSex}
                        onOk={ v => this.setState({userSex:v})}
                    >
                        <List.Item arrow="horizontal">性别</List.Item>
                    </Picker>
                    <DatePicker
                        mode="date"
                        title="选择日期"
                        extra="请选择出生年月"
                        minDate={minD}
                        value={ this.state.userDate}
                        onChange={date => this.setState({ date })}
                        >
                        <List.Item arrow="horizontal">出生日期</List.Item>
                    </DatePicker>
                </List>
                <List renderHeader={() => '用户资料'}>
                    <InputItem type="bankCard" >银行卡</InputItem>
                    <InputItem type="phone"  placeholder="请输入手机号码" value={this.state.userPhone} >手机号码</InputItem>
                    <InputItem type="password" placeholder="请输入密码"  value={this.state.userPwd}>密码</InputItem>
                </List>
                <WhiteSpace />
                <WhiteSpace />
                <WingBlank>
                    <Button type="primary" onClick={ this.subInfo.bind(this)} >提交</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Money;