//add a element to the list
fetch(`https://api.airtable.com/v0/appWJAgaz2kO3rrb9/Table%201?api_key=keyB1Op1RxoiSdZi3`, {
    method: 'POST'
})
    .then(response => response.json())
    .then({
            "records": [
                  {
                      "fields": {
                          "Name": "test2",
                          "Kr": 420,
                          "spec": "med ch",
                      }
                  }
              ]
        
        })    
    setTimeout(loadData, 1100);