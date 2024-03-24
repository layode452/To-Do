var allTodos = []
var errorMsg = document.getElementById("errorMsg")
var newIndex = 0

function submitTodo() {
    if (todo.value === "") {
        errorMsg.style.display = 'block'
    } else {
        errorMsg.style.display = 'none'
        allTodos.push(todo.value)
        console.log(allTodos);
        showTodos()
        document.getElementById('todo').value = ''
    }
}

function showTodos() {
    show.innerHTML = ""
    allTodos.map((task, index) => {
        show.innerHTML += `
                <div class="card text-bg-dark mb-3 w-100" style="width: 100%;">

                <div class="card-body">
                    <h5 class="card-title fs-4"><p>${index + 1}. ${task}</p></h5>
                </div>
                <hr>
                <div class="card-body firstbtn">
                <button class="btn btn-sm my-3 mx-auto btn-warning fs-6 fw-bold" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="edit(${index})">Edit</button>
                <button class="btn btn-sm my-3 mx-auto btn-danger fs-6 fw-bold" onclick="deleteTodo(${index})">Delete</button>
                </div>
                </div>
                `
    })
}

function deleteTodo(i) {
    var confirmation = confirm("Are you sure you want to delete?")
    if (confirmation == true) {
        allTodos.splice(i, 1)
        showTodos()
    }
}

function edit(i) {
    newIndex = i
}

function editItem() {
    if (newTodo.value == "") {
        alert("No way")
    } else {
        var newValue = document.getElementById('newTodo').value
        allTodos.splice(newIndex, 1, newValue)
        showTodos()
    }
}