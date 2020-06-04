/**
 * Created by Ammar on 3/10/2017.
 */
function MyFunction(){
    var InputOne = document.getElementById("inp-1").value;
    var InputTwo = document.getElementById("inp-2").value;
    var InputThree = document.getElementById("inp-3").value;
    var InputFour = document.getElementById("inp-4").value;

    document.getElementById("inp-1").value="";
    document.getElementById("inp-2").value="";
    document.getElementById("inp-3").value="";
    document.getElementById("inp-4").value="";

    var InputVales={
        name:InputOne, Lastname:InputTwo, Email:InputThree, contact:InputFour
    };
    ArrValues.push(InputVales);
    console.log(ArrValues);
    if(InputOne == "" || InputTwo == " " || InputThree == " " || InputFour == " "){
        alert("Input filed is empty");
    }
    else {
        var TableRow = document.getElementById("MyTable");
        var Row = TableRow.insertRow();
        console.log(Row);

        var Name = Row.insertCell(0);
        var LastName = Row.insertCell(1);
        var EmailAddress = Row.insertCell(2);
        var ContactNo = Row.insertCell(3);

        Name.innerHTML = InputOne;
        LastName.innerHTML = InputTwo;
        EmailAddress.innerHTML = InputThree;
        ContactNo.innerHTML = InputFour;
    }
}
var ArrValues=[];