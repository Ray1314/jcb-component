import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail';
import './App.scss';
class App extends React.Component {
    state = {
        routers: ''
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                routers: <Route path="/" component={() => (
                    <Detail>
                        <Route exact path="/detail/child1" component={React.lazy(() => import('./pages/childrens/child1'))} />
                        <Route exact path="/detail/child2" component={React.lazy(() => import('./pages/childrens/child2'))} />
                        <Route exact path="/detail1/child3" component={React.lazy(() => import('./pages/childrens/child1'))} />
                    </Detail>
                )} />
            })
        }, 3000)

    }

    render() {
        const { routers } = this.state
        return <BrowserRouter>
            <React.Suspense fallback={'正在加载中...'}>
                <Switch>
                    <Route exact path="/home" component={Home} />
                    {routers}
                    {/* <Redirect from="/" to="/home"/> */}
                </Switch>
            </React.Suspense>
        </BrowserRouter>
    }
}

const mapStateToProps = (state, ownProps) => {
    return { token: state.token }
}
export default connect(mapStateToProps)(App);
