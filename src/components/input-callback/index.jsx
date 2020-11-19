import React from 'react';
import { Input } from "remax/one";

export default class InputCallback extends React.Component {
  state = { inputValue: '' }
  handleInput(value) {
    this.setState({ inputValue: value });
    // 如果注释掉这个返回值可以正常工作
    return 'something';
  }
  render() {
    return <Input onInput={(e) => this.handleInput(e.target.value)}
      style={{ height: '2rem', boxShadow: '0 0 0 1px gray', margin: '1rem' }}
      defaultValue={this.state.value}
      placeholder='请输入内容'>
    </Input>
  }
}