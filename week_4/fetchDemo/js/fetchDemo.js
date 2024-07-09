function updateAlert(text, className)  {

    alertDiv = document.createElement("div");
    alertDiv.classList.add("alert");
    alertDiv.classList.add(className);
    alertText = document.createTextNode(text);
    
    //Attach the text node to the alert Div
    alertDiv.appendChild(alertText);

    //Attach the alert div to the content Div
    contentDiv = document.getElementById("content").prepend(alertDiv);

}

//This function will get my data from my url
function getData()  {
    let url = "http://127.0.0.1:5500/data/users.json"

    fetch(url)
        .then(response => {
            if (response.ok)    {
                console.log("Great Success")
            } else {
                updateAlert("There was a problem fetching the data", "alert-warning")
            }
            return response.json()
        })
        // .then(response=> response.json())
        .then(data => printUsers(data))
        .catch(err => updateAlert("An Error has occurred: " + err, "alert-danger"))
}


function printUsers(userData)   {
    //Pull the Div
    var contentDiv = document.getElementById("content");

    var userTable = document.createElement("table");
    userTable.id = "userTable";
    userTable.className = "table table-hover"

    var userTableBody = document.createElement("tbody");

    //go through all the users
    for (index = 0; index <= userData.length -1; index++)   {
        //Add the row
        var row = document.createElement("tr");

        //Add the td
        firstNameCell = document.createElement("td");
        //Add the text Node
        firstNameCellText = document.createTextNode(userData[index].first_name);

        //Add the td
        lastNameCell = document.createElement("td");
        //Add the text Node
        lastNameCellText = document.createTextNode(userData[index].last_name);

        //Add the td
        emailCell = document.createElement("td");
        //Add the text Node
        emailCellText = document.createTextNode(userData[index].email);

        //Add the td
        ipAddressCell = document.createElement("td");
        //Add the text Node
        ipAddressCellText = document.createTextNode(userData[index].ip_address);

        //Append the text Node
        firstNameCell.appendChild(firstNameCellText)
        lastNameCell.appendChild(lastNameCellText)
        emailCell.appendChild(emailCellText)
        ipAddressCell.appendChild(ipAddressCellText)
 
        //Append the row
        row.appendChild(firstNameCell)
        row.appendChild(lastNameCell)
        row.appendChild(emailCell)
        row.appendChild(ipAddressCell)

        //Append do the body
        userTableBody.appendChild(row);
    }   

    //attache the body to the table
    userTable.appendChild(userTableBody)
    contentDiv.appendChild(userTable)

}

