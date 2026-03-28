import { Component, input, output, signal } from '@angular/core';
import { TodoItem } from '../models/todos.model';
import { HighlightCompletedTodo } from '../directives/highlight-completed-todo';

@Component({
  selector: 'app-todo-items',
  imports: [HighlightCompletedTodo],
  templateUrl: './todo-items.html',
  styleUrl: './todo-items.scss',
})
export class TodoItems {
  todoItem = input.required<TodoItem>()
  todoToggled = output<TodoItem>()

  todoClicked(){
    this.todoToggled.emit(this.todoItem())
  }
}
