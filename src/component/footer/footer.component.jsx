import React from 'react';
import { Link } from 'react-router-dom'
import './footer.scss';
class Footer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const children = this.props.children;
        return (
            <div className="tab-box">
            {
                children.map((item) => {
                   return <div key={item.id} className="tab-item" className={ item.id ==1 ? 'tab-item active' :'tab-item' }  >
                        <i className={'tab-icon' +' '+ item.iconName}></i>
                        <Link to={item.link}>{item.text}</Link>
                    </div>
                })
            }
            </div>
        )
    }
}
export default Footer;