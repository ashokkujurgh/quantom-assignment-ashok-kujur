1. setup code<br />
cmd: npm install<br />

2. run the project<br />
cmd:  npm start<br />

3. create task <br />
task.controller.ts ->createTask<br />
endpoint: "/tasks", Method: POST<br />
sample input: {<br />
    "title":"test",<br />
    "status":"pending",<br />
    "dueDate":"2025-09-12"<br />
}<br />


4. get task <br />
endpoint: "/tasks", mthod:GET <br />
task.controller.ts ->getTask()<br />

5. get task with status <br />
endpoint: "/tasks/:status", mthod:GET <br />
task.controller.ts ->getTask()<br />
input: "pending" or "done"<br />

6. get task with sort <br />
endpoint: "/tasks/:sort/sort", mthod:GET <br />
task.controller.ts ->getTask()<br />
input: "asc" or "desc"<br />

7. get task count <br />
endpoint: "/tasks/:status/status", mthod:GET <br />
task.controller.ts ->getTaskCount()<br />
input: "asc" or "desc"# quantom-assignment-ashok-kujur<br />
