import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { BuilderComponent } from './builder/builder.component';
import { PreviewComponent } from './preview/preview.component';



@NgModule({
  declarations: [
    BuilderComponent,
    PreviewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class PagesModule { }
