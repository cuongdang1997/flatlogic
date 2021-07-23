import React from 'react';
import './style.css';
import {connect} from 'react-redux';
import LoginPanel from '../../components/loginPanel/index.jsx';
import LoginSuccess from '../../components/loginSuccess';
import Header from '../../components/common/header/index.jsx';
import Footer from '../../components/common/footer/index.jsx';
class Home extends React.Component{
  render(){
    const {isLogin,username,password,toLoginIn,toLoginOut,activityList,changeUsername,changePassword}=this.props;
    return (
      <div>
        <Header/>
        { isLogin?<LoginSuccess toLoginOut={toLoginOut} list={activityList}/>
        :<LoginPanel toLoginIn={toLoginIn} username={username} password={password} changeUsername={changeUsername} changePassword={changePassword}/> }
        <Footer/>
      </div>
    )
  }
}
const mapStateToProps=(state)=>{
  return {
     isLogin:state.isLogin,
     username:state.username,
     password:state.password,
     activityList:state.activityList
  }
}
const mapStateToDispatch=(dispatch)=>{
  return {
    toLoginIn:(username,password)=>{
      dispatch({type:'TO_LOGIN_IN',username,password});
    },
    toLoginOut:()=>{
      dispatch({type:'TO_LOGIN_OUT'});
    },
    changeUsername:(e)=>{
      dispatch({type:'CHANGE_USERNAME',value:e.target.value});
    },
    changePassword:(e)=>{
      dispatch({type:'CHANGE_PASSWORD',value:e.target.value});
    }
  }
}
export default connect(mapStateToProps,mapStateToDispatch)(Home);
