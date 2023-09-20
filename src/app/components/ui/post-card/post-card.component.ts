import { Component, Input, OnInit } from '@angular/core';
import { IFullPost } from 'src/models/post';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
  @Input('post') post?: IFullPost;
  
  constructor(){}
  ngOnInit(): void {

  }

}
