import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";

const ErrorMessage = () => {
  return (
    <Alert
      status="error"
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      margin="auto"
      width={{ base: "75%", md: "50%" }}
      height="50%"
    >
      <AlertIcon boxSize="40px" mr={0} />
      <AlertTitle mt={4} mb={1} fontSize="lg">
        Invalid tracking number
      </AlertTitle>
      <AlertDescription maxWidth="sm">
        Please enter a valid tracking number and try again.
      </AlertDescription>
    </Alert>
  );
};

export default ErrorMessage;
