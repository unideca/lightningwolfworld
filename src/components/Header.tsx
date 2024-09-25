import { Button, Flex, Img, Text } from "@chakra-ui/react";
import { FC } from "react";
import StyledButton from "./StyledButton";

interface HeaderProps {
    tokenExRef : React.RefObject<HTMLDivElement>;
    tokenUtilRef : React.RefObject<HTMLDivElement>;
    tokenRoadmapRef : React.RefObject<HTMLDivElement>;
    tokenAdRef : React.RefObject<HTMLDivElement>;
}

const Header : FC<HeaderProps> = ({tokenExRef, tokenUtilRef, tokenRoadmapRef, tokenAdRef}) => {
    
    const scrollToComponent = (ref: React.RefObject<HTMLDivElement>) => {
        ref.current?.scrollIntoView({ behavior: 'smooth'});
    }

    const scrollHandler = (event : React.MouseEvent<HTMLButtonElement>) => {
        let buttonText = event.currentTarget.innerText;
        console.log(buttonText)
        if (buttonText === "INTRODUCTION") {
            scrollToComponent(tokenExRef);
        } else if (buttonText === "TOKENUTILITY") {
            scrollToComponent(tokenUtilRef);
        } else if (buttonText === "ROADMAP") {
            scrollToComponent(tokenRoadmapRef);
        } else {
            scrollToComponent(tokenAdRef);
        }
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
                <StyledButton onClick={scrollHandler}>INTRODUCTION</StyledButton>
                <StyledButton onClick={scrollHandler}>ADVERTISING</StyledButton>
                <StyledButton onClick={scrollHandler}>TOKENUTILITY</StyledButton>
                <StyledButton onClick={scrollHandler}>ROADMAP</StyledButton>
            </Flex>
            <Flex w="100%" h="20vh" color="white" mt={20} justifyContent="center">
                <Text fontSize="120px" fontWeight="bold">
                    Lightning Wolf
                </Text>
            </Flex>
            <Flex w="90%" h="20vh" color="white" mt={10}>
                <Text w="100%" textAlign="center" fontSize="30px" fontWeight="bold">
                    LightningWolf (LNWF) is a meme coin that symbolizes speed and a strong sense of community,<br/>
                    combining blockchain technology and creativity to unlock new possibilities in digital assets
                </Text>
            </Flex>
            <Button w="60" variant="unstyled" border="2px solid white" borderRadius={0} color="white" p={4} alignItems="center" justifyContent="center" h="auto">WhitePaper(EN)</Button>
        </Flex>
    )
}

export default Header;