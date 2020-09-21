import React, { Component } from 'react'

import { Input, Button, message, Table } from 'antd';

import { _selectAs } from "../../core/server"

const { TextArea } = Input;
class As extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableShow: false,
      inputvalue: "",
      datasource: [],
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
    const res = await _selectAs(values)
    if (res.data.code === 200) {
      message.success('查询成功');
      var tmp_datasource = [];
      // 遍历数据 设置临时变量
      res.data.data.map((value, index) => {
        tmp_datasource.push({
          "key": index,
          "asname": Object.keys(value)[0],
          "procname": Object.values(value)[0],
        })
      });
      this.setState({
        // 修改数据
        datasource: tmp_datasource,
        // 查询到数据以后就把表格设置为可见
        tableShow: "true"
      })
    } else {
      message.error(res.data.message);
    }
  }

  select = () => {
    var tmp = { "tasklist": this.state.inputvalue }
    this.setState({
      // 查询到数据以后就把表格设置为可见
      tableShow: "true"
    })
    this.selectAs(tmp)
  }

  render() {
    return (
      <div>
        <h2>杀毒软件识别</h2>
        <br />
                填入tasklist 内容：
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

export default As;