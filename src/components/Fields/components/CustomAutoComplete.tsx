import { Autocomplete, TextField } from "@mui/material";
import type { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import useLocalFormContext from "../hooks/useLocalFormContext";
import CustomSkeleton from "src/components/common/CustomSkeleton";
import type { CustomAutoCompleteComponentProps } from "../types";

const CustomAutoComplete: FC<CustomAutoCompleteComponentProps> = ({
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
          field: { onChange, value },
          fieldState: { error },
        }) => (
          <Autocomplete
            {...props}
            size={size}
            onChange={(_, item) => {
              onChange(item?.value ?? null);
              if (resetFieldsOnChange?.length) {
                resetFieldsOnChange.forEach((key) => {
                  setValue(key, null);
                });
              }
            }}
            value={
              options.find((item) => item.id === value) ?? {
                label: "",
                id: 0,
                value: "",
              }
            }
            noOptionsText="آیتمی یافت نشد" // TODO: translation
            options={options}
            renderInput={(params) => (
              <TextField
                {...params}
                label={label}
                error={!!error?.message}
                helperText={error?.message?.toString()}
                inputProps={{
                  ...params.inputProps,
                }}
                InputProps={{
                  ...params.InputProps,
                }}
              />
            )}
          />
        )}
      />
    </CustomSkeleton>
  );
};

export default CustomAutoComplete;
