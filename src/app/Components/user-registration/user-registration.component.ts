import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../../Services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-registration',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.scss',
})
export class UserRegistrationComponent implements OnInit {
  userForm!: FormGroup;


  constructor(private fb: FormBuilder, private userService: UserService) {}
  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.userForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      mobile: this.fb.array([this.createMobileNumber()]),

      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: [''],
    });
  }

  createMobileNumber(): FormGroup {
    return this.fb.group({
      mobile: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
    });
  }

  addMobileNumber() {
    const mobileNumbers = this.userForm.get('mobile') as FormArray;
    mobileNumbers.push(this.createMobileNumber());
  }

  removeMobileNumber(index: number) {
    const mobileNumbers = this.userForm.get('mobile') as FormArray;
    if (mobileNumbers.length > 1) {
      mobileNumbers.removeAt(index);
    }
  }

  onSubmit() {
    if (this.userForm.valid) {
      const newUser = this.userForm.value;
      this.userService.addUser(newUser).subscribe({
        next: (addedUser) => {
          console.log('User added successfully:', addedUser);
        },
        error: (err) => {
          console.error('Error adding user:', err);
        },
      });
    } else {
      console.log('Invalid Form');
    }
  }

  get fullName() {
    return this.userForm.get('fullName');
  }

  get email() {
    return this.userForm.get('email');
  }

  get mobile() {
    return this.userForm.get('mobile') as FormArray;
  }

  get address() {
    return this.userForm.get('address') as FormArray;
  }

  get password() {
    return this.userForm.get('password');
  }
  get confirmPassword() {
    return this.userForm.get('confirmPassword');
  }
}
