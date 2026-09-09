import { Box, Text, Flex, Icon, VStack } from "@chakra-ui/react"
import { FaHtml5, FaCss3Alt, FaReact, FaJava, FaPython, FaDocker, FaRust, FaGitAlt } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io5"
import { SiDotnet, SiDart, SiTypescript } from "react-icons/si"
import { DiMsqlServer } from "react-icons/di"
import { useTranslation } from "react-i18next"

const TechCard = ({ icon, name, color, favorite }) => {
    return (
        <Box position="relative" className={`tech-card-wrap${favorite ? ' is-favorite' : ''}`}>
            <Flex
                className="tech-card"
                direction="column"
                w="100%"
                h="100%"
                aspectRatio="1"
                bg="#0b1115"
                borderRadius="0"
                border="1px solid"
                borderColor={favorite ? "rgba(77, 228, 255, 0.48)" : "rgba(187, 223, 230, 0.12)"}
                boxShadow="none"
                alignItems="center"
                justifyContent="center"
                transition="border-color 0.2s ease, background-color 0.2s ease, transform 0.2s ease"
                cursor="default"
                role="group"
                _hover={{
                    transform: "translateY(-3px)",
                    bg: "#0f181d",
                    borderColor: "rgba(77, 228, 255, 0.7)",
                    boxShadow: "none",
                }}
            >
                <VStack spacing={{ base: 2, md: 3 }}>
                    <Icon
                        as={icon}
                        boxSize={{ base: 8, sm: 10, md: 14 }}
                        color={color || "gray.400"}
                    />
                    <Text
                        fontWeight="bold"
                        fontSize={{ base: "xs", sm: "sm", md: "md" }}
                        color="#dce8eb"
                    >
                        {name}
                    </Text>
                </VStack>
            </Flex>
        </Box>
    )
}

export default function TechPage() {
    const { t } = useTranslation();
    const techs = [
        { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
        { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
        { name: "React", icon: FaReact, color: "#61DAFB", favorite: true },
        { name: ".NET", icon: SiDotnet, color: "#937aecff", favorite: true },
        { name: "SQL", icon: DiMsqlServer, color: "#CC2927", favorite: true },
        { name: "JavaScript", icon: IoLogoJavascript, color: "#F7DF1E" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "Java", icon: FaJava, color: "#007396" },
        { name: "Python", icon: FaPython, color: "#3776AB" },
        { name: "Dart", icon: SiDart, color: "#0175C2" },
        { name: "Rust", icon: FaRust, color: "#d4482fff" },
        { name: "Docker", icon: FaDocker, color: "#2496ED" },
        { name: "Git", icon: FaGitAlt, color: "#F05032" },
    ]

    return (
        <Box w="100%" className="tech-page">
            <h1 className="section-title">
                {t('tech.title')}
            </h1>
            <Flex
                wrap="wrap"
                justify="center"
                className="tech-grid"
                gap={{ base: "10px", md: "16px" }}
                maxW="1120px"
                mx="auto"
                py={{ base: 5, md: 8 }}
            >
                {techs.map((tech, index) => (
                    <Box key={tech.name} className="tech-card-slot" data-index={String(index + 1).padStart(2, '0')}>
                        <TechCard {...tech} />
                    </Box>
                ))}
            </Flex>
        </Box>
    )
}
