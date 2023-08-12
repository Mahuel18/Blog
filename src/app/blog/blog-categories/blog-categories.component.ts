import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogServiceService } from 'src/app/service/blog-service.service';

@Component({
  selector: 'app-blog-categories',
  templateUrl: './blog-categories.component.html',
  styleUrls: ['./blog-categories.component.css']
})
export class BlogCategoriesComponent {
  posts : any[] = [];
  BaseUrl = 'http://127.0.0.1:8000/';

  constructor(private route: ActivatedRoute, private blogService: BlogServiceService, private router: Router) {
   }

   viewPosts(id: number){
    this.router.navigate(['/post', id]);
  }
  
  viewCategory(categoryName: string) {
    this.router.navigate(['/categories', categoryName]);
  }

  ngOnInit(): void {
    const categoryName = this.route.snapshot.paramMap.get('categoryName');
    if (categoryName) {
      const catname =  categoryName;
      this.blogService.getPostsByCategory(catname).subscribe(
        (posts) => {
          console.log(posts);
          this.posts = posts;
        },
        (error) => {
          console.error(error);
        }
      );
    }
    
  }
}
