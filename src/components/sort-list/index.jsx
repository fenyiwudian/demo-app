import React from 'react';
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
export default class SortList extends React.Component {
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
