import React from 'react'
import {Link} from 'react-router-dom'
class List extends React.Component{
    render(){
        return(
            <div>
                列表页面
                <Link to="/home" >前往首页</Link>
            </div>
        )
    }
}

export default List