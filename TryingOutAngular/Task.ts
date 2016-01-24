class Task implements ITask {
    constructor(name1: string) {
        this.Name = name1;
    }

    id: number;
    Name: string;
    Completed: boolean;
}