import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import AutoAffiliationService from './auto-affiliation.service';
import { shareReplay } from 'rxjs';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}


interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}


interface PostWithComments {
  post: Post,
  comments: Comment[]
}

@Injectable({
  providedIn: 'root',
})
export class PostService {

  private http: HttpClient = inject(HttpClient);

  readonly posts$ = this.http
    .get<Post[]>(`https://jsonplaceholder.typicode.com/posts/`)
    .pipe(
      // shareReplay(1)
    );
}
