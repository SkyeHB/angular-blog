import { Component, OnInit, Injectable, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from '../BlogPost';
import { PostService } from '../post-service.service';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.css'],
})
@Injectable({
  providedIn: 'root',
})
export class PostDataComponent implements OnInit {
  post: BlogPost;
  commentName: string;
  commentText: string;

  constructor(private data: PostService, private route: ActivatedRoute) {}

  querySub: any;

  ngOnInit(): void {
    this.querySub = this.route.params.subscribe((params) => {
      this.data.getPostbyId(params['id']).subscribe((data) => {
        this.post = data;
        this.post.views += 1;
        this.data.updatePostById(this.post._id, this.post).subscribe();
      });
    });
  }

  ngOnDestroy() {
    if (this.querySub) this.querySub.unsubscribe();
  }

  submitComment() {
    this.post.comments.push({
      author: this.commentName,
      comment: this.commentText,
      date: new Date().toLocaleDateString(),
    });
    this.data.updatePostById(this.post._id, this.post).subscribe(() => {
      this.commentName = '';
      this.commentText = '';
    });
  }
}
