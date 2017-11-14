import React from 'react';
import ReactDOM from  'react-dom';
import RouterConfig from './config/routerConfig';
import 'antd-mobile/dist/antd-mobile.css';


class App extends React.Component {
    render(){
        return(
            <div>
                <RouterConfig />
            </div>
        );
    }
}

ReactDOM.render(<App />,document.getElementById('app'));