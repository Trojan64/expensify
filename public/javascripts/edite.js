//edit a element in the list
//välj element 
//andra den
//spara

//variables:
let itemName = "";
let itemNote = "";
let itemPrice = "";
let itemSpecification = "";
//element selection/choose item to edit:
var base = new Airtable({apiKey: 'keyB1Op1RxoiSdZi3'}).base('appWJAgaz2kO3rrb9');

function edit(/*item id to edit*/) {
    base('Table 1').update([
        {
          "id": data.records[i].id,
          "fields": {
            "Name": itemName,
            "Notes": itemNote,
            "Kr": itemPrice,
            "spec": itemSpecification
          }
        },
        {
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

