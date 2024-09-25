import { Box, Flex, Img, Text } from "@chakra-ui/react";
import { FC } from "react";


const TokenEx : FC = () => {
    return (
        <Flex w="full" h="960px" justifyContent="center">
            <Flex>
                <Img mt={40} h="600px" src="/images/sec01.png"/>
                <Flex flexDir="column" alignItems="center" ml={20}>
                    <Flex mt={48} justifyContent="center" h="14vh" alignItems="center" position="relative">
                        <Text w="450px" fontSize="40px" fontWeight="bold">
                            What is Lightning wolf chain?
                        </Text>
                        <Box
                            w="8%"
                            h="2px" 
                            bg="yellow.500"
                            position="absolute"
                            bottom={2}
                            left={1}
                        />
                    </Flex>
                    <Flex justifyContent="center" h="40vh" w="100%" mt={8}>
                        <Text w="450px" fontSize="20px">
                        LightningWolf (LNWF) is an innovative meme coin built on
                        speed and a strong community spirit.
                        Based on the Binance Smart Chain (BSC), it offers fast and
                        low-cost transactions while creating practical use cases beyond
                        just being a meme.<br/>
                        LNWF aims for transparent and democratic operations through
                        community-driven governance. Users can collect unique NFTs,
                        engage in various activities within the metaverse, and directly
                        participate in key project decisions through LNWF.
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex> 
    )
}

export default TokenEx;