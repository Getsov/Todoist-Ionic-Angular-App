import { Component, Input, OnInit } from "@angular/core";
import { Todo, TodoService } from "src/app/services/todo.service";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.scss"],
})
export class TodoComponent implements OnInit {
  @Input("todo") todo: Todo;
  constructor(private todoService: TodoService) {}

  ngOnInit() {}

  setDone(id) {
    this.todoService.setDone(this.todo.id);
  }
}
