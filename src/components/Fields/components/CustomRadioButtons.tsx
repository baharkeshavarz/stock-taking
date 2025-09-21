import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import type { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import type { CustomRadioButtonsProps } from "../types";

const CustomRadioButtons: FC<CustomRadioButtonsProps> = ({
  label,
  name,
  options,
}) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name as string}
      control={control}
      render={({ field }) => {
        const id = `${field.name}-radio-buttons`;
        return (
          <FormControl>
            <FormLabel id={id}>{label}</FormLabel>
            <RadioGroup
              value={field.value || ""}
              onChange={(_, value) => field.onChange(value || null)}
              aria-labelledby={id}
              name={field.name}
            >
              {options.map((option) => {
                return (
                  <FormControlLabel
                    key={option.value as string}
                    value={option.value}
                    control={<Radio />}
                    label={option.label}
                  />
                );
              })}

              <FormControlLabel value={""} control={<Radio />} label="None" />
            </RadioGroup>
          </FormControl>
        );
      }}
    />
  );
};

export default CustomRadioButtons;
