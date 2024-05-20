import { Box, Image, VStack, Button, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useLocale } from "../context/LocaleContext";
import ProblemImage from "../assets/report-problem-vector.jpg";
const ReportProblemCard = () => {
  const { t } = useTranslation();
  const { dir } = useLocale();

  return (
    <Box
      display="flex"
      flexDirection={{ base: "column", sm: "row" }}
      gap="1rem"
      gridArea="report-problem"
      width={{ base: "100%", md: "auto" }}
      dir={dir}
      border="1px solid"
      borderColor="border"
      justifyContent="center"
      alignItems="center"
      py={{ base: 4, md: 6 }}
      boxShadow={{ base: "md", md: "xl" }}
      rounded="md"
    >
      <Image src={ProblemImage} maxWidth="150px" aspectRatio="1" />
      <VStack gap="1rem">
        <Text color="text.bold" textAlign="center" dir={dir}>
          {t("shipment.report_problem_header")}
        </Text>
        <Button
          bg="brand"
          color="white"
          _hover={{
            bg: "brandDark",
            color: "white",
          }}
          dir={dir}
          size={{ base: "md", "2xl": "lg" }}
        >
          {t("shipment.report_problem_btn")}
        </Button>
      </VStack>
    </Box>
  );
};

export default ReportProblemCard;
