import { Component, OnInit, ViewChild } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { StepOneComponent } from '../components/step-one/step-one.component';
import { StepThreeComponent } from '../components/step-three/step-three.component';
import { StepTwoComponent } from '../components/step-two/step-two.component';
import { MatButtonModule } from '@angular/material/button';
import AutoAffiliationService, { AutoAffData } from '../services/auto-affiliation.service';
import { BehaviorSubject, Subject } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auto-affiliation',
  imports: [
    MatStepperModule,
    MatButtonModule,
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent,
  ],
  standalone: true,
  templateUrl: './auto-affiliation.component.html',
  styleUrl: './auto-affiliation.component.scss'
})
export class AutoAffiliationComponent implements OnInit{
  profileForm: FormGroup;
  contactForm: FormGroup;
  
  constructor(private fb: FormBuilder, private autoAffService: AutoAffiliationService) {

    this.profileForm = this.fb.group({
      firstName: this.fb.control(null, Validators.required),
      lastName: this.fb.control(null, Validators.required)
    });

    this.contactForm = this.fb.group({
      email: this.fb.control(null, [Validators.required, Validators.email]),
      cellphone: this.fb.control(null, Validators.required)
    });  
  }
  
  ngOnInit(): void {
  }

  saveChanges(): void {
    this.autoAffService.notify(this.buildAutoAffData());
  }


  private buildAutoAffData(): AutoAffData {
    const autoAffData: AutoAffData = {
      profile: this.profileForm.getRawValue(),
      contact: this.contactForm.getRawValue()
    }

    return autoAffData;
  }
}
