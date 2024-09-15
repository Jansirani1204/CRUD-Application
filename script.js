var selectedRow = null;
function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }
    else{
        updateRecord(formData);
    }
    resetForm();
}

//Retrieve the data
function readFormData(){
    var formData = {};
    formData["ProductCode"] = document.getElementById("ProductCode").value;
    formData["Product"] = document.getElementById("Product").value;
    formData["quantity"] = document.getElementById("quantity").value;
    formData["perPrice"] = document.getElementById("perPrice").value;
    return formData;
}

//Insert the data
function insertNewRecord(data){
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.ProductCode;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.Product;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.quantity;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.perPrice;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = "<button onClick='onEdit(this)'>Edit</button> <button onclick='onDelete(this)'>Delete</button>";
}

//Edit the data
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('ProductCode').value = selectedRow.cells[0].innerHTML;
    document.getElementById('Product').value = selectedRow.cells[1].innerHTML;
    document.getElementById('quantity').value = selectedRow.cells[2].innerHTML;
    document.getElementById('perPrice').value = selectedRow.cells[3].innerHTML;
} 

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.ProductCode;
    selectedRow.cells[1].innerHTML = formData.Product;
    selectedRow.cells[2].innerHTML = formData.quantity;
    selectedRow.cells[3].innerHTML = formData.perPrice;
}

//Delete the data
function onDelete(td){
    if(confirm('Do you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
    }
    resetForm();
}

//Reset the data
function resetForm(){
    document.getElementById('ProductCode').value = '';
    document.getElementById('Product').value = '';
    document.getElementById('quantity').value = '';
    document.getElementById('perPrice').value = '';
}