import React, { Component, PropTypes } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as actions from "../actions/clock"
import Clock from "../components/Clock"

const mapState = (state, ownProps) => ({
  time: state.clock,
})

const mapDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch),
  }
} 

class App extends Component {
  static propTypes = {
    syncDate: PropTypes.func.isRequired,
    time: PropTypes.shape({
      hour: PropTypes.number.isRequired,
      minutes: PropTypes.number.isRequired,
      seconds: PropTypes.number.isRequired
    })
  };

  componentDidMount(){
   this.timer = setInterval(this.props.syncDate, 1000)
  }

  componentWillUnmount(){
    clearInterval(this.timer)
  }

  render() {
    return(
      <div>
        <h1>Clock</h1>
        <Clock {...this.props.time}/>
      </div>
    )
  }
}

export const AppContainer = connect(mapState, mapDispatch)(App)