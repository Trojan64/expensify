//add a element to the list
function addData() {
    //getting data from form
    var component = document.getElementById("NewComponent").value;
    var specs = document.getElementById("NewSpec").value;
    var price = document.getElementById("NewPrice").value;
    //send to server
    fetch(`https://api.airtable.com/v0/appWJAgaz2kO3rrb9/Table%201?api_key=keyB1Op1RxoiSdZi3`, {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "records": [
                  {
                      "fields": {
                          "Name": component,
                          "Kr": parseInt(price),
                          "spec": specs
                      }
                  }
              ]
          })
        })
        .then(response => response.json())
    loadData();
}