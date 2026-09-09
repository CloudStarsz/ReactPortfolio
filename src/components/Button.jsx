import { Button as ChakraButton } from "@chakra-ui/react";

function Button({texto , id, onClick, leftIcon}) {

  return (
    <ChakraButton 
        id={id} 
        className="primary-button"
        type="button"
        onClick={onClick}
        size={{ base: "md", md: "lg" }}
        color="#031115"
        variant="solid" 
        bg="#4de4ff"
        _hover={{ bg: "#8ceeff", transform: "translateY(-2px)" }}
        transition="background-color 0.2s ease, transform 0.2s ease"
        rounded="sm"
        px={{ base: 6, md: 8 }}
        py={{ base: 5, md: 6 }}
        fontSize={{ base: "sm", md: "md" }}
        fontWeight="bold"
        border="1px solid #4de4ff"
        boxShadow="none"
        display="flex"
        alignItems="center"
        gap={2}
    >
        {leftIcon}
        {texto}
    </ChakraButton>
  );
}

export default Button;
