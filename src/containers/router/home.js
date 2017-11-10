import React from 'react'
import {Link} from 'react-router-dom'
class Home extends React.Component{
    render(){
        return(
            <div>
                首页内容嘻嘻
                <br/>
                <Link to="/" >返回APP</Link>
            </div>
        )
    }
}

export default Home
