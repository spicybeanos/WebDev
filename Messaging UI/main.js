


function findTimeStamp()
{
    let timestamp = document.getElementById("search_text").value;
    console.log("timestamp:'"+timestamp+"'");
    if(timestamp != null)
    {
        let elem = document.getElementById(timestamp);
        if(elem != null){
            elem.scrollIntoView();
        }
        else{
            console.log("Could not find any message with timestamp " + timestamp);
            let er = document.getElementById("error");
            er.textContent = "Could not find any message with timestamp " + timestamp;
        }
    }
}