import { FormArray, FormControl, FormGroup } from "@angular/forms";

export interface CustomizableFormGroup {
    questions: FormArray<FormGroup<QuestionFormGroup>>
}

export interface QuestionFormGroup {
    text: FormControl;
    type: FormControl;
    answer?: FormControl | FormArray<FormGroup<{
        option: FormControl,
        value: FormControl
    }>>;
}

export const quesionTypes = {
    PARAGRAPH: 'paragraph',
    CHECKBOX: 'checkbox list',
}