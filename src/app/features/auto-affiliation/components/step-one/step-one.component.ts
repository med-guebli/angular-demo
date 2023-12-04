import { Component, Input, OnInit, inject } from '@angular/core';
import { FormBuilder, AbstractControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import AutoAffiliationService, { Profile } from '../../services/auto-affiliation.service';
import { PostService } from '../../services/post.service';
import { catchError, first, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';
 
@Component({
  selector: 'app-step-one',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    AsyncPipe
  ],
  templateUrl: './step-one.component.html',
  styleUrl: './step-one.component.scss'
})
export class StepOneComponent implements OnInit {
  @Input() form!: FormGroup;

  private postService: PostService = inject(PostService);

  protected readonly posts$ = this.postService.posts$
    .pipe(
      first(),
      catchError((error) => {
        return of([]);
      })
    );
  
    
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
