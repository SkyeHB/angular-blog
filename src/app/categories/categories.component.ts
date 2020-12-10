import { Component, OnInit, Injectable } from '@angular/core';
import { PostService } from '../post-service.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
@Injectable({
  providedIn: 'root',
})
export class CategoriesComponent implements OnInit {
  categories: Array<any>;
  catTmp: any;

  constructor(private data: PostService) {}

  ngOnInit(): void {
    this.catTmp = this.data.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }
}
