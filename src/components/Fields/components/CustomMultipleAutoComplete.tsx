import { Autocomplete, TextField } from "@mui/material";
import type { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import type { CustomAutoCompleteProps, Option } from "../types";
import useLocalFormContext from "../hooks/useLocalFormContext";
import CustomSkeleton from "src/components/common/CustomSkeleton";

const CustomMultipleAutoComplete: FC<
  CustomAutoCompleteProps<Option, true, false, false>
> = ({
  options = [],
  name,
  size,
  label,
  labelFormatter,
  resetFieldsOnChange = [],
  ...props
}) => {
  const { control, setValue } = useFormContext();

  const context = useLocalFormContext();

  return (
    <CustomSkeleton isLoading={context?.isLoading}>
      <Controller
        control={control}
        name={name}
        render={({
          field: { onChange, value, name },
          formState: { errors },
        }) => (
          <Autocomplete
            {...props}
            multiple
            size={size}
            onChange={(_, value) => {
              const _value =
                value?.map((item) => {
                  return item.value;
                }) ?? [];
              onChange(_value);

              if (resetFieldsOnChange?.length) {
                resetFieldsOnChange.forEach((key) => {
                  setValue(key, null);
                });
              }
            }}
            value={
              value
                ? options?.filter((item) => value.includes(item.id)) ?? []
                : []
            }
            options={options}
            renderInput={(params) => (
              <TextField
                {...params}
                label={label}
                error={!!errors[name]}
                helperText={errors[name]?.message?.toString()}
                inputProps={{
                  ...params.inputProps,
                }}
              />
            )}
          />
        )}
      />
    </CustomSkeleton>
  );
};

export default CustomMultipleAutoComplete;
