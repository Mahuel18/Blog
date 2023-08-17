import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BlogServiceService } from 'src/app/service/blog-service.service';
import { CommentListComponent } from '../comment-list/comment-list.component';
import * as jwt_decode from 'jwt-decode'; 

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent {

  post: any;
  comments: any[] = [];
  commentForm: FormGroup;
  @Input() postId: number = 1; 
  
  constructor(private route: ActivatedRoute, private blogService: BlogServiceService, private fb: FormBuilder){
    this.commentForm = this.fb.group({
      content: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.commentForm.valid) {
      const content = this.commentForm.get('content')?.value;
      const post = this.postId;
      const newComment = content;
      
      this.blogService.createComment(post, newComment ).subscribe(
        (response) => {
          this.commentForm.reset();
          this.blogService.triggerCommentsUpdated();
        },
        (error) => {
          console.error('Error al crear comentario:', error);
        }
      );
    }
  }
}
