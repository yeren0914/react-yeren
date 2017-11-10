import React from 'react';


class List extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const list = this.props.listItems;
        const val = this.props.inputVal;
        return(
            <div>
                <div>
                    <label htmlFor="">要显示的输入内容</label>
                    <br/>
                    <span>{val}</span>
                </div>
                <ul>
                    {
                        list.map((el,i) => (
                            <li key={i}>{el}</li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default List;
