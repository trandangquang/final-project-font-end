import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import React from 'react';


const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 24,
    }}
  />
);
const Loading = ({ children, isLoading, delay = 200 }) => {
  return (
    <Spin spinning={isLoading} delay={delay} indicator={antIcon}>
      {children}
    </Spin>
  );
};

export default Loading;
