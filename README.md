//setup code
cmd: npm install

//run the project
cmd:  npm start

// create task 
task.controller.ts ->createTask
endpoint: "/tasks", Method: POST
sample input: {
    "title":"test",
    "status":"pending",
    "dueDate":"2025-09-12"
}


// get task 
endpoint: "/tasks", mthod:GET 
task.controller.ts ->getTask()

// get task with status 
endpoint: "/tasks/:status", mthod:GET 
task.controller.ts ->getTask()
input: "pending" or "done"

// get task with sort 
endpoint: "/tasks/:sort/sort", mthod:GET 
task.controller.ts ->getTask()
input: "asc" or "desc"

// get task count 
endpoint: "/tasks/:status/status", mthod:GET 
task.controller.ts ->getTaskCount()
input: "asc" or "desc"# quantom-assignment-ashok-kujur
