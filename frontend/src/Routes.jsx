import React from 'react'
import { Routes, Route } from "react-router-dom";

import Home from './components/home/Home'
import User from './components/user/User'

export default props => (
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/users" element={<User />} />
        <Route exact path="*" element={<Home />} />
    </Routes>
);