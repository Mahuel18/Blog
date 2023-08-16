import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogServiceService } from 'src/app/service/blog-service.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnChanges {
  @Input() postId: number = 0; 
  comments: any[] =[];
  
  constructor(private route: ActivatedRoute, private blogService: BlogServiceService){
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['postId'] && this.postId) {
      this.getComments();
    }
  }
  
  ngOnInit(): void{
      this.loadComments(this.postId);
  }

  
  getComments() {
    this.blogService.getComments(this.postId).subscribe(
      (response) => {
        this.comments = response;
      },
      (error) => {
        console.error('Error al obtener comentarios:', error);
      }
    );
  }
  
  loadComments(postId: number){
    this.blogService.getComments(postId).subscribe(
      (comments) => {
        console.log(comments);
        this.comments = comments;
      }, (error) => {
        console.log(error);
      }
    );
  }
}
