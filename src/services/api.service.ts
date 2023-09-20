import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL: string = 'https://jsonplaceholder.typicode.com';
  
  constructor(private http: HttpClient) {

  }
  getPosts() {
    return this.http.get(`${this.BASE_URL}/posts`);
  }

  getComments(){
    return this.http.get(`${this.BASE_URL}/comments`);
  }
}
