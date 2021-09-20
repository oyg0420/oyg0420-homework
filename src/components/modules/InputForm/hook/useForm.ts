import { ChangeEvent, useCallback, useState } from 'react';

type FormValues<T> = {
  [Key in keyof T]: string;
};

type Option = {
  rules: {
    maxLength?: number;
  };
};

type FormStates<T> = {
  defaultValues: {
    [Key in keyof T]: string;
  };
  isDirty: boolean;
};

export const useForm = <T>(values: FormValues<T>) => {
  const [formState, setFormstate] = useState<FormStates<T>>({
    isDirty: false,
    defaultValues: values,
  });
  const [formValues, setFormValues] = useState<FormValues<T>>(values);

  const handleValueChange = useCallback(
    (nextValue: string, name: Partial<keyof T>, option?: Option) => {
      const nextFormValues = { ...formValues };
      const maxLength = option?.rules.maxLength || Infinity;
      nextFormValues[name] = nextValue;

      if (maxLength >= nextFormValues[name].length) {
        setFormValues(nextFormValues);
        if (nextValue !== formState.defaultValues[name]) {
          setFormstate({ ...formState, isDirty: true });
        } else {
          setFormstate({ ...formState, isDirty: false });
        }
      }
    },
    [formValues, formState]
  );

  const register = (name: Partial<keyof T>, option?: Option) => {
    return {
      value: formValues[name],
      option,
      onChange: (e: ChangeEvent<HTMLTextAreaElement>) => handleValueChange(e.target.value, name, option),
    };
  };

  return {
    register,
    formState,
  };
};
