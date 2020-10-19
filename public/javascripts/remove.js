// remove a element from the list
var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyB1Op1RxoiSdZi3'}).base('appWJAgaz2kO3rrb9');

function removeItem(id) {
    base('Table 1').destroy([/*Item id to remove*/], function(err, deletedRecords) {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Deleted', deletedRecords.length, 'records');
    });
};