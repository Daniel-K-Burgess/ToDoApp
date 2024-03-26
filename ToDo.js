//each item in the list will have an id
let id = 0;
//function for button to add a new row to the table. This is what will happen when the button is clicked
document.getElementById('add').addEventListener('click', () => {
    let createdDate = new Date(); //time stamp when the button was clicked by leaving empty
    let table = document.getElementById('list') //name of table is list
    let row = table.insertRow(1); //new row
    row.setAttribute('id', `item-${id}`) //setting attribute of each row
    row.insertCell(0).innerHTML = document.getElementById('new-task').value; // first column of the row, what was typed
    row.insertCell(1).innerHTML = `${createdDate.getFullYear()}-${createdDate.getMonth() + 1}-${createdDate.getDate()}`; //year, month, day format
    row.insertCell(2).innerHTML = document.getElementById('new-start-date').value; //what was entered from the calendar
    row.insertCell(3).innerHTML = document.getElementById('new-end-date').value;
    let actions = row.insertCell(4);  //last column will be delete button
    actions.appendChild(createDeleteButton(id++)); //incrementing the id for each new row
    document.getElementById('new-task').value = ''; //reset the textbar to blank
});
//function to give functionality to the delete button
function createDeleteButton(id) {
    let btn = document.createElement('button'); //declare the variable
    btn.className = 'btn btn-primary'; // styled with bootstrap attributes
    btn.id = id; //number of row will have its own id
    btn.innerHTML = 'Delete';
    btn.onclick = () => { //onclick is alternate to eventListener
        console.log(`Deleting row with id: item-${id}`); //for testing
        let elementToDelete = document.getElementById(`item-${id}`); //tie it to id
        elementToDelete.parentNode.removeChild(elementToDelete); //remove method of js
    };
    return btn; //calling the function
}