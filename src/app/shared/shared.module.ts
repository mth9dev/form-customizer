import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';

const materialModules = [
  MatToolbarModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    ...materialModules,
  ],
  exports: [
    RouterModule,
    ...materialModules,
  ]
})
export class SharedModule { }
