import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExhibitionComponent } from './Exhibition/data.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  {path:'index',component:ExhibitionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
