import { FormArray, FormControl, FormGroup } from "@angular/forms";

export interface CustomizableFormGroup {
    questions: FormArray<FormGroup<QuestionFormGroup>>;
}

export interface QuestionFormGroup {
    text: FormGroup<string>;
    type: FormGroup<'paragraph' | 'checkbox'>;
    answer: FormControl<string> | FormArray<FormGroup<{
        option: FormControl<string>,
        value: FormControl<boolean>
    }>>;
}