import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Question } from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private _form = new BehaviorSubject<FormGroup | undefined>(new FormGroup({
    'questions': new FormArray([])
  }));
  private _questionGroup = new BehaviorSubject<Question[] | undefined>(undefined);

  get form$() {
    return this._form.asObservable();
  }

  set form(formGroup: FormGroup | undefined) {
    this._form.next(formGroup);
  }

  get questionGroup$() {
    return this._questionGroup.asObservable();
  }

  set questionGroup(questionGroup: Question[] | undefined) {
    this._questionGroup.next(questionGroup);
  }

  constructor(
    private _fb: FormBuilder,
  ) { }

}
