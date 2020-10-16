fetch(`https://api.airtable.com/v0/appWJAgaz2kO3rrb9/Table%201?api_key=keyB1Op1RxoiSdZi3`)
    .then(response => response.json())
    .then(data => {
        const { records, fields, Name, Kr, spec } = data;
        
        const markup = `
        <div>
            <span>${data.records}</span>
            <sup>${sys.country}</sup>
        </div>
    `;
    })

