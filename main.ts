import { Command, Plugin } from "obsidian";

export default class TaskMasterPlugin extends Plugin {
    async onload() {
        this.addCommand(addCommand);
        this.addCommand(showCommand);
    }

    async onunload() {

    }
}

const addCommand: Command = {
    id: "add-task",
    name: "Add Task",
    callback: () => {
        console.log("Added");
    },
};

const showCommand: Command = {
    id: "show-tasks",
    name: "Show Tasks",
    callback: () => {
        console.log("Showing");
    },
};
