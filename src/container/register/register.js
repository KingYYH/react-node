import React from 'react'
import Logo from '../../component/logo/logo'
import { List, InputItem, Radio, WhiteSpace, Button } from 'antd-mobile'
import { connect } from 'react-redux'
import { register } from '../../redux/user.redux'
const RadioItem = Radio.RadioItem;

@connect(
    state=>state.user,
    { register }
)
class Register extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            user: '',
            pwd: '',
            repeatpwd: '',
            type: 'genius'
        }
    }
    getRegister() {
        this.props.register(this.state)
        console.log(this.state)
    }
    handleChange(key, val) {
        this.setState({
            [key]: val
        },()=>{
            console.log(this.state.user, this.state.pwd, this.state.repeatpwd )
        })
    }
    render() {
        return (
            <div>
                <Logo></Logo>
                <List>
                    <InputItem 
                        onChange={v=>this.handleChange('user',v)}
                    >用户</InputItem>
                    <InputItem
                        type='password'
                        onChange={v=>this.handleChange('pwd',v)}
                    >密码</InputItem>
                    <InputItem 
                         type='password'
                        onChange={v=>this.handleChange('repeatpwd',v)}
                    >确认密码</InputItem>
                    <RadioItem 
                        onChange={()=>this.handleChange('type','genius')}
                        checked={this.state.type=== 'genius'}
                    >牛人</RadioItem>
                    <RadioItem 
                        onChange={()=>this.handleChange('type','boss')}
                        checked={this.state.type=== 'boss'}
                    >Boss</RadioItem>
                    <WhiteSpace></WhiteSpace>
                    <Button type='primary' onClick={this.getRegister.bind(this)}>注册</Button>
                </List>
            </div>
        )
    }
}

export default Register