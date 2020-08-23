import React, { Component } from 'react';

import { Input, Button } from 'antd';
import { message, Space } from 'antd';

const { TextArea } = Input;

function stringToHex(str) {
  var val = "";
  for (var i = 0; i < str.length; i++) {

    if (val == "")
      val = str.charCodeAt(i).toString(16);
    else
      val += str.charCodeAt(i).toString(16);
  }
  return val;
}

function hexToString(str) {
  const buf = new Buffer(str, 'hex');
  return buf.toString('utf8');
}

class Tools_Hex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputvalue: '',
      outputvalue: ''
    };
  }

  decode = () => {
    try {
      var tmpstr = "";
      tmpstr = hexToString(this.state.inputvalue)
      this.setState({
        outputvalue: tmpstr
      })
      console.log(this.state.inputvalue)
      console.log(this.state.outputvalue)
    } catch (error) {
      message.error('转换失败');
    }

  }
  encode = () => {
    var tmpstr = "";
    tmpstr = stringToHex(this.state.inputvalue)
    this.setState({
      outputvalue: tmpstr
    })
    console.log(this.state.inputvalue)
    console.log(this.state.outputvalue)
  }
  exchange = () => {
    try {

    } catch (error) {

    }
    var tmpstr = "";
    tmpstr = this.state.inputvalue
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
        <h2>十六进制编码解码</h2>
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

export default Tools_Hex;