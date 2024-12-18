class TaskManager {
    constructor() {
        this.tasksManager = [];
    }

    addTask(title, describe, priority, deadline) { //add task
        if (!(deadline instanceof Date)) {
            console.log("Error: Deadline must be a valid Date object.");
            return;
        }

        this.tasksManager.push(
            {title, describe, priority, deadline, status: 'pending'}
        );
    }
    deleteTask(title) { //delete task
        const initialLength = this.tasksManager.length; //запоминаем длинну до удаления
        this.tasksManager = this.tasksManager.filter(task => task.title !== title);
        if (this.tasksManager.length < initialLength) {
            console.log(`completely removed from the TaskManager!`);
        } else {
            console.log(`Task "${title}" was not found.`);
        }
    }

    changeStatus(title, newStatus){
        const task = this.tasksManager.find(task => task.title === title);
        if (task) {
            task.status = newStatus;
            console.log(`Status of task "${title}" changed to "${newStatus}".`);
        } else {
            console.log(`Task "${title}" was not found.`);
        }
    }

    filterTask(filterType, filterValue){
        const filteredTasks = this.tasksManager.filter(task => task[filterType] === filterValue);

        if (filteredTasks.length === 0) {
            console.log(`No tasks found with ${filterType}: ${filterValue}`);
        } else {
            console.log(`Tasks with ${filterType}: ${filterValue}`);
            filteredTasks.forEach((task) => {
                console.log(`Task "${task.title}" Description: "${task.describe}", Priority: "${task.priority}"`);
            })
        }
    }

    showTasks() {
        if (this.tasksManager.length === 0) {
            console.log("No tasks in the manager");
        } else {
            console.log("Current tasks:");
            this.tasksManager.forEach(task => {
                console.log(`Title: ${task.title}, Description: ${task.describe}, Priority: ${task.priority}, Deadline: ${task.deadline}`);
            })
        }
    }

}

const taskManager = new TaskManager();
taskManager.addTask("Study", "JS", 'high', new Date(2024, 12, 13));
taskManager.addTask("Study", "Theory", 'medium', new Date(2024, 12, 15));
taskManager.addTask("Face", "Massage", 'low', new Date(2024, 12, 18));

taskManager.changeStatus("Study", "completed");

taskManager.filterTask("priority", "high");
taskManager.filterTask("status", "completed");
taskManager.filterTask("priority", "low");