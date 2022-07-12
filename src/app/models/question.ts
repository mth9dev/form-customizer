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

export const questionTypes = {
    PARAGRAPH: 'paragraph',
    CHECKBOX: 'checkbox list',
}

export interface Preview {
    questions: {
        text: string;
        type: 'paragraph' | 'checkbox list';
        answer: string | string[]
    }[]
}