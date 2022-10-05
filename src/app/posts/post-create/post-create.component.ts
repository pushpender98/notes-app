import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {
  formGroup!: FormGroup;

  @Output() postCreated: any = new EventEmitter();

  constructor(private fb: FormBuilder) { }

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
    
    const { title, content } = post;
    console.log(post)
    this.postCreated.emit(post);
  }

}
