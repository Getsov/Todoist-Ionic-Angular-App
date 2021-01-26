import { Pipe, PipeTransform } from "@angular/core";
import { Todo } from "../services/todo.service";

@Pipe({
  name: "priority",
})
export class PriorityPipe implements PipeTransform {
  transform(todos: Todo[], filter: boolean): unknown {
    if (!filter) {
      return todos;
    } else {
      return todos.filter((oneTodo) => oneTodo.priority == 1);
    }
  }
}
