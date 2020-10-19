//edit a element in the list
//välj element 
//andra den
//spara

//variables:
let itemName = "";
let itemNote = "";
let itemPrice = "";
let itemSpecification = "";

//Uses airtable
var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyB1Op1RxoiSdZi3'}).base('appWJAgaz2kO3rrb9');

//select item to edit


//update the item
function edit() {
    base('Table 1').update([
        {
            //item that will be edited
          "id": data.records[i].id,
          "fields": {
            "Name": itemName,
            "Notes": itemNote,
            "Kr": itemPrice,
            "spec": itemSpecification
          }
        },
        {
            //edit that will be edited (2)
          "id": data.records[i].id,
          "fields": {
            "Name": itemName,
            "Notes": itemNote,
            "Kr": itemPrice,
            "spec": itemSpecification
          }
        }
      ], function(err, records) {
        if (err) {
          console.error(err);
          return;
        }
        records.forEach(function(record) {
          console.log(record.get('Name','Notes','Kr','spec'));
        });
      });
}

