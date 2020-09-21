import React, { Component } from 'react';

import { Input, Button } from 'antd';

const { TextArea } = Input;

function encodeUnicode(str) {
  var res = [];
  for (var i = 0; i < str.length; i++) {
    res[i] = ("00" + str.charCodeAt(i).toString(16)).slice(-4);
  }
  return "\\u" + res.join("\\u");
}

function decodeUnicode(str) {
  str = str.replace(/\\/g, "%");
  return unescape(str);
}
class Unicode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputvalue: '',
      outputvalue: ''
    };
  }

  decode = () => {
    var tmpstr = "";
    tmpstr = decodeUnicode(this.state.inputvalue)
    this.setState({
      outputvalue: tmpstr
    })
    console.log(this.state.inputvalue)
    console.log(this.state.outputvalue)
  }
  encode = () => {
    var tmpstr = "";
    tmpstr = encodeUnicode(this.state.inputvalue)
    this.setState({
      outputvalue: tmpstr
    })
    console.log(this.state.inputvalue)
    console.log(this.state.outputvalue)
  }
  exchange = () => {
    this.setState({
      inputvalue: this.state.outputvalue,
      outputvalue: ''
    })
    console.log(this.state.inputvalue)
    console.log(this.state.outputvalue)
  }
  render() {
    return (
      <div>
        <h2>Unicode编码解码</h2>
        <br />
                内容：
        <TextArea rows={4} value={this.state.inputvalue}
          onChange={e => this.setState({ inputvalue: e.target.value })}
        />
        <Button type="primary" onClick={this.decode}>解码</Button>
        <Button type="primary" onClick={this.encode}>编码</Button>
        <Button type="primary" onClick={this.exchange}>交换</Button>
        <br />
                结果：
        <TextArea rows={4} value={this.state.outputvalue}
          onChange={e => this.setState({ outputvalue: e.target.value })}
        />
      </div>
    );
  }
}

export default Unicode;