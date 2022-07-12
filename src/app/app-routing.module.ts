import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { BuilderComponent } from './pages/builder/builder.component';
import { PreviewComponent } from './pages/preview/preview.component';

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
        path: 'form/preview',
        component: PreviewComponent,
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
