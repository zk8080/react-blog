//路由按需加载
import loadComponent from './loadable';
// import {OrderImportComponent, OrderPackageComponent, PickingBellComponent} from '../../container/workflow';
/**
 * webpackChunkName: webpack按需加在打包时的chunk名字
 */

//首页
const Home = loadComponent(() =>
  import(/* webpackChunkName: "Home" */ '@container/Home/index.component')
);

const routers = [
  {
    path: '/home',
    exact: true,
    component: Home,
    title: '首页',
    key: 'home'
  }
];

export default routers;
