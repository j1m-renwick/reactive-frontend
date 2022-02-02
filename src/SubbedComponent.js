import {useEffect, useState} from "react";
import {webSocket} from 'rxjs/webSocket';


export default function SubbedComponent() {

    const [item, setItem] = useState("")

    useEffect(() => {
        console.log('Mounting ...')
        let socket = webSocket('ws://localhost:8123/ws/myPracticeId')
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