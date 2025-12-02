import { Box, Text, Flex, Icon, VStack } from "@chakra-ui/react"
import { FaHtml5, FaCss3Alt, FaReact, FaJava, FaPython, FaDocker, FaRust, FaGitAlt } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io5"
import { SiDotnet, SiDart, SiTypescript } from "react-icons/si"
import { DiMsqlServer } from "react-icons/di"

const TechCard = ({ icon, name, color, favorite }) => {
    return (
        <Box
            w={["130px", "150px", "10em"]}
            h={["130px", "150px", "10em"]}
            bg="gray.100"
            _dark={{ bg: "gray.700" }}
            borderRadius="2xl"

            borderWidth={favorite ? "2px" : "0px"}
            borderColor="yellow.400"
            borderStyle="solid"

            boxShadow={favorite ? "0 0 10px rgba(236, 201, 75, 0.4)" : "none"}

            display="flex"
            alignItems="center"
            justifyContent="center"
            transition="all 0.3s"
            cursor="pointer"
            _hover={{
                transform: "translateY(-5px)",
                // Mantém o shadow dourado no hover se for favorito, ou usa o padrão
                boxShadow: favorite ? "0 0 15px rgba(236, 201, 75, 0.6)" : "lg",
                bg: "gray.200",
                _dark: { bg: "gray.600" },
            }}
        >
            <VStack spacing={[2, 3]}>
                <Icon
                    as={icon}
                    boxSize={[10, 12, 14]}
                    color={color || "gray.500"}
                />
                <Text
                    fontWeight="bold"
                    fontSize={["sm", "md", "md"]}
                    color="gray.600"
                    _dark={{ color: "gray.200" }}
                >
                    {name}
                </Text>
            </VStack>
        </Box>
    )
}

export default function TechPage() {
    const techs = [
        // Front
        { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
        { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
        { name: "JavaScript", icon: IoLogoJavascript, color: "#F7DF1E" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "React", icon: FaReact, color: "#61DAFB", favorite: true },

        // Back
        { name: ".NET", icon: SiDotnet, color: "#937aecff", favorite: true },
        { name: "SQL", icon: DiMsqlServer, color: "#CC2927", favorite: true },
        { name: "Java", icon: FaJava, color: "#007396" },
        { name: "Python", icon: FaPython, color: "#3776AB" },
        { name: "Dart", icon: SiDart, color: "#0175C2" },
        { name: "Rust", icon: FaRust, color: "#d4482fff" },

        // DevOps / Tools
        { name: "Docker", icon: FaDocker, color: "#2496ED" },
        { name: "Git", icon: FaGitAlt, color: "#F05032" },
    ]

    return (
        <Flex
            wrap="wrap"
            justify="center"
            gap={["20px", "40px"]}
            maxW="80vw"
            mx="auto"
            py={10}
        >
            {techs.map((tech) => (
                <TechCard key={tech.name} {...tech} />
            ))}
        </Flex>
    )
}