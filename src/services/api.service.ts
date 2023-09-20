import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, map, mergeMap } from 'rxjs';
import { IComment, IFullComment } from 'src/models/comment';
import { IFullPost, IPost } from 'src/models/post';
import { IUser } from 'src/models/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL: string = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {

  }

  getUsers(): Observable<Array<IUser>> {
    return this.http.get<Array<IUser>>(`${this.BASE_URL}/users`);
  }

  getPosts(): Observable<Array<IPost>> {
    return this.http.get<Array<IPost>>(`${this.BASE_URL}/posts`);
  }

  getPostsWithUser(): Observable<Array<IFullPost>> {
    return this.getPosts().pipe(mergeMap((posts) => {
      return this.getUsers().pipe(map((users) => {
        return posts.map<IFullPost>((post) => {
          return {
            ...post,
            user: users.find((user) => user.id === post.userId)
          }
        })
      }))
    }));
  }

  getComments(): Observable<Array<IComment>> {
    return this.http.get<Array<IComment>>(`${this.BASE_URL}/comments`);
  }

  
}
