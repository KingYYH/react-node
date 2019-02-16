import React from 'react'
import axios from 'axios'

// react-router4 提供
import { withRouter } from 'react-router-dom'

class AuthRoute extends React.Component{
    componentDidMount() {
        const publicList = ['/login', 'register']
        const pathname = this.props.location.pathname
        if (publicList.indexOf(pathname)<-1) {
            return null
        }
        console.log(this.props)
        // 是否跳转
        // 现在的url地址 login是不需要跳转的
        // 用户的type 身份是boss还是牛人
        // 用户是否完善信息 (选择头像，个人简介)
        axios.get('/user/info').then((res)=>{
            if (+res.status === 200) {
                if (+res.data.code === 0) {
                    // 有登录信息
                    console.log('有信息')
                } else {
                    this.props.history.push('/login')
                }
                console.log(res.data)
            }
        })
    }
    render() {
        return (
            null
        )
    }
}

export default withRouter(AuthRoute)