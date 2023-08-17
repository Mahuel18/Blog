import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, catchError, tap } from 'rxjs';
import { Posts } from '../models/posts';
import { Comments } from '../models/comments';

@Injectable({
  providedIn: 'root'
})

export class BlogServiceService {
  private commentsUpdatedSubject = new Subject<void>();

  private baseUrl = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) { 
    
   }

  // Obtener posts
  public getPosts(): Observable<any> {
    return this.http.get<Posts>(`${this.baseUrl}posts/`);
  }

  public getPostByID(id: number): Observable<any>{
    return this.http.get<Posts>(`${this.baseUrl}posts/${id}/`);
  }

  public getPostsByCategory(categoryName: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}categories/${categoryName}/`);
  }

  // CRUD de posts
  public createPost(post: any): Observable<any> {
    return this.http.post<Posts>(`${this.baseUrl}posts/`, post);
  }

  public updatePost(postId: number, post: any): Observable<any> {
    return this.http.put<Posts>(`${this.baseUrl}posts/${postId}/`, post);
  }

  public deletePost(postId: number): Observable<any> {
    return this.http.delete<Posts>(`${this.baseUrl}posts/${postId}/`);
  }

  //Comentarios
  public getComments(postId: number): Observable<any[]> {
    return this.http.get<Comments[]>(`${this.baseUrl}posts/${postId}/comments/`).pipe(
      catchError(error => {
        console.error('Error al obtener comentarios:', error);
        return [];
      })
    );
  }

  public createComment( postId: number, comment: string,): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Token ${localStorage.getItem('token')}`
      })
    };
    const body = {
      post : postId,
      content: comment
    }
    const url = `${this.baseUrl}posts/${postId}/comments/`;
    return this.http.post<Comments>(url, body, httpOptions);
  }

  public deleteComment(postId: number, commentId: number): Observable<any> {
    const url = `${this.baseUrl}posts/${postId}/comments/${commentId}/`;
    return this.http.delete(url);
  }

  triggerCommentsUpdated() {
    this.commentsUpdatedSubject.next();
  }
  getCommentsUpdatedObservable(): Observable<void> {
    return this.commentsUpdatedSubject.asObservable();
  }
}
