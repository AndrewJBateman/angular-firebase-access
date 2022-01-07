import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PipesModule } from "../pipes/pipes.module";
import { RouterModule } from "@angular/router";

import { MaterialModule } from "../material.module";

@NgModule({
  exports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
  ],
  declarations: [],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [],
    };
  }
}
