import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Posts } from '../models/posts';

@Injectable({
  providedIn: 'root'
})

export class BlogServiceService {
  private baseUrl = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) { }

  // Obtener la lista de publicaciones
  public getPosts(): Observable<any> {
    return this.http.get<Posts>(`${this.baseUrl}posts/`);
  }

  // Crear una nueva publicación
  public createPost(post: any): Observable<any> {
    return this.http.post<Posts>(`${this.baseUrl}posts/`, post);
  }

  // Actualizar una publicación existente
  public updatePost(postId: number, post: any): Observable<any> {
    return this.http.put<Posts>(`${this.baseUrl}posts/${postId}/`, post);
  }

  // Eliminar una publicación
  public deletePost(postId: number): Observable<any> {
    return this.http.delete<Posts>(`${this.baseUrl}posts/${postId}/`);
  }

  // Obtener la lista de comentarios de una publicación
  public getComments(postId: number): Observable<any> {
    return this.http.get<Posts>(`${this.baseUrl}posts/${postId}/comments/`);
  }

  // Crear un nuevo comentario para una publicación
  public createComment(postId: number, comment: any): Observable<any> {
    return this.http.post<Posts>(`${this.baseUrl}posts/${postId}/comments/`, comment);
  }
}
