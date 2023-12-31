import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { BlogServiceService } from 'src/app/service/blog-service.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  post: any;
  comments: any[] = [];
  newComment: string = '';
  postId: number = 0;
  BaseUrl = 'http://127.0.0.1:8000/';
  auth : boolean;

  constructor(private route: ActivatedRoute, private blogService: BlogServiceService, private authService: AuthService){
    this.route.params.subscribe((params) => {
      this.postId = params["id"];
    });
    if (this.authService.isAuthenticated()){
      this.auth = true;
    } else {
      this.auth = false;
      }
    };

  ngOnInit(): void {
    const postIdParam = this.route.snapshot.paramMap.get('id');
    if (postIdParam) {
      const postId = +postIdParam;
      this.blogService.getPostByID(postId).subscribe(
        (post) => {
          this.post = post;
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.error('El parámetro "id" es nulo o no está presente.');
    };
  }

  


}
