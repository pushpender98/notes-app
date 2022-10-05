import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  panelOpenState = false;
  @Input() posts: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
