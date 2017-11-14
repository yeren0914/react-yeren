import React from 'react';
import { Carousel } from 'antd-mobile';
import './img.scss';

class Swiper extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        const imgList = this.props.swiperList;
        const swiperType = this.props.swiperType;
        const classNameType = swiperType ? 'carousel-text' : 'carousel-img'
        const imgHieght =this.props.swiperHeight;
        const isAuto = this.props.isAuto;
        const hProp =imgHieght ? { imgHieght } : {};
        const showCount = swiperType ? imgList.map(t =>(
            <div key={t}>{t}</div>
        )) : imgList.map(i =>(
            <a  key={i} style={hProp}>
                <img
                    src={require(`./img/${i}.jpg`)}
                    alt=""
                />
            </a>
        ))
        return (
            <div>
                <Carousel
                    className={classNameType}
                    autoplay={isAuto}
                    infinite
                    vertical={swiperType}
                    dots={!swiperType}
                    selectedIndex={0}
                    swipeSpeed={35}
                    dotStyle={{marginBottom:'5px'}}
                    dotActiveStyle={{background:'red',marginBottom:'5px'}}
                >
                    {showCount}
                </Carousel>
            </div>
        );
    }
}

export default Swiper;
