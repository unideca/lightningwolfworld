import { Button, Flex, Img, Text } from "@chakra-ui/react";
import { FC } from "react";
import StyledButton from "./StyledButton";

interface HeaderProps {
    tokenExRef : React.RefObject<HTMLDivElement>;
}

const Header : FC<HeaderProps> = ({tokenExRef}) => {
    
    const scrollToTokenEx = () => {
        tokenExRef.current?.scrollIntoView({ behavior: 'smooth'});
    }

    return (
        <Flex
            w="full"
            minH="100vh"
            backgroundImage="/images/main_visual.png"
            backgroundSize="cover" // 이미지 크기를 Flex 영역에 맞춤
            backgroundPosition="center" // 이미지 위치를 가운데로
            backgroundRepeat="no-repeat" // 이미지 반복을 하지 않음
            flexDir="column"
            alignItems="center"
            position="relative"
        >
            <Img src="images/logo.png" left={32} top={10} position="absolute"/>
            <Flex w="94%" h="6vh" justifyContent="flex-end" alignItems="center" gap={20} mt={10}>
                <StyledButton>HOME</StyledButton>
                <StyledButton onClick={scrollToTokenEx}>INTRODUCTION</StyledButton>
                <StyledButton>TOKENUTILITY</StyledButton>
                <StyledButton>ROADMAP</StyledButton>
            </Flex>
            <Flex w="100%" h="20vh" color="white" mt={20} justifyContent="center">
                <Text fontSize="120px" fontWeight="bold">
                    Lightning Wolf
                </Text>
            </Flex>
            <Flex w="80%" h="20vh" color="white" mt={10}>
                <Text fontSize="30px">
                    LightningWolf (LNWF) is a meme coin that symbolizes speed and a strong sense of community,
                    combining blockchain technology and creativity to unlock new possibilities in digital assets
                </Text>
            </Flex>
            <Button variant="unstyled" border="1px solid gray" color="white" p={4} alignItems="center" justifyContent="center" h="auto">WhitePaper</Button>
        </Flex>
    )
}

export default Header;