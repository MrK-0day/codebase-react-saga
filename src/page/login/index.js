import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { SAGA_SET_LOGIN } from '../../modules/redux/saga/authen/type'

import { Button } from 'antd'

class Login extends React.PureComponent {
  render () {
    return (
      <React.Fragment>
        <p>isLogin: {`${this.props.isLogin}`}</p>
        <div>
          <Button type='primary' onClick={() => {
            this.props.onLogin(true)
          }}>Login</Button>
        </div>
      </React.Fragment>
    )
  }
}

Login.propType = {
  isLogin: PropTypes.bool,
  onLogin: PropTypes.func
}

const mapState = (state) => ({
  isLogin: state.authen.isLogin
})

const mapDispatch = (dispatch) => ({
  onLogin: (payload) => dispatch({ type: SAGA_SET_LOGIN, payload })
})

export default connect(mapState, mapDispatch)(Login)
