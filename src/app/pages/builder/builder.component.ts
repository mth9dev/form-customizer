import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { questionTypes } from 'src/app/models/question';
import { FormService } from 'src/app/services/form.service';
import { AddQuestionDialogComponent } from 'src/app/shared/add-question-dialog/add-question-dialog.component';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss']
})
export class BuilderComponent implements OnInit, OnDestroy {

  private _subs = new SubSink();
  protected _form: FormGroup | undefined;
  protected _questionTypes = questionTypes;

  protected get _questionArray() {
    return this._form?.get('questions') as FormArray;
  }

  constructor(
    private _formService: FormService,
    private _dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this._subs.sink = this._formService.form$.subscribe(form => {
      this._form = form;
    });
  }

  ngOnDestroy(): void {
    this._subs.unsubscribe();
  }

  addNewQuestion() {
    this._dialog.open(AddQuestionDialogComponent, { minWidth: 425 });
  }

  onPreview() {
    console.log(this._questionArray)
  }

  getCheckboxFormArray(index: number) {
    return this._questionArray.at(index).get('answer') as FormArray;
  }

}
