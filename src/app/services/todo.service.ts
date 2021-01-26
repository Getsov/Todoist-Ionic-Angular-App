import { Injectable } from "@angular/core";
import data from "./../../assets/todos.json";

export interface Todo {
  id: string;
  text: string;
  priority: number;
  done: boolean;
}

@Injectable({
  providedIn: "root",
})
export class TodoService {
  private todos: Todo[] = data;

  constructor() {}

  add(todo: Todo) {
    this.todos.push(todo);
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  setDone(id) {
    for (let todo of this.todos) {
      if (todo.id == id) {
        todo.done = true;
      }
    }
  }
}
