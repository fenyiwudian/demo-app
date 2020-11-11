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
      <SortList></SortList>
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

const initialList = [
  {
    text: '第一项',
  },
  {
    text: '第二项',
  },
  {
    text: '第三项',
  },
  {
    text: '第四项',
  },
  {
    text: '第五项',
  }
];
class SortList extends React.Component {
  state = {
    list: initialList,
  }
  resort(index, step) {
    const { list } = this.state;
    const targetIndex = index + step;
    if (targetIndex < 0 || targetIndex > list.length - 1) {
      return;
    }
    const newList = [...list];
    const swap = newList[targetIndex];
    newList[targetIndex] = newList[index];
    newList[index] = swap;
    this.setState({ list: newList });
  }
  render() {
    const { list } = this.state;
    return <View>
      <View>Remax Sort List:</View>
      {list.map((item, index) => {
        return <View key={item.text} style={{ display: 'flex', justifyContent: 'space-between' }}>
          <View>{index}</View>
          <View>{index + item.text}</View>
          {index > 0
            ? <View onTap={() => this.resort(index, -1)}>上移</View>
            : <View>N/A</View>}
          {index < list.length - 1
            ? <View onTap={() => this.resort(index, 1)}>下移</View>
            : <View>N/A</View>}
        </View>
      })}
    </View>
  }
}
