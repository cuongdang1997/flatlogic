import React from 'react';
import Navigation from './../Navigation/Navigation';
import Login from './../Login/Login';

import styles from './../../styles/styles.scss';

export default React.createClass({
    render() {
        return <div>                        
            <div className={styles.routerOutlet}>
                {this.props.children}
            </div>
        </div>
    }
});

// export default React.createClass({
//     render() {
//         return <div>                        
//             <div className={styles.routerOutlet}>
//                 {this.props.children || <Login />}
//             </div>
//         </div>
//     }
// });