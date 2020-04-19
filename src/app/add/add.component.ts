import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators , ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private router: Router) { }
  addForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    content: new FormControl('', [Validators.required]),
  })
  ngOnInit() {
  }
  add(){
    let blogs = JSON.parse(localStorage.getItem('blogs'));
    let user = JSON.parse(localStorage.getItem('userDetails'))
    console.log(user)
    blogs.push({
      name: user.email,
      image: 'https://keirqld.com.au/wp-content/uploads/2016/04/man-in-office.jpg',
      title: this.addForm.value.title,
      content: this.addForm.value.content
    })
    console.log(blogs)
    localStorage.setItem('blogs',JSON.stringify(blogs));
    this.router.navigate(['blogs'])
  }

}
