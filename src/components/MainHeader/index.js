import React, { Component } from "react";
import { Affix, Button, Icon, Popover } from "antd";
import { Link, withRouter } from "react-router-dom";
import logo from "../../scss/assets/orgilLogo.jpg";

class MainHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  generateMenu = (name, route) => {
    return (
      <li>
        <Link to={route}>
          {name}
        </Link>
      </li>
    );
  }

  render() {
    return (
      <Affix>
        <div className="main-header">
          <div className="main-gutter">
            <div className="header-wrap">
              <div className="" style={{ display: "flex" }}>
                <div className="logo">
                  <Link to="/">
                    <img src={logo} alt="logo" height="60px" />
                  </Link>
                </div>
                <div className="main-menus">
                  <ul>
                    <li>
                      <Link to="/">
                        Нүүр хуудас
                      </Link>
                    </li>
                    <li>
                      <Link to="/productList">
                        Бараа
                      </Link>
                    </li>
                    {this.generateMenu("Багш", "/teacherList")}
                    {this.generateMenu("Сурагч", "/student")}
                    {this.generateMenu("Журнал", "/journal")}
                    {this.generateMenu("Хичээл", "/lesson")}
                    {this.generateMenu("Түвшин", "/sublesson")}
                    {this.generateMenu("Хувиар", "/schedule")}
                    {this.generateMenu("Төлбөр", "/transaction")}
                    {/* <li>
                      <Link to={"/"}>
                        <Button type="dashed" icon="laptop" size="large">Интернэт банк</Button>
                      </Link>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="button-and-lang">
                <input
                  type="text"
                  name="search"
                  placeholder="Хайлт хийх"
                />
                <span>
                  <Button
                    type="dashed"
                    size="default"
                  >
                    <Icon type="search" />
                  </Button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Affix>
    );
  }
}

export default MainHeader
