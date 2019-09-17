import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from './container/App';
import * as serviceWorker from './serviceWorker';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'mobx-react';
import '@config/axios';
import appStore from '@store';
// import loadComponent from '@deploy/router/loadable';
import { createBrowserHistory } from 'history';
import zhCN from 'antd/es/locale-provider/zh_CN';
import { ConfigProvider } from 'antd';

const history = createBrowserHistory();
//全局路由跳转对象
window.appHistory = history;

//登录页面
// const Login = loadComponent(() => import('@container/login/index.component'));
// appStore.setIsAuthority(session.getItem('isAuthority').login);

const ProvideRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      // render = {props => {
      //     return appStore.isAuthority ?  <Component {...props}/> : <Redirect to={{pathname: '/login'}}/>;
      // }}
      render={props => <Component {...props} />}
    />
  );
};

const Index = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <Router history={history}>
        <Switch>
          <ProvideRoute path="/" component={App} />
        </Switch>
      </Router>
    </ConfigProvider>
  );
};

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
