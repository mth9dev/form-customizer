import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionGroup } from 'src/app/models/question';
import { FormService } from 'src/app/services/form.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss']
})
export class BuilderComponent implements OnInit, OnDestroy {

  private _subs = new SubSink();
  private _form: FormGroup | undefined;
  private _questionGroup: QuestionGroup | undefined;

  constructor(
    private _formService: FormService,
  ) { }

  ngOnInit(): void {
    this._subs.sink = this._formService.form$.subscribe(form => {
      this._form = form;
    });

    this._subs.sink = this._formService.questionGroup$.subscribe(group => {
      this._questionGroup = group;
    });
  }

  ngOnDestroy(): void {
    this._subs.unsubscribe();
  }

}
