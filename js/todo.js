function get_todos() {
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str); 
    }
    return todos;
}


function add() {
    if (!window["localStorage"]) { 
        alert("No local storage support");
	return false;
	}
    var input = document.getElementById('newItem').value;
    var todos = get_todos();
    if(input!=""){
        todos.push(input);
        localStorage.setItem('todo', JSON.stringify(todos));
    }
    else{
        alert("You must write something")
    }
    getList();
 
    return false;
}

function getList() {
    var todos = get_todos();
 
    var html = '<ul>';
    for(var i=0; i<todos.length; i++) {
        html += '<li>' + todos[i] + '<i class="fa fa-trash remove" id ="'+ i + '"></i></li>';
    };
    html += '</ul>';
 
    document.getElementById('todos').innerHTML = html;
 
    var iClass = document.getElementsByClassName('remove');
    for (var i=0; i < iClass.length; i++) {
        iClass[i].addEventListener('click', remove);
    };
}
function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
 
    getList();
 
    return false;
}
document.getElementById('add').addEventListener('click', add);
getList();