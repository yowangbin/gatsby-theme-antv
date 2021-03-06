import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import styles from './PageLoading.module.less';

const PageLoading: React.FC = () => (
  <div className={styles.container}>
    <LoadingOutlined className={styles.loading} />
  </div>
);

export default PageLoading;
