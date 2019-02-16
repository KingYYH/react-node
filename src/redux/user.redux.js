import axios from 'axios'

const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'

// 初始信息
const initState = {
  isAuth: false,
  msg: '',
  user: '',
  pwd: '',
  type: ''
}

// reducer
export function user(state=initState, action) {
  switch(action.type) {
    case REGISTER_SUCCESS:
      return {...state, msg: '', isAuth: true, ...action.payload}
    case ERROR_MSG:
      return {...state, isAuth: false, msg: action.msg}
    default:
      return state
  }
}
function errorMsg(msg){
  return {msg, type: ERROR_MSG}
}

function registerSuc(data) {
  return { type: REGISTER_SUCCESS, playload: data }
}

export function register({user,pwd,registerpwd,type}) {
  if (!user || !pwd || !type) {
    return errorMsg('用户名，密码必须输入')
  }
  if (pwd !== registerpwd) {
    return errorMsg('两次密码不一致')
  }

  return dispatch=>{
    axios.post('/user/register',{user, pwd, type})
      .then((res)=>{
        if (res.status === 200 && res.data.code === 0) {
          dispatch(registerSuc({user, pwd, type}))
        } else {
          dispatch(errorMsg(res.data.msg))
        }
      })
  }
}