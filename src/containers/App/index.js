/* eslint-disable no-unreachable */
/* eslint-disable no-unused-expressions */
/* eslint-disable import/first */
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Layout, Icon } from "antd";
import { Route, Switch, BrowserRouter as Router, Link } from "react-router-dom";
import PropTypes from "prop-types";
import ScrollToTop from "react-router-scroll-top";
import Notfound from "../Exception/404";
import { MainHeader} from "../../components";
import 'react-notifications-component/dist/theme.css';

import {
  Banner as BannerModel,
} from "../../models";
import {
  Home,
  TeacherList,
  Student,
  Journal,
  Lesson,
  Sublesson,
  Schedule,
  Transaction,
} from "../";

import ReactNotification from 'react-notifications-component';

import "../../scss/app.scss";
import logo from "../../scss/assets/106.png";
import "react-toastify/dist/ReactToastify.css";


class App extends Component {
  state = {
    dataSource: false,
    isOpen: false,
    visible: false,
    loginVisible: false,
  };

  componentWillMount() {

  }

  toggleMenu = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  registerModal = () => {
    this.setState({ visible: !this.state.visible });
  }

  loginModal = () => {
    this.setState({ loginVisible: !this.state.loginVisible });
  }


  render() {
    const { visible, loginVisible } = this.state;
    try {
      return (
        <Layout style={{ minHeight: '100vh' }}>
         <Router>
                <Layout>
                  <ScrollToTop>
                    <div className="mobileToggle">
                      <Link to="/">
                        <img src={logo} alt="logo" height="60px" />
                      </Link>
                      <button onClick={() => this.toggleMenu()}>
                        <Icon type={this.state.isOpen ? "close" : `menu-unfold`} />
                      </button>
                    </div>
                    <div className={this.state.isOpen ? `open headers` : "headers"}>
                      <MainHeader {...this.props} />
                    </div>
                    <Layout.Content>
                      <div>
                        <Switch>
                          <Route exact path="/" component={Home} />
                          <Route path="/teacherList" component={TeacherList} />
                          <Route path="/student" component={Student} />
                          <Route path="/journal" component={Journal} />
                          <Route path="/lesson" component={Lesson} />
                          <Route path="/sublesson" component={Sublesson} />
                          <Route path="/schedule" component={Schedule} />
                          <Route path="/transaction" component={Transaction} />
                          <Route path="*" component={Notfound} />
                        </Switch>
                      </div>
                    </Layout.Content>
                  </ScrollToTop>
                </Layout>
              </Router>
        </Layout>
      );
    } catch (error) {
      return console.log('error: ', error);
    }
  }
}

App.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default App;