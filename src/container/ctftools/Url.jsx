import React,{Component} from 'react';

import { Input,Button } from 'antd';
import Base64  from 'base-64';

const { TextArea } = Input;

class Tools_Url extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            inputvalue: '',
            outputvalue: ''
        };
    }

    decode =()=>{
        var tmpstr = "";
        tmpstr = decodeURI(this.state.inputvalue)
        this.setState({
            outputvalue : tmpstr
        })
        console.log(this.state.inputvalue)
        console.log(this.state.outputvalue)
    }
    encode =()=>{
        var tmpstr = "";
        tmpstr = encodeURI(this.state.inputvalue)
        this.setState({
            outputvalue : tmpstr
        })
        console.log(this.state.inputvalue)
        console.log(this.state.outputvalue)
    }
    exchange =()=>{
        var tmpstr = "";
        tmpstr = this.state.inputvalue
        this.setState({
            inputvalue : this.state.outputvalue,
            outputvalue : ''
        })
        console.log(this.state.inputvalue)
        console.log(this.state.outputvalue)
    }
    render() {
        return (
            <div>
                <h2>Url编码解码</h2>
                <br/>
                内容：
                <TextArea rows={4} value={this.state.inputvalue}
                onChange={e => this.setState({ inputvalue: e.target.value })}
                />
                <Button type="primary" onClick={this.decode}>解码</Button>
                <Button type="primary" onClick={this.encode}>编码</Button>
                <Button type="primary" onClick={this.exchange}>交换</Button>
                <br/>
                结果：
                <TextArea rows={4} value={this.state.outputvalue}
                onChange={e => this.setState({ outputvalue: e.target.value })}
                />
            </div>
        );
    }
}

export default Tools_Url;