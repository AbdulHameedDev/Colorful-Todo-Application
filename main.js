#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let conditions = true;
// Print welcome message
console.log(chalk.bold.rgb(204, 204, 204)(`\n  \t\t <<<======================================>>>`));
console.log(chalk.bold.rgb(204, 204, 204)(`<<<=========>>>  ${chalk.bold.hex('#9999FF')('Welcome To \'Code With Hamza\' - Todo-List App ')}  <<<===========>>>`));
console.log(chalk.bold.rgb(204, 204, 204)(`\t\t <<<======================================>>>\n`));
while (conditions) {
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: chalk.green("Enter your New Task :")
        }
    ]);
    todoList.push(addTask.task);
    console.log(`\n "${chalk.cyanBright.bold(addTask.task)}" Task added in Todo-List successfully\n`);
    let addMoreTask = await inquirer.prompt([
        {
            name: "addmore",
            type: "confirm",
            message: "Do you want to add more task ?",
            default: "false"
        }
    ]);
    conditions = addMoreTask.addmore;
}
console.log("\nYour updated Todo-List:", todoList);
