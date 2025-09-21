import * as yup from "yup";

export const faLocale: yup.LocaleObject = {
  string: {
    length({ length, path }) {
      return `${path} باید ${length} کاراکتر باشد.`;
    },
    max: ({ max }) => {
      return `حداکثر ${max} کاراکتر مجاز است.`;
    },
    min: ({ min }) => {
      return `حداقل ${min} کاراکتر وارد کنید.`;
    },
    url: ({ label }) => {
      return `${label} می‌بایست یک آدرس صحیح URL باشد`;
    },
  },
  array: {
    min: ({ min }) => {
      return `حداقل ${min} مورد انتخاب کنید.`;
    },
  },
  mixed: {
    required: ({ label }) => `وارد کردن ${label} اجباری است.`,
    notType: `وارد کردن این فیلد اجباری است.`,
  },
};
