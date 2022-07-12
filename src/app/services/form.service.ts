import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { QuestionGroup } from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private _form = new BehaviorSubject<FormGroup | undefined>(undefined);
  private _questionGroup = new BehaviorSubject<QuestionGroup | undefined>(undefined);

  get form$() {
    return this._form.asObservable();
  }

  set form(formGroup: FormGroup | undefined) {
    this._form.next(formGroup);
  }

  get questionGroup$() {
    return this._questionGroup.asObservable();
  }

  set questionGroup(questionGroup: QuestionGroup | undefined) {
    this._questionGroup.next(questionGroup);
  }

  constructor(
    private _fb: FormBuilder,
  ) { }

}
