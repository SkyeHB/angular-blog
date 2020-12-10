import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../BlogPost';
import { PostService } from '../post-service.service';

@Component({
  selector: 'app-footer-posts',
  templateUrl: './footer-posts.component.html',
  styleUrls: ['./footer-posts.component.css']
})
export class FooterPostsComponent implements OnInit {

  post: Array<BlogPost>;
  lpTmp: any;
  constructor(private data: PostService) { }

  ngOnInit(): void {
    this.lpTmp = this.data.getPosts(1, null, null).subscribe((data) => {
      let newdata = data.slice(0,3);
      this.post = newdata;
    });
  }


}
