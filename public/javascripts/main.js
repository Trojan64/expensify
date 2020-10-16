fetch(`https://api.airtable.com/v0/appWJAgaz2kO3rrb9/Table%201?api_key=keyB1Op1RxoiSdZi3`)
    .then(response => response.json())
    .then(data => {
        const { records, fields, Name, Kr, spec } = data;
        for(var i = 0; i < data.records.length; i++) {
        console.log(data.records[i].fields.Name + data.records[i].fields.spec + data.records[i].fields.Kr);
        }
    })