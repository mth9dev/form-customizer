import { Injectable } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { CustomizableFormGroup } from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private _form = new BehaviorSubject<FormGroup<CustomizableFormGroup> | undefined>(
    new FormGroup<any>({
      'questions': new FormArray<any>([])
    })
  );

  get form$() {
    return this._form.asObservable();
  }

  set form(formGroup: FormGroup | undefined) {
    this._form.next(formGroup);
  }

  constructor(
  ) { }

  addQuestion(qForm : FormGroup) {
    console.log(qForm)
  }

}
