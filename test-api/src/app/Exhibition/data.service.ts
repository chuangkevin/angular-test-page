import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, tap } from 'rxjs';
import { CExhibition, CShowInfo } from './data';

@Injectable()
export class ExhibitionService {
  constructor(private http: HttpClient) { }

  getProdect(): Observable<CExhibition[]> {
    //如果查看有問題，可能是server 沒有開cors
    //const url = 'http://192.168.0.130:3000/todos';
    const url ='https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6';

    //這邊預期是CExnitionRoot

    const t = this.http.get<CExhibition[]>(url);


    const ret = t.pipe(map((res) => res));


    return ret;
  }
}
