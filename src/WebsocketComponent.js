import {useEffect, useState} from "react";
import {webSocket} from 'rxjs/webSocket';
import CardItem from "./CardItem";


export default function WebsocketComponent({userId, practiceId}) {

    const [item, setItem] = useState("")

    const cardData = [
        {
            id: "id_123",
            title: "Alice's card",
            subtitle: "She has the best card"
        },
        {
            id: "id_456",
            title: "Here's a card for Bob",
            subtitle: "Bob's card = best card"
        }]

    const [cardList, setCardList] = useState(cardData)

    const containerStyle = {
        display: "flex",
        backgroundColor: "lightsteelblue",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center"
    }

    useEffect(() => {
        let sockAddress = `ws://localhost:8123/ws/${practiceId}/${userId}`
        console.log(`Connecting to websocket ---> ${sockAddress}`)
        let socket = webSocket(sockAddress)
            .subscribe({
                next: (msg) => {
                    setItem(msg);
                    cardList.find(element => element.id === msg.targetId).subtitle = msg.data;
                    setCardList([...cardList]);
                },
                error: (err) => {
                    console.log(err)
                },
                complete: () => console.log('complete')
            });
        return () => {
            console.log('Unmounting component');
            // this isn't really necessary as far as I can tell
            socket.unsubscribe()
        }
    }, [cardList, practiceId, userId])

    return (
        <>
            <h2>
                Raw event
            </h2>
            <h4>
                {JSON.stringify(item).replaceAll(":", " : ").replaceAll(",", ", ")}
            </h4>

            <div style={containerStyle}>
                {cardList.map((val, idx) => <CardItem key={idx} data={val}/>)}
            </div>
        </>
    )
}
