export default function Login({userCb, practiceCb}) {

    return (
        <>
            <h1>
                Obviously a Login Page
            </h1>
            <form onSubmit={e => {
                e.preventDefault();
                userCb(document.getElementById("username").value);
                practiceCb(document.getElementById("practice").value);
            }}>
                <label htmlFor="username">Username</label>
                <br/>
                <input type="text" id="username" name="username"/>
                <br/>
                <br/>
                <label htmlFor="practice">Practice</label>
                <br/>
                <input type="text" id="practice" name="practice"/>
                <br/>
                <br/>
                <input type="submit" value="Submit"/>
            </form>
        </>
    )
}