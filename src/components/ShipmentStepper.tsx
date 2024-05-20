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
import { useShipment } from "../context/ShipmentContext";
import { useEffect } from "react";
import { SHIPMENT_STATE } from "../types/shipment";

const ShipmentStepper = () => {
  const { t } = useTranslation();
  const { shipment, colorScheme } = useShipment();
  const { dir } = useLocale();
  const [verticalStepper] = useMediaQuery("(max-width: 48em)");
  const steps = [
    { id: "1", description: t("shipment.stepper.state_created") },
    { id: "2", description: t("shipment.stepper.state_received") },
    { id: "3", description: t("shipment.stepper.state_in_transit") },
    { id: "4", description: t("shipment.stepper.state_delivered") },
  ];
  const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  const max = steps.length - 1;
  const progressPercent = (activeStep / max) * 100;
  useEffect(() => {
    setActiveStep(
      shipment.CurrentStatus?.state === SHIPMENT_STATE.DELIVERED
        ? 4
        : shipment.CurrentStatus?.state === SHIPMENT_STATE.OUT_FOR_DELIVERY
        ? 3
        : shipment.CurrentStatus?.state === SHIPMENT_STATE.PACKAGE_RECEIVED
        ? 2
        : shipment.CurrentStatus?.state === SHIPMENT_STATE.TICKET_CREATED
        ? 1
        : 0
    );
  }, [shipment]);

  return (
    <VStack py={{ base: 4, md: 6 }} px={{ base: 8, xl: 32, lg: 24 }}>
      <ShipmentDetailsCard />
      <VStack
        width="100%"
        py={{ base: 4, md: 10 }}
        px={{ base: 2, lg: 4 }}
        border="1px solid"
        borderColor="border"
        boxShadow={{ base: "md", md: "xl" }}
        rounded="md"
      >
        {verticalStepper ? (
          <Stepper
            index={activeStep}
            orientation="vertical"
            height="400px"
            gap="0"
            colorScheme={colorScheme}
            marginRight="-100px"
          >
            {steps.map((step, index) => (
              <Step key={index}>
                <StepIndicator>
                  <StepStatus
                    complete={<StepIcon />}
                    active={index == 1 ? "📥" : index == 2 ? "🛻" : ""}
                  />
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
                colorScheme={colorScheme}
                dir={dir}
                width="100%"
                display="flex"
              >
                {dir === "ltr"
                  ? steps.map((step, index) => (
                      <Step key={step.id}>
                        <StepIndicator bg="white">
                          <StepStatus
                            complete={<StepIcon />}
                            active={index == 1 ? "📥" : index == 2 ? "🛻" : ""}
                          />
                        </StepIndicator>
                      </Step>
                    ))
                  : steps.reverse().map((step, index) => (
                      <Step key={step.id}>
                        <StepIndicator bg="white">
                          <StepStatus
                            complete={<StepIcon />}
                            active={index == 1 ? "📥" : index == 2 ? "🛻" : ""}
                          />
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
                colorScheme={colorScheme}
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
