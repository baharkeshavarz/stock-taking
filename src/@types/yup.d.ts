import * as yup from 'yup';

declare module 'yup' {
  interface StringSchema {
    globalMaxLength(this: StringSchema): StringSchema;
    globalTextAreaMaxLength(this: StringSchema): StringSchema;
    globalURLMaxLength(this: StringSchema): StringSchema;
    isMobileNumber(this: StringSchema): StringSchema;
    isNationalCode(this: StringSchema): StringSchema;
  }
}
