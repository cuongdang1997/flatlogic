import React, { Suspense }  from "react";
import "./styles/main.scss";
import { Route, Router, Switch, Redirect } from "react-router-dom";
import { Skeleton } from "antd";

const Login = React.lazy(() => import("./modules/auth/containers/login"));
const SignUp = React.lazy(() => import("./modules/auth/containers/sign-up"));
const Home = React.lazy(() => import("./modules/home/containers"));
const Demo = React.lazy(() => import("./modules/demo/containers"));
const EmptyPage = React.lazy(() => import('./modules/common/containers/empty-page/index.jsx'));

const Loading = () => (
    <div className="container">
        <Skeleton loading avatar={false} title paragraph={{ rows: 18 }} active />
    </div>
);

const App = ({ history }) => {
    return <div>
        <Router history={history}>
            <Suspense fallback={<Loading />}>
                <Switch>
                    <Route exact path="/" render={props => <Home {...props} page="home" />} />
                    <Route path="/login" render={props => <Login {...props} />} />
                    <Route path="/sign-up" render={props => <SignUp {...props} />} />
                    <Route path="/demo" render={props => <Demo {...props} />} />
                    <Route path="*" render={props => <EmptyPage {...props} />} />
                </Switch>
            </Suspense>
        </Router>
    </div>
}

export default App;
