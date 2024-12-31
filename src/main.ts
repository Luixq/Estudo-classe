type Task = {
    id: string;
    owner: string;
    name: string;
    status: 'pending' | 'completed';
}

const TASKS: Task[] = [];

export class TaskService {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    async create(taskName: string) {
        const newtask = TASKS.push({ id: crypto.randomUUID(), owner: this.name, name: taskName, status: "pending" });
        return TASKS[newtask - 1];
    };

    async list() {
        const tasks = TASKS.filter(task => task.owner === this.name);
        return tasks;
    };

    async update(id: string, taskName: string, status: 'pending' | 'completed') {
        const task = TASKS.find(task => task.id === id);

        if (!task) {
            return false;
        }

        task.name = taskName;
        task.status = status;

        return true;
    };

    async delete(id: string) {
        const taskIndex = TASKS.findIndex(task => task.id === id);

        const deleteTask = TASKS.splice(taskIndex, 1);

        return deleteTask;
    };
}