import React from 'react';
import { NavBar, Icon,Popover } from 'antd-mobile';
import './head.scss';
const Item = Popover.Item;
const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;
class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        visible: false,
        selected: '',
    };
    onSelect = (opt) => {
        // console.log(opt.props.value);
        this.setState({
            visible: false,
            selected: opt.props.value,
        });
    };
    handleVisibleChange = (visible) => {
        this.setState({
            visible,
        });
    };

    isShowBack(){
        const leftIcon = this.props.headerTitle =='首页' ? [] :  [<Icon key="2" type="left" />];
        return leftIcon;
    };

    render() {
        const headTit = this.props.headerTitle;
        return (
            <div className="head-box">
                <NavBar
                    mode="light"
                    leftContent={this.isShowBack()}
                    onLeftClick={() => console.log('onLeftClick')}
                    rightContent={
                        <Popover mask
                            overlayClassName="fortest"
                            overlayStyle={{ color: 'currentColor' }}
                            visible={this.state.visible}
                            overlay={[
                                (<Item key="4" value="scan" icon={myImg('tOtXhkIWzwotgGSeptou')} data-seed="logId">扫一扫</Item>),
                                (<Item key="5" value="special" icon={myImg('PKAgAqZWJVNwKsAJSmXd')} style={{ whiteSpace: 'nowrap' }}>二维码</Item>),
                                (<Item key="6" value="button ct" icon={myImg('uQIYTFeRrjPELImDRrPt')}>
                                    <span style={{ marginRight: 5 }}>帮助中心</span>
                                </Item>),
                            ]}
                            align={{
                                overflow: { adjustY: 0, adjustX: 0 },
                                offset: [-10, 0],
                            }}
                            onVisibleChange={this.handleVisibleChange}
                            onSelect={this.onSelect}
                        >
                        <div style={{
                            height: '100%',
                            padding: '0 15px',
                            marginRight: '-15px',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                        >
                            <Icon type="ellipsis" />
                        </div>
                    </Popover>}
                >{headTit}</NavBar>
            </div>
        )
    }
}
export default Header;

