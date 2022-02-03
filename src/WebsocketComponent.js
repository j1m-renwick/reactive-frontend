import {useEffect, useState} from "react";
import {webSocket} from 'rxjs/webSocket';


export default function WebsocketComponent({userId, practiceId}) {

    const [item, setItem] = useState("")

    useEffect(() => {
        let sockAddress = `ws://localhost:8123/ws/${practiceId}/${userId}`
        console.log(`Connecting to websocket ---> ${sockAddress}`)
        let socket = webSocket(sockAddress)
            .subscribe({
                next: (msg) => {
                    console.log('message received');
                    console.dir(msg);
                    setItem(msg)
                },
                error: (err) => {
                    console.log(err)
                },
                complete: () => console.log('complete')});
        return () => {
            console.log('Unmounting component');
            // this isn't really necessary as far as I can tell
            socket.unsubscribe()
        }
    }, [])

    return (
        <h1>
            {JSON.stringify(item)}
        </h1>
    )
}