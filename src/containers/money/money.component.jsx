import React from 'react';
import { Toast,Button,Picker,DatePicker, List, InputItem, WhiteSpace  } from 'antd-mobile';
import './money.scss';
const sexType =[
    {label:'男',value:1},
    {label:'女',value:0}
]

class Money extends React.Component{
    constructor(){
        super();
        this.state={
            thisSex:0,
            data:'',
            userName:''
        }
    }

    setUserName(val){
        this.setState({
            userName:val
        })
    }

    subInfo(){
        Toast.fail('请填写用户信息', 1);
        
    }

    render(){
        const minD =  new Date('1989-01-01');
        return(
            <div>
                <div className="head-img">
                    <img src={require('../../static/img/head1.jpg')} />
                </div>
                <List renderHeader={() => '用户基本信息'}>
                    <InputItem placeholder="请输入用户姓名" onBlur={this.setUserName.bind(this)} >
                        姓名
                    </InputItem>
                    <Picker 
                        data={sexType} 
                        cols={1} 
                        className="forss"
                        onOk={ e=>console.log('ok',e)}
                        value={this.state.thisSex}
                        onOk={ v => this.setState({thisSex:v})}
                    >
                        <List.Item arrow="horizontal">性别</List.Item>
                    </Picker>
                    <DatePicker
                        mode="date"
                        title="选择日期"
                        extra="请选择出生年月"
                        minDate={minD}
                        value={this.state.date}
                        onChange={date => this.setState({ date })}
                        >
                        <List.Item arrow="horizontal">出生日期</List.Item>
                    </DatePicker>
                </List>
                <List renderHeader={() => '用户资料'}>
                    <InputItem type="bankCard" >银行卡</InputItem>
                    <InputItem type="phone"  placeholder="请输入手机号码" >手机号码</InputItem>
                    <InputItem type="password" placeholder="请输入密码" >密码</InputItem>
                </List>
                <WhiteSpace />
                <WhiteSpace />
                <Button type="primary" onClick={this.subInfo} >提交</Button>
            </div>
        )
    }
}

export default Money;