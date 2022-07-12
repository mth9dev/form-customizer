import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { BuilderComponent } from './pages/builder/builder.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'form/builder',
        pathMatch: 'full',
      },
      {
        path: 'form/builder',
        component: BuilderComponent,
      },
      {
        path: '**',
        redirectTo: 'form/builder',
        pathMatch: 'full',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
