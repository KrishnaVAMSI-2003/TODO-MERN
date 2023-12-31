type Data = {
    user:{
        username: string;
        email: string;
        todos: [];
    };
}

type Todo = {
    title: string;
    desc: string;
    dueDate: string;
    todoType: string;
    userId: string;
    _id: string;
    isCompleted?: boolean;
};

export type { Data, Todo };