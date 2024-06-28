import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { phoneNumberValidator } from '../phoneVaidator';

@Component({
  selector: 'app-emp-form',
  templateUrl: './emp-form.component.html',
  styleUrls: ['./emp-form.component.css'],
})
export class EmpFormComponent implements OnInit {
  empForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.empForm = this.fb.group({
      name: ['', Validators.required],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(
            '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$'
          ),
        ],
      ],
      phone: [
        '',
        [
          Validators.required,
          phoneNumberValidator,
          Validators.pattern('^[0-9]{10}$'),
        ],
      ],
      gender: ['', Validators.required],
      department: ['', Validators.required],
      skills: this.fb.array([]),
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pincode: ['', Validators.required],
      country: ['', Validators.required],
    });
  }

  ngOnInit() {}

  get skills(): FormArray {
    return this.empForm.get('skills') as FormArray;
  }

  onCheckboxChange(e: any) {
    const skills: FormArray = this.empForm.get('skills') as FormArray;
    if (e.target.checked) {
      skills.push(this.fb.control(e.target.value));
    } else {
      const index = skills.controls.findIndex(
        (x) => x.value === e.target.value
      );
      skills.removeAt(index);
    }
  }

  onSubmit() {
    if (this.empForm.valid) {
      console.log('Form Submitted!', this.empForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
