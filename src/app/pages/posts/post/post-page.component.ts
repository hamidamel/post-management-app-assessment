import { Component, OnInit } from '@angular/core';
import { ApiService } from '@services/api.service';
import { IFullPost, IPost } from 'src/models/post';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit{
  constructor(){
  }
  ngOnInit(): void {
  }

}
