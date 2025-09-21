import { Box, Stack } from "@mui/material";
import type { StockKeeperPayload } from "src/services/stockkeeper/types";
import * as yup from "yup";
import { FormProvider, type SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CustomTextField } from "src/components/Fields";
import { useNavigate } from "react-router";
import { DEFAULT_HOME_ROUTE } from "src/constants";
import ButtonWithLoading from "src/components/common/ButtonWithLoading";
import { useState } from "react";

const StockKeeperForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const labels: Record<keyof StockKeeperPayload, string> = {
    name: "انباردار",
  };

  const resolveSchema: yup.ObjectSchema<StockKeeperPayload> = yup.object({
    name: yup.string().required().label(labels.name),
  });

  const methods = useForm<StockKeeperPayload>({
    resolver: yupResolver(resolveSchema),
  });

  const { handleSubmit } = methods;
  const onSubmit: SubmitHandler<StockKeeperPayload> = async () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate(DEFAULT_HOME_ROUTE);
    }, 2000);
  };

  return (
    <FormProvider {...methods}>
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap={5}
        width="100%"
        mb={2}
      >
        <Stack spacing={2} width="100%">
          <CustomTextField label="نام انباردار را وارد نمایید." name="name" />
          <ButtonWithLoading
            type="submit"
            variant="contained"
            size="large"
            fullWidth
            loading={isLoading}
          >
            انبارگردانی
          </ButtonWithLoading>
        </Stack>
      </Box>
    </FormProvider>
  );
};

export default StockKeeperForm;
