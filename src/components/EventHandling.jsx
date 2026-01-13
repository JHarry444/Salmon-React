function EventHandling() {

    function handleClick() {
        alert("YO!");
    }
    return ( 
        <>
            <h2>Event handling</h2>
            <button onClick={handleClick}>CLICK ME</button>
            <br />
            <label htmlFor="">onChange:</label>
            <input type="text" onChange={(event) => {
                console.log("Event:", event);
                console.log("Target:", event.target);
                console.log("Value:", event.target.value);
                
                
            }
            } />
        </>
     );
}

export default EventHandling;