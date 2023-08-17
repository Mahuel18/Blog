import { Component, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Comments } from 'src/app/models/comments';
import { BlogServiceService } from 'src/app/service/blog-service.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnDestroy {
  @Input() postId: number = 1; 
  private commentsSubscription: Subscription;
  comments: Comments[] = [];
  
  constructor(private route: ActivatedRoute, private blogService: BlogServiceService){
    this.commentsSubscription = this.blogService.getCommentsUpdatedObservable().subscribe(() => {
      this.refreshComments();
    });
  }

  refreshComments() {
    // Actualizar la lista de comentarios
    this.blogService.getComments(this.postId).subscribe((comments) => {
      this.comments = comments;
    });
  }
  
  ngOnInit(): void{
      this.loadComments(this.postId);
  }

  ngOnDestroy(): void {
    this.commentsSubscription.unsubscribe();
  }
  
  loadComments(postId: number){
    this.blogService.getComments(postId).subscribe(
      (comments) => {
        this.comments = comments;
      }, (error) => {
        console.log(error);
      }
    );
  }
}
