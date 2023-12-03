import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { first } from 'rxjs';

@Component({
  selector: 'app-step-two',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatButtonModule,
  ],
  templateUrl: './step-two.component.html',
  styleUrl: './step-two.component.scss'
})
export class StepTwoComponent implements OnInit {

  constructor(private httpClient: HttpClient){
  }

  ngOnInit(): void {
    this.httpClient
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .pipe(
        first()
      ).subscribe((data) => {
        console.log(data);
      });
    
    console.log('Init Contact');
  }

  @Input() form!: FormGroup;

  get email(): AbstractControl | null {
    return this.form.get('email');
  }

  get cellphone(): AbstractControl | null {
    return this.form.get('cellphone');
  }
}
