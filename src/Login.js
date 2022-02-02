export default function Login({cb}) {

    return (
        <>
            <h1>
                Obviously a Login Page
            </h1>
            <form onSubmit={e => {
                e.preventDefault();
                cb(document.getElementById("username").value);
            }}>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username"/>
                <input type="submit" value="Submit"/>
            </form>
        </>
    )
}