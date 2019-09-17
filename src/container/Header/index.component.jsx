import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { menuData } from './index.data';
import './index.less';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: '0-0'
    };
  }

  renderMenu = arr => {
    return arr.map(item => {
      return (
        <Menu.Item key={item.key}>
          <Icon type={item.icon} />
          <Link to={item.url}>{item.title}</Link>
        </Menu.Item>
      );
    });
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <div className="header">
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          {this.renderMenu(menuData)}
        </Menu>
      </div>
    );
  }
}

export default Index;
