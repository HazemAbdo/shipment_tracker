import {
  Box,
  HStack,
  Progress,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepSeparator,
  StepStatus,
  Stepper,
  Text,
  VStack,
  useMediaQuery,
  useSteps,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useLocale } from "../context/LocaleContext";
import ShipmentDetailsCard from "./ShipmentDetailsCard";
const ShipmentStepper = () => {
  const { t } = useTranslation();
  const steps = [
    { description: t("shipment.stepper.state_created") },
    { description: t("shipment.stepper.state_received") },
    { description: t("shipment.stepper.state_in_transit") },
    { description: t("shipment.stepper.state_delivered") },
  ];
  const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  const activeStepText = steps[activeStep].description;
  const [verticalStepper] = useMediaQuery("(max-width: 48em)");
  const max = steps.length - 1;
  const progressPercent = (activeStep / max) * 100;
  const { dir } = useLocale();
  return (
    <VStack py={{ base: 4, md: 6 }} px={{ base: 8, lg: 32 }}>
      <ShipmentDetailsCard />
      <VStack
        width="100%"
        py={{ base: 4, md: 10 }}
        px={{ base: 2, lg: 4 }}
        border="1px solid"
        borderColor="border"
      >
        {verticalStepper ? (
          <Stepper
            index={activeStep}
            orientation="vertical"
            height="400px"
            gap="0"
            colorScheme="red"
            marginRight="-100px"
          >
            {steps.map((step, index) => (
              <Step key={index}>
                <StepIndicator>
                  <StepStatus complete={<StepIcon />} />
                </StepIndicator>

                <Box flexShrink="0">
                  <StepDescription
                    style={{
                      textWrap: "wrap",
                      width: "15ch",
                    }}
                  >
                    {step.description}
                  </StepDescription>
                </Box>

                <StepSeparator />
              </Step>
            ))}
          </Stepper>
        ) : (
          <>
            <Box position="relative" width="100%">
              <Stepper
                size="md"
                index={activeStep}
                colorScheme="red"
                dir={dir}
                width="100%"
                display="flex"
              >
                {dir === "ltr"
                  ? steps.map((step, index) => (
                      <Step key={index}>
                        <StepIndicator bg="white">
                          <StepStatus complete={<StepIcon />} />
                        </StepIndicator>
                      </Step>
                    ))
                  : steps.reverse().map((step, index) => (
                      <Step key={index}>
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
                dir={dir}
              />
            </Box>
            <HStack justifyContent="space-between" width="100%">
              {steps.map((step, index) => (
                <Text key={index}>{step.description}</Text>
              ))}
            </HStack>
          </>
        )}
      </VStack>
    </VStack>
  );
};

export default ShipmentStepper;
