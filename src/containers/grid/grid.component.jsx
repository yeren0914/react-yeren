import React from 'react';
import { Link,IndexRoute } from 'react-router-dom';
import { Grid } from 'antd-mobile';
import './grid.scss';

class GridList extends React.Component {
    constructor(props){
        super(props)
    }

    //前往详情页面
    goDetail(item){
        console.log(item);
    }

    render(){
        const gridData = this.props.gridData;
        return(
            <div>
                <Grid data={gridData} activeStyle={false} columnNum="3"   
                renderItem={ gridData =>(
                    // <div className="grid-list"  key={gridData.id} onClick={this.goDetail.bind(this,gridData)}> 
                    //     <img src={ gridData.icon} className="grid-img" alt=""/>
                    //     <div className="grid-text" >
                    //         <span>{gridData.text}</span>
                    //     </div>
                    // </div>
                    <Link to={{
                        pathname: '/money',
                        search: '?name='+escape(gridData.text)+'&sex='+gridData.sex+'&phone='+gridData.phone+'&dateTime='+gridData.dateTime+'&pwd='+gridData.pwd,
                    }}
                    className="grid-list"  onClick={()=> this.goDetail.bind(this)}>
                         <img src={ gridData.icon} className="grid-img" alt=""/>
                            <div className="grid-text" >
                            <span>{gridData.text}</span>
                        </div>
                    </Link>
                )}
                />
            </div>
        )
    }
}

export default GridList;