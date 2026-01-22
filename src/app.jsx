import { useState } from "react";
import Login from "./views/login";
import Register from "./views/register";

export default function App() {
    const [isLogin, setIsLogin] = useState(true);
    const toggle = () => {
        setIsLogin(!isLogin);
    };
    return(
        <div>
            {isLogin ? (<Login on_switch={toggle}></Login>) : (<Register on_switch={toggle}></Register>)}
        </div>
    );
};