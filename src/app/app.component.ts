import { Component } from '@angular/core';
import{ FormGroup,FormControl,FormBuilder,NgForm, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'idproject';
  signupForm: FormGroup;
  FirstName: string="";
  LastName: string="";
  Email: string="";
  Password:string="";

constructor(private frmbuilder:FormBuilder , private http: HttpClient){
  this.signupForm=frmbuilder.group({
  fname: ['',[Validators.required]],
  lname: ['',[Validators.required]],
  EmailId: ['',[Validators.required,Validators.email]],
  userpassword: ['',[Validators.required,Validators.minLength(10)]]
  });
}
ngOnInit(){

}
  PostData(signupForm:any)
  {
    this.FirstName=signupForm.controls.fname.value;
    this.LastName=signupForm.controls.lname.value;
    this.Email=signupForm.controls.EmailId.value;
    this.Password=signupForm.controls.userpassword.value;
    console.log("fname:",this.FirstName);
    console.log("lname",this.LastName);
    console.log("EmailId",this.Email);
    console.log("userpassword,",this.Password);
    // console.log(signupForm.controls);
  }
  btfunc(){
    window.alert("Signin sucessfull");
  }
}