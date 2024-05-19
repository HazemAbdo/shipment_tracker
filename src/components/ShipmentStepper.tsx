import {
  Box,
  HStack,
  Progress,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  Stepper,
  Text,
  VStack,
  useSteps,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useLocale } from "../context/LocaleContext";
import ShipmentDetailscard from "./ShipmentDetailscard";

const ShipmentStepper = () => {
  const { t } = useTranslation();
  const steps = [
    { description: t("shipment_stepper.shipment_created") },
    { description: t("shipment_stepper.shipment_received") },
    { description: t("shipment_stepper.shipment_in_transit") },
    { description: t("shipment_stepper.shipment_delivered") },
  ];
  const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  const activeStepText = steps[activeStep].description;

  const max = steps.length - 1;
  const progressPercent = (activeStep / max) * 100;
  const { dir } = useLocale();
  return (
    <VStack py={{ base: 4, md: 6 }} px={{ base: 8, lg: 32 }}>
      <ShipmentDetailscard />
      <VStack
        width="100%"
        py={{ base: 4, md: 6 }}
        px={{ base: 2, lg: 4 }}
        border="1px solid"
        borderColor="border"
      >
        <Box position="relative" width="100%">
          <Stepper
            size="md"
            index={activeStep}
            colorScheme="red"
            dir={dir}
            width="100%"
            display="flex"
          >
            {steps.map((step, index) => (
              <Step key={index} dir={dir}>
                <StepIndicator bg="white">
                  <StepStatus complete={<StepIcon />} />
                </StepIndicator>
              </Step>
            ))}
          </Stepper>
          <Progress
            value={progressPercent}
            position="absolute"
            height="3px"
            width="full"
            top="15px"
            zIndex={-2}
            colorScheme="red"
          />
        </Box>
        <HStack justifyContent="space-between" width="100%">
          {steps.map((step, index) => (
            <Text key={index}>{step.description}</Text>
          ))}
        </HStack>
      </VStack>
    </VStack>
  );
};

export default ShipmentStepper;
