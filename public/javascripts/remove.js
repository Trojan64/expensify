function removeItem(recid) {
    console.log(recid);
    fetch(`https://api.airtable.com/v0/appWJAgaz2kO3rrb9/Table%201/${recid}?api_key=keyB1Op1RxoiSdZi3`, {
        method: 'DELETE'
    })
        .then(response => response.json())    
        setTimeout(loadData, 1100);
}
