/**
 * Created by Aimandis on 6/23/2016.
 */

var employeesList=[
    {
        firstName: 'John',
        lastName:'King',
        phone:'072123123',
        salary:4500
    },
    {
        firstName:'Steven',
        lastName:'Gerard',
        phone:'012839128',
        salary: 4500
    },
    {
        firstName: 'Mike',
        lastName:'Bob',
        phone:'01238273612',
        salary:4500
    },
    {
        firstName: 'Emily',
        lastName:'Hudson',
        phone:'0123456789',
        salary:4500
    }
];

function showList(){
    var myTable = '<table border="1" class="table table-striped"><tr><th>First Name</th><th>Last ' +
        'Name</th><th>Phone</th><th>Salary</th></tr>';


    for(var i in employeesList){
        var buttonView = '<button type="button" class="btn btn-default" onclick=rowView('+i+')>'+ 'View row' +'</button>';
        var buttonDelete = '<button type="button" class="btn btn-default" onclick=deleteRow('+i+')>'+ 'Delete row' +'</button>';
        myTable += '<tr><td>'+employeesList[i].firstName+'</td>' +
            '<td>'+employeesList[i].lastName+'</td>' +
            '<td>'+employeesList[i].phone+'</td>' +
            '<td>'+employeesList[i].salary+'</td>' +
            '<td>'+buttonView+'</td>' +
            '<td>'+buttonDelete+'</td>' +
            '</tr>';
    }

    myTable += '<tr><td>'+ ' ' +'</td>' +
        '<td>'+' ' +'</td>' +
        '<td>'+ mostFrequentNumbers() +'</td>' +
        '<td>'+ salaryAverage() +'</td>' +
        '<td>'+' ' +'</td>' +
        '<td>'+ '' +'</td>' +
        '</tr>';


    myTable +='</table>';
    var container = document.getElementById('listcontainer');
    container.innerHTML = myTable;
}

function mostFrequentFirstName(){
    var names = [];
    for(var i in employeesList){
        names.push(employeesList[i].firstName);
    }
    var index = 1;
    var max = 1;
    var max2 = 1;
    names.sort();

    for(var j = 1; j<names.length; j++){

        if(names[j-1] == names[j]){
            index2++;
        }
        else{
            if(index2 > index){
                index = index2;
                max =
            }
        }
    }

}

function salaryAverage(){
    var salary = 0;
    for(var i in employeesList){
        salary += employeesList[i].salary;
    }
    var length = employeesList.length;
    return salary/length;
}

function mostFrequentNumbers(){
    var counter = [0,0,0,0,0,0,0,0,0,0];
    for(var i in employeesList){
        var phone = employeesList[i].phone;
        while(phone.length>0){
            var length = phone.length;
            counter[parseInt(phone[length-1])]++;
            phone = phone.substring(0,length-1);
        }
    }

    var output = '';
    for(var j = 0; j<5; j++){
        var max =  Math.max.apply( Math, counter );
        var index = counter.indexOf(max);
        output += ' ' +index + ' , ';
        counter[index] = 0;
    }
    return output;

}

var Employee = function(firstName, lastName, phone, salary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.salary = salary;
}

function addEmployee(){
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var salary = document.getElementById("salary").value;
    employeesList.push(new Employee(firstName, lastName, phone, salary));
    showList();
}

function getTotalSalary(){
    var salary = 0;
    for(var i in employeesList)
        salary += employeesList[i].salary;

    var text = '<p>'+salary+'</p>';

    var container = document.getElementById('totalsalary');
    container.innerHTML = text;
}

function deleteLastEmployee(){
    var length = employeesList.length;
    if( length > 0) {
        employeesList.pop();
        showList();
    }
}

function rowView(row){
    alert(employeesList[row].firstName + ' ' + employeesList[row].lastName + ' ' + employeesList[row].phone + ' ' + employeesList[row].salary);
}

function deleteRow(row){
    delete employeesList[row];
    showList();
}