import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TodoComponent } from "./todo/todo.component";
import { IonicModule } from "@ionic/angular";
import { SharedDirectivesModule } from "../directives/shared-directives.module";

@NgModule({
  declarations: [TodoComponent],
  imports: [CommonModule, IonicModule, SharedDirectivesModule],
  exports: [TodoComponent],
})
export class SharedComponentsModule {}
