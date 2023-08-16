import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BlogServiceService } from 'src/app/service/blog-service.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent {

  post: any;
  comments: any[] = [];
  commentForm: FormGroup;
  @Input() postId: number = 0; 
  
  constructor(private route: ActivatedRoute, private blogService: BlogServiceService, private fb: FormBuilder){
    this.commentForm = this.fb.group({
      content: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.commentForm.valid) {
      const content = this.commentForm.get('content')?.value;
      const newComment = { content };
      console.log(newComment);
      
      // Llama al servicio para crear el comentario
      this.blogService.createComment(this.postId, newComment).subscribe(
        (response) => {
          // Actualiza la lista de comentarios con el nuevo comentario
          this.comments.push(response);
          
          // Limpia el formulario
          this.commentForm.reset();
        },
        (error) => {
          console.error('Error al crear comentario:', error);
        }
      );
    }
  }
}
