import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, NgForm, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {ServiceCallsService} from './service-calls.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'idproject';
  signupForm: FormGroup;
  FirstName = '';
  LastName = '';
  Email = '';
  Password = '';
  person={
    firstName: '',
    lastName:'',
    email:'',
    password: ''
  };

constructor(private frmbuilder: FormBuilder , private http: HttpClient, private service: ServiceCallsService) {
  this.signupForm = frmbuilder.group({
  fname: ['', [Validators.required]],
  lname: ['', [Validators.required]],
  EmailId: ['', [Validators.required, Validators.email]],
  userpassword: ['', [Validators.required, Validators.minLength(10)]]
  });
}
ngOnInit() {

}
  PostData(signupForm: any) {
    this.FirstName = signupForm.controls.fname.value;
    this.LastName = signupForm.controls.lname.value;
    this.Email = signupForm.controls.EmailId.value;
    this.Password = signupForm.controls.userpassword.value;
    this.person.firstName = signupForm.controls.fname.value;
    this.person.lastName = signupForm.controls.lname.value;
    this.person.email = signupForm.controls.EmailId.value;
    this.person.password = signupForm.controls.userpassword.value;

    console.log('fname:', this.FirstName);
    console.log('lname', this.LastName);
    console.log('EmailId', this.Email);
    console.log('userpassword,', this.Password);
    // console.log(signupForm.controls);
    this.service.storeDetails(this.person);
  }
  btfunc() {
    window.alert('Signin sucessfull');
    
  }
}
