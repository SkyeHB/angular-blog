import { Component, OnInit, Injectable } from '@angular/core';
import { PostService } from '../post-service.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
@Injectable({
  providedIn: 'root',
})

export class TagsComponent implements OnInit {

  tags: Array<string>;
  tagTmp: any;

  constructor(private post: PostService) { }

  ngOnInit(): void {
    this.tagTmp = this.post.getTags().subscribe((data) => {
      this.tags = data;
    });
  }

}
