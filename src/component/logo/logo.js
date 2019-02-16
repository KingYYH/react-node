import React from 'react'
import './logo.css'
class Logo extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            headImg: 'https://muaapp.oss-cn-hangzhou.aliyuncs.com/shop_for_u/head_images/head_1%403x.png'
        }
    }
    render() {
        let { headImg } = this.state
        return (
            <div className='logo-container'>
                <img src={headImg} alt=''/>
            </div>
        )
    }
}

export default Logo