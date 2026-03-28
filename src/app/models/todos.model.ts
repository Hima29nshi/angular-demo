export class TodoItem {
    id!: number;
    title!: string;
    completed!: boolean;
    userId!: number;
}

export const todoItems: Array<TodoItem> = [
    {
        id: 1,
        title: "To study Angular",
        userId: 1,
        completed: false
    },
    {
        id: 2,
        title: "To eat",
        userId: 1,
        completed: true
    }

]