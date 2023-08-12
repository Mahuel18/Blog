import { Component, OnInit } from '@angular/core';
import { BlogServiceService } from '../../service/blog-service.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent /*implements OnInit*/ {
posts : any[] = [];
BaseUrl = 'http://127.0.0.1:8000/'

constructor(private blogService: BlogServiceService, private router: Router) {}

ngOnInit(): void {
    this.loadPosts();
}

loadPosts(){
  this.blogService.getPosts().subscribe(
    (response) => {
      this.posts = response;
      
    },
    (error) => {
      console.log('Error al cargar las publicaciones:', error);
    }
  );
}

viewPosts(id: number){
  this.router.navigate(['/post', id]);
}

viewCategory(categoryName: string) {
  this.router.navigate(['/categories', categoryName]);
}
}
