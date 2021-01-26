import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PriorityStatusDirective } from "./priority-status.directive";

@NgModule({
  declarations: [PriorityStatusDirective],
  imports: [CommonModule],
  exports: [PriorityStatusDirective],
})
export class SharedDirectivesModule {}
