import { Component, ElementRef, OnInit, ViewChild, inject, AfterViewInit } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { StepOneComponent } from '../components/step-one/step-one.component';
import { StepThreeComponent } from '../components/step-three/step-three.component';
import { StepTwoComponent } from '../components/step-two/step-two.component';
import { MatButtonModule } from '@angular/material/button';
import AutoAffiliationService, { AutoAffData } from '../services/auto-affiliation.service';
import { BehaviorSubject, EMPTY, EmptyError, Observable, Subject, Subscription, catchError, concatMap, delay, exhaustMap, finalize, first, fromEvent, last, map, mergeMap, of, switchMap, tap, throwError } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AsyncPipe, NgFor } from '@angular/common';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-auto-affiliation',
  imports: [
    MatStepperModule,
    MatButtonModule,
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent,
    AsyncPipe,
  ],
  standalone: true,
  templateUrl: './auto-affiliation.component.html',
  styleUrl: './auto-affiliation.component.scss'
})
export class AutoAffiliationComponent implements OnInit, AfterViewInit{
  profileForm: FormGroup;
  contactForm: FormGroup;
  private fb: FormBuilder = inject(FormBuilder);
  private autoAffService: AutoAffiliationService = inject(AutoAffiliationService);

  constructor() {

    this.profileForm = this.fb.group({
      firstName: this.fb.control(null, Validators.required),
      lastName: this.fb.control(null, Validators.required),
    });

    this.contactForm = this.fb.group({
      email: this.fb.control(null, [Validators.required, Validators.email]),
      cellphone: this.fb.control(null, Validators.required)
    });  
  }

  ngAfterViewInit() {

  }

  ngOnInit(): void {

  }

  saveChanges(): void {
    this.autoAffService.save(this.buildAutoAffData());
  }


  private buildAutoAffData(): AutoAffData {
    const autoAffData: AutoAffData = {
      profile: this.profileForm.getRawValue(),
      contact: this.contactForm.getRawValue()
    }

    return autoAffData;
  }
}