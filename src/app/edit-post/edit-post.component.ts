import { Component, OnInit, Injectable, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from '../post-service.service';
import { BlogPost } from '../BlogPost';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
})
export class EditPostComponent implements OnInit {
  constructor(
    private data: PostService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  blogPost: BlogPost;
  tags: String;
  epTmp: any;

  ngOnInit(): void {
    this.epTmp = this.data
      .getPostbyId(this.route.snapshot.params['id'])
      .subscribe((data) => {
        this.blogPost = data;
        this.tags = this.blogPost.tags.toString();
      });
  }

  ngOnDestroy() {
    if (this.epTmp) this.epTmp.unsubscribe();
  }

  formSubmit() {
    this.blogPost.tags = this.tags.split(',').map((tag) => tag.trim());
    this.data
      .updatePostById(this.blogPost._id, this.blogPost)
      .subscribe(() => this.router.navigate(['admin']));
  }

  deletePost() {
    console.log(this.blogPost);
    this.data
      .deletePostById(this.blogPost._id)
      .subscribe(() => this.router.navigate(['admin']));
  }
}
