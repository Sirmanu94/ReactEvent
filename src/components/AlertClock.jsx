function AlertClock(){
    function showTime(){
    let now = new Date()
    alert("The cuttent time is " + now.toLocaleTimeString())
    }


    return (
    <>
    <button onClick={showTime}> Click me to show Time!</button>
    </>
)}

 export default AlertClock