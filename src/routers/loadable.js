// 按需加载路由
import React from 'react';
import Loadable from 'react-loadable';
import { Spin, message } from 'antd';

function Loading(props) {
  if (props.error) {
    message.error('系统错误，请稍后重试！');
  } else if (props.timedOut) {
    message.error('响应超时，请刷新重试！');
  } else if (props.pastDelay) {
    return (
      <div className="root-loading">
        <Spin></Spin>
      </div>
    );
  } else {
    return null;
  }
}

const loadComponent = com => {
  return Loadable({
    loader: com,
    loading: Loading
  });
};

export default loadComponent;
