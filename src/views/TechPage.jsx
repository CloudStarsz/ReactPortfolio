import { Box, Text, Flex, Icon, VStack } from "@chakra-ui/react"
import { FaHtml5, FaCss3Alt, FaReact, FaJava, FaPython, FaDocker, FaRust, FaGitAlt } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io5"
import { SiDotnet, SiDart, SiTypescript } from "react-icons/si"
import { DiMsqlServer } from "react-icons/di"
import { useTranslation } from "react-i18next"

const TechCard = ({ icon, name, color, favorite }) => {
    return (
        <Box position="relative">
            {/* Glow de fundo */}
            <Box
                position="absolute"
                top="-2px" left="-2px" right="-2px" bottom="-2px"
                bg={favorite ? "linear-gradient(to right, #ecb144, #e3c178)" : "linear-gradient(to right, #5a03fc, #8247e6)"}
                borderRadius="2xl"
                filter={{ base: "blur(10px)", md: "blur(15px)" }}
                opacity={{ base: favorite ? 0.3 : 0.1, md: favorite ? 0.4 : 0.05 }}
                transition="opacity 0.3s"
                _groupHover={{ opacity: 0.5 }}
                zIndex={0}
            />

            {/* Card Principal de Vidro */}
            <Flex
                position="relative"
                zIndex={1}
                direction="column"
                w={{ base: "100px", sm: "120px", md: "150px", lg: "160px" }}
                h={{ base: "100px", sm: "120px", md: "150px", lg: "160px" }}
                bg="rgba(255, 255, 255, 0.03)"
                backdropFilter="blur(10px)"
                borderRadius="2xl"
                border="1px solid"
                borderColor={favorite ? "rgba(236, 177, 68, 0.6)" : "rgba(255, 255, 255, 0.05)"}
                boxShadow="0 8px 32px rgba(0, 0, 0, 0.1)"
                alignItems="center"
                justifyContent="center"
                transition="all 0.3s"
                cursor="pointer"
                role="group"
                _hover={{
                    transform: "translateY(-5px)",
                    bg: "rgba(255, 255, 255, 0.06)",
                    borderColor: favorite ? "rgba(236, 177, 68, 1)" : "rgba(255, 255, 255, 0.2)",
                    boxShadow: favorite ? "0 10px 40px rgba(236, 177, 68, 0.3)" : "0 10px 40px rgba(90, 3, 252, 0.2)",
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
                        color="#e1d8ed"
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
        <Box w="100%">
            <h1 style={{ textAlign: 'center', marginBottom: "30px", fontWeight: '100', fontStyle: 'italic', fontSize: 'clamp(2.5rem, 6vw, 72px)' }}>
                {t('tech.title')}
            </h1>
            <Flex
                wrap="wrap"
                justify="center"
                gap={{ base: "15px", md: "40px" }}
                maxW={{ base: "95vw", md: "80vw" }}
                mx="auto"
                py={10}
            >
                {techs.map((tech) => (
                    <TechCard key={tech.name} {...tech} />
                ))}
            </Flex>
        </Box>
    )
}