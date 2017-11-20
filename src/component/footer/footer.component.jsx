import React from 'react';
import { Link,NavLink } from 'react-router-dom'
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
                    return <NavLink key={item.id} to={item.link} activeClassName='active' className="tab-item">
                            <i className={'tab-icon' +' '+ item.iconName}></i>
                            <span>{item.text}</span>
                    </NavLink>
                })
            }
            </div>
        )
    }
}
export default Footer;