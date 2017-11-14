import React from 'react';
import { SearchBar } from 'antd-mobile';
class Search extends React.Component {

    onSubmit(val){
        console.log('搜索内容'+val);
    };

    render() {
        return (
            <div>
                <SearchBar onSubmit={this.onSubmit.bind(this)} placeholder="search" maxLength={15} />
            </div>
        )
    }
}
export default Search;