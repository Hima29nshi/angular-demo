import { Component, inject, OnInit, signal, input } from '@angular/core';
import { TodoItem } from '../models/todos.model';
import { Todos } from '../services/todos';
import { catchError } from 'rxjs';
import { TodoItems } from '../todo-items/todo-items';
import { FormsModule } from '@angular/forms';
import { FilterTodosPipe } from "../pipes/filter-todos-pipe";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  providers: [Todos],
  imports: [TodoItems, FormsModule, FilterTodosPipe]
})
export class TodosComponent implements OnInit{
  todos = signal<Array<TodoItem>>([])
  todoService = inject(Todos)
  searchTerm = signal('')

  ngOnInit() {
    this.todoService.loadTodos().pipe(
      catchError((ex) => {
        console.log(ex)
        throw ex;
      })
    ).subscribe((todos) => {
      this.todos.set(todos)
    })
  }

  updateTodoItem(todoItem:TodoItem){
    this.todos.update((todos)=>{
      return todos.map((todo) =>{
        if(todo.id === todoItem.id){
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo;
      })
    })
  }
}
