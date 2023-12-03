import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import AutoAffiliationService, { AutoAffData } from '../../services/auto-affiliation.service';
import { JsonPipe } from '@angular/common';
import { Subscription, finalize, first } from 'rxjs';

@Component({
  selector: 'app-step-three',
  standalone: true,
  imports: [
    MatButtonModule,
    JsonPipe
  ],
  templateUrl: './step-three.component.html',
  styleUrl: './step-three.component.scss'
})
export class StepThreeComponent implements OnInit, OnDestroy {

  data?: AutoAffData;
  subscription!: Subscription;

  constructor(private autoAffService: AutoAffiliationService){
    
  }

  
  ngOnInit(): void {
    console.log('Init Recap');
    this.subscription = this.autoAffService
      .getData()
      .pipe(
        first()
      )
      .subscribe((data) => {
        console.log(data);
        this.data = data;
      });
  }

  onSubmit(): void {

  }

  ngOnDestroy(): void {
  }
}
