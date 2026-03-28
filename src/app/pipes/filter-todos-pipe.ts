import { Pipe, PipeTransform } from '@angular/core';
import { TodoItem } from '../models/todos.model';

@Pipe({
  name: 'filterTodos',
})
export class FilterTodosPipe implements PipeTransform {
  transform(todos: Array<TodoItem>, searchTerm: string): Array<TodoItem> {
    if(!searchTerm){
      return todos;
    }
    return todos.filter((todo) => todo.title.includes(searchTerm))
  }
}
