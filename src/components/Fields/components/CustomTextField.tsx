import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import type { CustomTextFieldProps } from "../types";
import useLocalFormContext from "../hooks/useLocalFormContext";
import ClearButtonAdornment from "./ClearButtonAdornment";
import { digitsArToEn, digitsFaToEn } from "@persian-tools/persian-tools";
import type { FC } from "react";
import CustomSkeleton from "src/components/common/CustomSkeleton";
import { isAllNumbers } from "src/utils/form";

const CustomTextField: FC<CustomTextFieldProps> = ({
  fullWidth = true,
  size = "small",
  ControllerProps = {},
  ...props
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const { isLoading } = useLocalFormContext();

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (["+", "-"].includes(event.key)) {
      event.preventDefault();
    }
  };

  return (
    <Controller
      name={props.name}
      control={control}
      {...ControllerProps}
      render={({ field: { value, onChange } }) => {
        const _onChange = (event: any) => {
          let isValid = true;
          const type = props.type?.toLowerCase();
          if (type === "number") {
            const _value = +event.target.value;

            isValid =
              _value >= (props.limitations?.min || -Infinity) &&
              _value <= (props.limitations?.max || Infinity);
          } else if (
            ["password", "text", "string", "tel", undefined].includes(type)
          ) {
            const _value = event.target.value;
            isValid =
              _value.length <= (props.limitations?.maxLength || Infinity) &&
              _value.length >= (props.limitations?.minLength || -Infinity);

            if (isValid && props.limitations?.onlyNumbers) {
              isValid = isAllNumbers(_value);
            }
          }

          if (isValid) {
            if (props.limitations?.onlyNumbers) {
              const value = event.target.value;
              onChange(digitsArToEn(digitsFaToEn(value)));
            } else {
              onChange(event);
            }
          }
        };

        return (
          <CustomSkeleton isLoading={isLoading}>
            <TextField
              {...props}
              onKeyDown={
                props?.type?.toLowerCase() === "number" ? onKeyDown : undefined
              }
              fullWidth={fullWidth}
              size={size}
              value={value ?? ""}
              onChange={_onChange}
              error={!!errors[props.name]}
              helperText={errors[props.name]?.message?.toString()}
              InputProps={{
                endAdornment: (
                  <>
                    {value && !props.disabled && (
                      <ClearButtonAdornment onChange={onChange} />
                    )}
                    {props.InputProps?.endAdornment}
                  </>
                ),
              }}
              inputProps={{
                ...(props.limitations?.onlyNumbers ? { dir: "ltr" } : {}),
                ...props.inputProps,
              }}
            />
          </CustomSkeleton>
        );
      }}
    />
  );
};

export default CustomTextField;
