import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { HomePage } from "./home.page";

import { HomePageRoutingModule } from "./home-routing.module";
import { SharedComponentsModule } from "../components/shared-components.module";
import { SharedPipesModule } from "../pipes/shared-pipes.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SharedComponentsModule,
    SharedPipesModule,
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
