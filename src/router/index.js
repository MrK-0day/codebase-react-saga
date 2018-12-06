import React from 'react'
import { Helmet } from 'react-helmet'
import Loadable from 'react-loadable'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { TITLE, FONT } from '../config'
import favicon from '../assets/images/public_favicon.png'

import 'antd/dist/antd.min.css'
import '../assets/css/theme.scss'
import '../assets/css/source/loading.scss'

import { LoadingPage } from '../page/loading'

import { Notification } from '../core/notification'

const LoadingLogin = Loadable({
  loader: () => import('../page/login'),
  loading: () =>null
})

const LoadingApplication = Loadable({
  loader: () => import('./application'),
  loading: () => null
})

class Router extends React.PureComponent {
  componentWillMount () {
    this.props.AsyncLoading(1000)
  }
  componentDidMount () {
    Notification('success', 'asdasdadsh')
  }
  render () {
    return (
      <React.Fragment>
        <Helmet>
          <title>{TITLE}</title>
          <link href={FONT} rel='stylesheet' />
          <link rel='shortcut icon' href={favicon} />
        </Helmet>
        {this.props.isLoading ? <LoadingPage /> : (
          <BrowserRouter>
            <Switch>
              <Redirect exact from={`/`} to={`/login`} />
              <Route exact path={`/login`} render={() => {
                return this.props.isLogin ? <Redirect to={`/application`} /> : <LoadingLogin />
              }} />
              <Route path={`/application`} render={() => {
                return this.props.isLogin ? <LoadingApplication /> : <Redirect to={`/login`} />
              }} />
            </Switch>
          </BrowserRouter>
        )}
      </React.Fragment>
    )
  }
}

const mapState = (state) => ({
  isLoading: state.authen.isLoading,
  isLogin: state.authen.isLogin
})

const mapDispatch = (dispatch) => ({
  AsyncLoading: (value) => dispatch({ type: 'SAGA_SET_LOADING', value })
})

export default connect(mapState, mapDispatch)(Router)
