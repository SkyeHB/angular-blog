import { Component, OnInit, Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../post-service.service';
import { BlogPost } from '../BlogPost';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-posts-table',
  templateUrl: './posts-table.component.html',
  styleUrls: ['./posts-table.component.css'],
})
export class PostsTableComponent implements OnInit {
  constructor(private data: PostService, private route: Router) {}

  blogPosts: Array<BlogPost> = [];
  ptTmp: any;

  ngOnInit(): void {
    this.ptTmp = this.data.getAllPosts().subscribe((data) => {
      this.blogPosts = data;
    });
  }
  ngOnDestroy() {
    if (this.ptTmp) this.ptTmp.unsubscribe();
  }
  rowClicked(e, id) {
    this.route.navigate(['/admin/post', id]);
  }
}
