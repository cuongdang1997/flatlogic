import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = ({}) => {

    return <div>
        Home
        <Link to="/demo">Demo</Link>
        <Link to="/login">Login</Link>
    </div>
}

export default Home;