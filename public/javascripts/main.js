var utgifter;
function loadData() {
    var expenseUl = document.getElementById("expenses");
    while (expenseUl.firstChild) {
        expenseUl.removeChild(expenseUl.lastChild);
      }
    fetch(`https://api.airtable.com/v0/appWJAgaz2kO3rrb9/Table%201?api_key=keyB1Op1RxoiSdZi3`)
        .then(response => response.json())
        .then(data => {
            const { records } = data;
            const li = document.createElement("li");
            var markup = "";
            utgifter = data;
            for(var i = 0; i < data.records.length; i++) {
            li.classList.add("expense");

            markup += `
                    <div>
                        <p>
                            <span>${data.records[i].fields.Name}</span>
                            <span>${data.records[i].fields.spec}</span>
                            <span>${data.records[i].fields.Kr} SEK</span>
                            <button onclick="removeItem('${data.records[i].id}')"> Delete </button>
                        </p>
                    </div>
                 `;
            li.innerHTML = markup;
            document.getElementById("expenses").appendChild(li);
            }
        })
}
window.onload=loadData;