//add a element to the list
fetch(`https://api.airtable.com/v0/appWJAgaz2kO3rrb9/Table%201?api_key=keyB1Op1RxoiSdZi3`, {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        "records": [
              {
                  "fields": {
                      "Name": "detta är ett test",
                      "Kr": 420,
                      "spec": "med ch"
                  }
              }
          ]
      })
    })
    .then(response => response.json())