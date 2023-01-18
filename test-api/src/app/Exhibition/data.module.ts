import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ExhibitionComponent } from './data.component';
import { ExhibitionService } from './data.service';
@NgModule({
  declarations: [
    ExhibitionComponent
  ],
  imports: [
    CommonModule
  ],
  //這邊要把component Export出去，在parent才能夠使用到child的component
  exports: [ExhibitionComponent],
  providers: [ExhibitionService]
})
export class ExhibitionModule { }
