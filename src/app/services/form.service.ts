import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, map } from 'rxjs';
import { CustomizableFormGroup, Preview, questionTypes } from '../models/question';

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

  get preview$() {
    return this._form.asObservable().pipe(map(formContent => this._makePreview(formContent)));
  }

  constructor(
  ) { }

  addQuestion(qForm: FormGroup) {
    // make it untouched.
    qForm.markAsUntouched();
    // add validation
    // if 'paragraph' type,
    if (qForm.get('type')!.value == questionTypes.PARAGRAPH) {
      qForm.get('answer')?.addValidators(Validators.required);
    }

    // add "other" option
    // if 'checkbox' type,
    if (qForm.get('type')!.value == questionTypes.CHECKBOX) {
      (qForm.get('answer') as FormArray).push(new FormGroup({
        'option': new FormControl('Other', Validators.required),
        'value': new FormControl(null),
      }));
    }

    let newform = (this._form.getValue());
    (newform.get('questions') as FormArray).push(qForm);
    this.form = newform;
  }

  //  make preview from form content
  private _makePreview(formContent: FormGroup<CustomizableFormGroup>) {
    let preview: Preview;
    preview = {
      questions: (formContent.get('questions') as FormArray).controls.map(q => {
        let ques: any = {
          text: q.get('text')?.value,
          type: q.get('type')?.value,
        };

        if (q.get('type')?.value == questionTypes.PARAGRAPH) {
          ques.answer = q.get('answer')?.value;
        }

        if (q.get('type')?.value == questionTypes.CHECKBOX) {
          // include only selected values in checkbox list
          ques.answer = (q.get('answer') as FormArray).controls
            .filter(ans => ans.get('value')?.value)
            .map(ans => ans.get('option')?.value);
        }
        return ques;
      })
    };

    return preview;
  }

}
