import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, AbstractControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import AutoAffiliationService, { Profile } from '../../services/auto-affiliation.service';
 
@Component({
  selector: 'app-step-one',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './step-one.component.html',
  styleUrl: './step-one.component.scss'
})
export class StepOneComponent implements OnInit {
  @Input() form!: FormGroup;

  ngOnInit(): void {
    console.log('Init Profile');
  }

  get firstName(): AbstractControl | null {
    return this.form.get('firstName');
  }

  get lastName(): AbstractControl | null {
    return this.form.get('lastName');
  }
}
