var data_1 = [
    {
        "rank": "admin",
        "username": "Rishi",
        "password": "123"
    },
    {
        "rank": "general",
        "username": "Subha",
        "password": "321"
    }
]
var list_data = [["Hello", "World"],2,3,4,5]


function do_something() {
    var a = document.getElementById("ph_number");
    var username = a.value;
    console.log(username);
    var b = document.getElementById("message");
    var password = b.value;
    console.log(password);
    var final = false;
    for (var i = 0; i < data_1.length; i++) {
        var c = data_1[i].username;
        var d = data_1[i].password;
        if (c == username && d == password){
            alert("Login Successful");
            // final = true; 
            break;
            console.log("N Okay")       
        };
        if(i == data_1.length -1){
            alert("Username or Password was Wrong");
        };
        
    }
    
}
function print_something(){
    var result = document.getElementById("result");
    var result = result.value;
    var new_val = result+"hello";
    document.getElementById("result").value = new_val;
    
}

