import { observable ,computed } from 'mobx';
import {observer} from 'mobx-react';

import { Todo } from './todoStore.d';
import TodoStore  from "./todoStore.d"
class todoStore implements TodoStore {
    @observable todos: Todo[] = [];
    @observable counts: number = 0;
    @computed get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length;
    }
}
export default new todoStore();