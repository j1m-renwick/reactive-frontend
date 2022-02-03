import WebsocketComponent from "./WebsocketComponent";
import Login from "./Login";
import {useState} from "react";


export default function MainPage() {

    const [userId, setUserId] = useState(null)
    const [practiceId, setPracticeId] = useState(null)

    return (
        userId ?
            <WebsocketComponent userId={userId} practiceId={practiceId}/> :
            <Login userCb={setUserId} practiceCb={setPracticeId}/>
    )
}