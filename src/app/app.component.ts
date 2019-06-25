import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  errors = [
    {
      name: 'required',
      text: 'This field is required',
      rules: ['touched', 'dirty'],
    },
    { name: 'minlength', text: 'Min length is 5', rules: ['dirty'] },
    { name: 'maxlength', text: 'Max length is 16', rules: ['dirty'] }
  ];
  profileDate = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]),
  });


onSubmit(){
  if(this.profileDate.status == "VALID"){
    console.log(this.profileDate)
  } else {
    
  }
}

isControlInvalid(controlName: string): boolean {
  const control = this.profileDate.controls[controlName];
   const result = control.invalid && control.touched;
   return result;
  }

}
