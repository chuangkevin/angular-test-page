import { Injectable } from '@nestjs/common';

import { Agent } from 'https';


import { Observable, catchError, map, tap } from 'rxjs';


import { HttpService } from '@nestjs/axios';

import { Todo } from './common/models/todo.model';

import { CWiki, CPage, CThumbnail } from './common/models/wiki.model';

import { CExnitionRoot, CShowInfo} from './common/models/exhibition.model';

import { resolve } from 'path';

@Injectable()
export class AppService {

  constructor(
    private readonly http: HttpService,
    // private listAdapter: ListAdapter

  ) { }

  getTodos(): Observable<CExnitionRoot[]> {
    //因為已經在app.module.ts配置Agent的設定，所以這邊直接不需要設定
    //const httpsAgent = new Agent({ rejectUnauthorized: false });

    // const ret =  this.http.get('https://jsonplaceholder.typicode.com/todos').pipe(
    //   map((res) => res.data)
    // );
    // console.log(ret);

    // return ret;
    // const url = 'http://192.168.120.92:8080/rest.php/v1/search/title?q=小黑&limit=20';
    // const pArray = [];
    // const ret= this.http.get<CWiki[]>(url).pipe(r=> r.data);



    const url = 'https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6';

    //這邊預期是CExnitionRoot
    return this.http.get<CExnitionRoot[]>(url).pipe(map((res) => res.data));


    //return ret;
    // //想要存在於CExnitionRoot裡面的showInfo[]
    // return this.http.get<any>(url).pipe(
    //   map((list) => 
    //   {
    //     return list.map((item) => this.listAdapter.adapt(item));
    //   }),
    //   catchError((err, caught) => 
    //   {
    //     console.error(err);
    //     throw err;
    //   })
    // );
  }
}

