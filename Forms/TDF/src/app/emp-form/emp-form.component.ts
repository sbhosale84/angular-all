import { Component } from '@angular/core';
import { EmpData } from '../emp-data';

@Component({
  selector: 'app-emp-form',
  templateUrl: './emp-form.component.html',
  styleUrls: ['./emp-form.component.css']
})
export class EmpFormComponent {
  myData = new EmpData(
    'Soham',
    'svb@m.com',
    '6127292722',
    'abc',
    'cde',
    'fgh',
    '123456',
    'Ind',
    'Male',
    ['CSS'],
    ""  
  );

  onSubmit(form: any) {
    console.log('Form Submitted!', form.value);
  }

  updateSkills(skill: string, event: any) {
    if (event.target.checked) {
      this.myData.skills.push(skill);
    } else {
      const index = this.myData.skills.indexOf(skill);
      if (index > -1) {
        this.myData.skills.splice(index, 1);
      }
    }
  }
}
