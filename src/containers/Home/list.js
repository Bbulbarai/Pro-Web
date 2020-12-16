import React from "react";
import { Icon } from "react-fa";
import { Row, Col, Card, Carousel, Table, Button } from "antd";
import { isMobileOnly } from 'react-device-detect';
import { Slider, Tabs, ProductSwiper, BrandSwiper } from "../../components";
import { WIDGET_SLUGS, SOCIAL_IDS } from "../../utils/Consts";

const isMobile = window.innerWidth <= 1024;
let params = {};
if (isMobile) {
  params = {
    slidesPerView: 2,
    spaceBetween: 10,
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };
} else {
  params = {
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };
}
const { Meta } = Card;

class Homepage extends React.Component {
  render() {
    return (
      <div className="main-container">
        <div className="content">
          {/* <Slider data={this.props.bannerList} /> */}
          <div>
            <div className="main-gutter">
              <h3 className="div-title">Сүүлийн мэдээ</h3>
            </div>
            {/* <Tabs data={this.props.newsList} /> */}
            <div className="main-gutter">
              <h3 className="div-title">Онцлох бараа</h3>
            </div>
           {/*  <ProductSwiper data={this.props.productList} /> */}
            <div className="main-gutter">
              <h3 className="div-title">Хамтрагч байгууллагууд</h3>
            </div>
            {/* <BrandSwiper data={this.props.brandList} /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage



