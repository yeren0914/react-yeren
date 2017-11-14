import React from 'react';
import { Grid } from 'antd-mobile';
import './grid.scss';

class GridList extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const gridData = this.props.gridData;
        return(
            <div>
                <Grid data={gridData} activeStyle={false} columnNum="4" 
                renderItem={ gridData =>(
                    <div  className="grid-list" >
                        <img src={ gridData.icon} className="grid-img"  alt=""/>
                        <div className="grid-text" >
                            <span>{gridData.text}</span>
                        </div>
                    </div>
                )}
                />
            </div>
        )
    }
}

export default GridList;