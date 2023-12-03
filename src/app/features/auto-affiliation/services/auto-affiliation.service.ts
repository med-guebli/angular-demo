import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

export interface Profile{
  firstName: string,
  lastName: string
}

export interface Contact {
  email: string,
  cellphone: string
}

export interface AutoAffData {
  profile: Profile | null,
  contact: Contact | null
}

@Injectable({
  providedIn: 'root'
})
export default class AutoAffiliationService {

  private autoAffiliationData$: ReplaySubject<AutoAffData> = new ReplaySubject<AutoAffData>(1);

  notify(autoAffData: AutoAffData): void {
    this.autoAffiliationData$.next(autoAffData);
  }

  getData(): Observable<AutoAffData> {
    return this.autoAffiliationData$.asObservable();
  }
}