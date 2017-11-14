import React from 'react';
class Home extends React.Component {
    constructor() {
        super()
        this.state ={
            listData:[
                {id:1,name:'嘻嘻哈',age:11},
                {id:1,name:'嘻嘻哈',age:11},
                {id:1,name:'嘻嘻哈',age:11},
                {id:1,name:'嘻嘻哈',age:11},
                {id:1,name:'嘻嘻哈',age:11},
                {id:1,name:'嘻嘻哈',age:11},
                {id:1,name:'嘻嘻哈',age:11},
                {id:1,name:'嘻嘻哈',age:11}
            ]
        };
        
    }

    render() {
        return (
            <div>
                <h6>home 表头</h6>
                <table>
                    <tr>
                        <th>序号</th>
                        <th>名称</th>
                        <th>年龄</th>
                    </tr>
                </table>
            </div>
        )
    }
}
export default Home;