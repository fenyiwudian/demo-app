import * as React from 'react';
import { View, Text, Image } from 'remax/one';
import styles from './index.css';
// 这里导入了一个umd的包，一般情况下会导入npm安装的包，这里为了演示，导入的是一个手写的简单包
import { Core, Inner, Decline, Hub } from '../../../lib/demo'
import { a } from '../../../lib/a';

export default () => {
  
  console.log(Core, Inner, Decline, Hub, a);
  console.log(process.env);
  return (
    <View className={styles.app}>
      <View className={styles.header}>
        <Image
          src="https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*OGyZSI087zkAAAAAAAAAAABkARQnAQ"
          className={styles.logo}
          alt="logo"
        />
        <View className={styles.text}>
          编辑 <Text className={styles.path}>src/pages/index/index.js</Text>{' '}
          开始
        </View>
      </View>
    </View>
  );
};
