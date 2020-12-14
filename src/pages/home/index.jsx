import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
import actions from '../../store/actions'
class Home extends React.Component {
    
    render() {
        const { increase, PayDecrease, PayDecreases, chengsaga } = this.props
        return (
            <div>
                <button onClick={() => { this.props.history.push('/detail/child1') }}>去Detail</button>
                环境变量： {process.env.NODE_ENV} : 
                {process.env.PUBLIC_URL}
                <br/>
                <h2>{this.props.tiger}</h2>
                <h2>{this.props.tiger1}</h2>
                <br/>
                <button onClick={() => {increase(10)}}>加</button>
                <br/>
                <button onClick={() => {PayDecrease(2)}}>减</button>
                <br/>
                <button onClick={() => {PayDecreases(20)}}>减</button>
                <br/>
                <button onClick={() => {chengsaga(2)}}>乘</button>
            </div>
        )
    }
}

//需要渲染什么数据
function mapStateToProps(state) {
    return {
      tiger: state.home,
      tiger1: state.global
    }
  }
  //需要触发什么行为
  function mapDispatchToProps(dispatch) {
    return { 
        increase: bindActionCreators(actions.increase, dispatch),
        PayDecrease: (num) => dispatch({ type: '减', num }),
        PayDecreases: (num) => dispatch({ type: '减saga', num }),
        chengsaga: (num) => dispatch({ type: '乘saga', num })
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Home)