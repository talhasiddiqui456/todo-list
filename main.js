import inquirer from "inquirer";
let todos = [];
let addtask = await inquirer.prompt([
    {
        name: "todo",
        type: "input",
        message: "What do you want to add in your todo?"
    },
    {
        name: "addMore",
        type: "confirm",
        message: "Do you want to add more todo?",
    }
]);
console.log(addtask.todo);
