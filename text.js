var id = 0;
function add() {
    id++;
    var pname = frm.pname.value;
    var qty = frm.qty.value;
    var price = frm.pri.value;
    var sub = qty * price;
    
    // Construct a row for the product details
    var row = "<tr>";
    row += "<td>" + id + "</td>";
    row += "<td>" + pname + "</td>";
    row += "<td>" + qty + "</td>";
    row += "<td>" + price + "</td>";
    row += "<td>" + sub + "</td>";
    row += "</tr>";
    
    // Add the new row to the table
    document.getElementById('thread').innerHTML += row;

    // Update the total
    var total = parseInt(document.getElementById('total').innerHTML) || 0;
    total += parseInt(sub);

    // Update the total row
    var row_total = "<tr>";
    row_total += "<td>Total</td>";
    row_total += "<td></td>";
    row_total += "<td></td>";
    row_total += "<td></td>";
    row_total += "<td id='total'>" + total + "</td>";  // Changed 'Total' to 'total' to match the original ID
    row_total += "</tr>";

    document.getElementById('tbody').innerHTML = row_total; // Set the new total
}
