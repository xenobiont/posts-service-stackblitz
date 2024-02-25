import { Observable, ReplaySubject } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
    this.list$().subscribe((posts) => {
      this._posts$.next(posts);
    });
  }

  private readonly _posts$ = new ReplaySubject<Post[]>(1);
  readonly posts$ = this._posts$.asObservable();

  list$(): Observable<Post[]> {
    return this.http.get<Post[]>(this.BASE_URL);
  }
}
