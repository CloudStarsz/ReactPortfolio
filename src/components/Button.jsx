import { Button as ChakraButton } from "@chakra-ui/react";

function Button({texto , id, onClick, leftIcon}) {

  return (
    <ChakraButton 
        id={id} 
        className="primary-button"
        type="button"
        onClick={onClick}
        size={{ base: "md", md: "lg" }}
        color="white"
        variant="solid" 
        bg="linear-gradient(to right, #5a03fc, #3f03ad)" 
        _hover={{ bg: "linear-gradient(to right, #6a1dfa, #4e11bd)", transform: "translateY(-2px)" }}
        transition="all 0.3s"
        rounded="full"
        px={{ base: 6, md: 8 }}
        py={{ base: 5, md: 6 }}
        fontSize={{ base: "sm", md: "md" }}
        fontWeight="bold"
        border="1px solid rgba(255, 255, 255, 0.1)"
        boxShadow="0 10px 28px rgba(90, 3, 252, 0.28)"
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
