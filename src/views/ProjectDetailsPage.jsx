import { Box, Heading, Text, VStack, Badge, Flex, Image, SimpleGrid } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from '../components/Button.jsx';
import { FaArrowLeft } from 'react-icons/fa';

const localImages = import.meta.glob('../images/*.{png,jpg,jpeg,svg}', { eager: true, import: 'default' });

export default function ProjectDetailsPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const header = document.querySelector('.site-header');
        if (header) {
            if (selectedImage) {
                header.classList.add('header-hidden');
            } else {
                header.classList.remove('header-hidden');
            }
        }

        // Cleanup ao desmontar a página
        return () => {
            if (header) header.classList.remove('header-hidden');
        };
    }, [selectedImage]);

    const projectsList = t('projects.list', { returnObjects: true }) || [];
    const project = projectsList.find(p => p.id === id);

    if (!project) {
        return (
            <Box h="100%" display="flex" alignItems="center" justifyContent="center">
                <Text>Projeto não encontrado.</Text>
            </Box>
        );
    }

    return (
        <Box w="100%" h="100%" overflowY="auto" className="project-details-scroll">
            <Box px={4} py={8} maxW="1200px" mx="auto" color="white">
                <Box mb={8} display="inline-block">
                <Button 
                    texto={i18n.language === 'pt' ? "Voltar" : "Back"} 
                    leftIcon={<FaArrowLeft />} 
                    onClick={() => navigate('/')} 
                />
            </Box>
            
            <VStack align="start" spacing={6}>
                <Heading as="h1" fontSize={["3xl", "5xl"]} fontWeight="800" fontStyle="italic">
                    {project.name}
                </Heading>
                
                <Text fontSize={["lg", "xl"]} color="#b9aecf">
                    {project.description}
                </Text>
                
                <Box>
                    <Heading as="h3" size="md" mb={3} color="#e1d8ed">
                        {i18n.language === 'pt' ? "Tecnologias Usadas:" : "Technologies Used:"}
                    </Heading>
                    <Flex wrap="wrap" gap={2}>
                        {project.technologies.map((tech, index) => (
                            <Badge key={index} colorScheme="purple" px={3} py={1} borderRadius="md" fontSize="sm">
                                {tech}
                            </Badge>
                        ))}
                    </Flex>
                </Box>
                
                <Box w="100%" pt={8}>
                    <Heading as="h3" size="lg" mb={6} color="#e1d8ed">
                        {i18n.language === 'pt' ? "Galeria" : "Gallery"}
                    </Heading>
                    {project.gallery && project.gallery.length > 0 ? (
                        <SimpleGrid columns={[1, 1, 2]} spacing={8}>
                            {project.gallery.map((imgName, index) => {
                                const path = `../images/${imgName}`;
                                const src = localImages[path] || `https://placehold.co/1120x630/230f40/e1d8ed?text=${encodeURIComponent(imgName)}`;
                                return (
                                    <Box 
                                        key={index} 
                                        borderRadius="xl" 
                                        overflow="hidden" 
                                        boxShadow="0 10px 30px rgba(0,0,0,0.5)"
                                        cursor="zoom-in"
                                        onClick={() => setSelectedImage(src)}
                                        transition="transform 0.2s"
                                        _hover={{ transform: "scale(1.02)" }}
                                    >
                                        <Image 
                                            src={src} 
                                            alt={`${project.name} screenshot ${index + 1}`} 
                                            w="100%" 
                                            h="auto" 
                                            objectFit="cover"
                                            fallbackSrc={`https://placehold.co/1120x630/230f40/e1d8ed?text=${project.name}`}
                                        />
                                    </Box>
                                );
                            })}
                        </SimpleGrid>
                    ) : (
                        <Text color="#b9aecf">
                            {i18n.language === 'pt' ? "Sem imagens registradas." : "No images recorded."}
                        </Text>
                    )}
                </Box>
                <Box h="40px" w="100%"></Box>
            </VStack>

            {selectedImage && (
                <Box 
                    position="fixed" 
                    top={0} 
                    left={0} 
                    w="100vw" 
                    h="100vh" 
                    bg="rgba(0, 0, 0, 0.8)" 
                    zIndex={9999} 
                    display="flex" 
                    alignItems="center" 
                    justifyContent="center"
                    backdropFilter="blur(10px)"
                    onClick={() => setSelectedImage(null)}
                >
                    <Box position="relative" maxW="95vw" maxH="95vh" onClick={(e) => e.stopPropagation()}>
                        <Box 
                            position="absolute" 
                            top="-15px" 
                            right="-15px" 
                            w="40px" 
                            h="40px" 
                            borderRadius="full" 
                            bg="rgba(0,0,0,0.6)" 
                            display="flex" 
                            alignItems="center" 
                            justifyContent="center" 
                            cursor="pointer"
                            onClick={() => setSelectedImage(null)}
                            _hover={{ bg: "rgba(0,0,0,0.8)" }}
                            zIndex={10000}
                        >
                            X
                        </Box>
                        <Image 
                            src={selectedImage} 
                            alt="Full screen view" 
                            maxH="85vh" 
                            w="auto"
                            objectFit="contain" 
                            borderRadius="lg" 
                            boxShadow="0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                            mx="auto"
                        />
                    </Box>
                </Box>
            )}
            </Box>
        </Box>
    );
}
