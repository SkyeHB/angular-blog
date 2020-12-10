import { Component, OnInit, Injectable} from '@angular/core';
import { BlogPost } from "../BlogPost";
import { PostService } from '../post-service.service';

@Component({
  selector: 'app-latest-posts',
  templateUrl: './latest-posts.component.html',
  styleUrls: ['./latest-posts.component.css']
})
@Injectable({
  providedIn: 'root',
})
export class LatestPostsComponent implements OnInit {

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
