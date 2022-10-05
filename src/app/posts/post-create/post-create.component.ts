import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostsService } from '../posts.service';


@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(private fb: FormBuilder, public postService: PostsService) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.fb.group({
      'title': ['', [Validators.required]],
      'content': [null, [Validators.required]],
    });
  }

  onAddPost(post: any) {
    if (!this.formGroup.valid) return;
    this.postService.addPost(post.title, post.content)
    this.formGroup.reset();
  }

}
