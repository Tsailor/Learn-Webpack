export interface Todo {
    finished:boolean;
    title:string
}

declare interface TodoStore {
    todos:Todo[];
    unfinishedTodoCount:number;
}
export default TodoStore