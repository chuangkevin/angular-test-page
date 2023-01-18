import { Component, OnInit, VERSION } from '@angular/core';
import { Observable, shareReplay, tap } from 'rxjs';

import { ExhibitionService } from './data.service';

import { CExhibition } from './data';

@Component({
  selector: 'exhibition-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class ExhibitionComponent implements OnInit {

  products$ = new Observable<CExhibition[]>();
  constructor(private exService: ExhibitionService) { }

  ngOnInit(): void {


    this.products$ = this.exService.getProdect();

  }
}
