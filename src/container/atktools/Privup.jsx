import React, { Component } from 'react'

import { Input, Button, message, Table } from 'antd';

import { _selectPrivup } from "../../core/server"

const { TextArea } = Input;
class Privup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableShow: false,
      inputvalue: "",
      datasource: [{
        key: "1",
        "asname": "360",
        "procname": "360safe.exe"
      }],
      columns: [{
        title: "杀软名称",
        dataIndex: "asname",
        key: "asname"
      }, {
        title: "进程名",
        dataIndex: "procname",
        key: "procname"
      }
      ]
    };
  }

  async selectAs(values) {
    const res = await _selectPrivup(values)
    console.log(res)
    if (res.data.code === 200) {
      message.success('查询成功');
      this.setState({
        // 查询到数据以后就把表格设置为可见
        tableShow: "true"
      })

    } else {
      message.error('查询失败');
    }
  }

  select = () => {
    var tmp = { "tasklist": this.state.inputvalue }
    console.log(tmp)
    this.setState({
      // 查询到数据以后就把表格设置为可见
      tableShow: "true"
    })
    this.selectAs(tmp)
  }

  render() {
    return (
      <div>
        <h2>提权辅助</h2>
        <br />
                填入systeminfo 内容：
        <TextArea rows={10} value={this.state.inputvalue}
          onChange={e => this.setState({ inputvalue: e.target.value })}
        />
        <Button type="primary" onClick={this.select}>查询</Button>

        {
          this.state.tableShow ? (
            <Table dataSource={this.state.datasource} columns={this.state.columns} />
          ) : null
        }
      </div>
    );
  }
}

export default Privup;