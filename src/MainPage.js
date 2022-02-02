import WebsocketComponent from "./WebsocketComponent";
import Login from "./Login";
import {useState} from "react";


export default function MainPage() {

    const [userId, setUserId] = useState(null)

    function callback(user) {
        console.log("Setting user as " + user);
        setUserId(user);
    }

    return (
        userId ?
            <WebsocketComponent userId={userId}/> :
            <Login cb={callback}/>
    )
}