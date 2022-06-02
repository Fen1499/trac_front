import { Button } from "antd";
import React from "react";

const HomePage = ({handleLogin, handleLogout}) => {
    return (
        <div className="HomePage">
            This is home
            <br/>
            <Button type="primary" onClick={() => handleLogin()}>Click to fake login</Button>
            <br/>
            <Button type="primary" onClick={() => handleLogout()}>Click to fake logout</Button>
        </div>
    )
}

export default HomePage