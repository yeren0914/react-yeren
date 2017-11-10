
import React from 'react';
import ReactDOM from  'react-dom';
import { BrowserRouter as Router, Route,IndexRoute } from 'react-router-dom';
import ToDoApp from './containers/todo.js';
import 'antd-mobile/dist/antd-mobile.css';
import Home from './containers/router/home';
import List from './containers/router/list'
import history from 'history'



class App extends  React.Component{
    render(){
        return(
            <div>
                <ToDoApp />
            </div>
        )
    }
}

ReactDOM.render((
    <Router history={history}>
        <div>
            <Route exact path="/" component={App}/>
            <Route path="/home" component={Home}/>
            <Route path="/list" component={List}/>
        </div>
    </Router>
),document.getElementById('app'));

// class App extends React.Component {
//     render(){
//         return(
//             <div>
//                 <ToDoApp />
//             </div>
//         );
//     }
// }
//
 //ReactDOM.render(<App />,document.getElementById('app'))