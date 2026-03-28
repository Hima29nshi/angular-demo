import { inject, Injectable } from '@angular/core';
import { todoItems, TodoItem } from '../models/todos.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Todos {
  todos: Array<TodoItem> = [];
  http = inject(HttpClient)

  loadTodos() {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    return this.http.get<Array<TodoItem>>(url)
  }
  constructor(){}
}
