import { Injectable } from '@angular/core';
import { FormArray, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { CustomizableFormGroup, quesionTypes } from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private _form = new BehaviorSubject<FormGroup<CustomizableFormGroup>>(
    new FormGroup<any>({
      'questions': new FormArray<any>([])
    })
  );

  get form$() {
    return this._form.asObservable();
  }

  set form(formGroup: FormGroup) {
    this._form.next(formGroup);
  }

  constructor(
  ) { }

  addQuestion(qForm : FormGroup) {
    // make it untouched.
    qForm.markAsUntouched();
    // add validation
    // if 'paragraph' type,
    if(qForm.get('type')!.value == quesionTypes.PARAGRAPH) {
      qForm.get('answer')?.addValidators(Validators.required);
    }
    let newform = (this._form.getValue());
    (newform.get('questions') as FormArray).push(qForm);
    this.form = newform;
  }

}
