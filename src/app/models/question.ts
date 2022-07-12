export interface Question {
    type: 'paragraph' | 'checkbox';
    options?: string[];
}

export interface QuestionGroup {
    [questionSerial: string]: Question
}