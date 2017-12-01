function tableHeader(){
   var header =  [{ title: "Id" },
        { title: "Name" },
        { title: "Last Name" },
        { title: "E-mail" },
        { title: "Gender" },
        { title: "Designation" },
        { title: "Salary" },
        { title: "Bloodgroup" }
    ];
    return header;
}

function getAllEmployees(){
    $.ajax({
        type: "GET",
        url: window.location.origin + "/getAllEmployee",
        contentType: "application/json; charset=utf-8",
        success: function(data) {
            dataTable(data);
        }
    });

}
function getSingleEmployee(){
    var searchId = $('#searchIdTxtBx').val();
    console.log(searchId);
    $.ajax({
        type: "GET",
        url: window.location.origin + "/getAllEmployee/"+searchId,
        contentType: "application/json; charset=utf-8",
        success: function(data) {
            dataTable(data);
        }
    });
}

function dataTable(data) {
    console.log(data);
    var tableData=getTableData(data);
    $('#example').DataTable( {
    data: tableData,
    columns: tableHeader(),
    destroy: true
    } );
}

function getTableData(data){
    console.log('chal hatt');
    str = JSON.stringify(data).replace('allEmployees','Employee').replace('employee','Employee');
    data1 = JSON.parse(str);
    console.log(data1);
    var  result = [];
    if(data1.Employee!=null){
        for (const key of Object.keys(data1.Employee)) {
            console.log(data1.Employee[key].id);
            var dArray = [
                null!=data1.Employee[key].id?data1.Employee[key].id:'',
                null!=data1.Employee[key].name?data1.Employee[key].name:'',
                null!=data1.Employee[key].sname?data1.Employee[key].sname:'',
                null!=data1.Employee[key].email?data1.Employee[key].email:'',
                null!=data1.Employee[key].gender?data1.Employee[key].gender:'',
                null!=data1.Employee[key].designation?data1.Employee[key].designation:'',
                null!=data1.Employee[key].salary?data1.Employee[key].salary:'',
                null!=data1.Employee[key].bloodGroup?data1.Employee[key].bloodGroup:''
            ];
            result.push(dArray);
        }
    }
    return result;
}