"use client";
import {
  Container,
  Flex,
  HStack,
  Text,
  VStack,
  Box,
  Image,
} from "@chakra-ui/react";
import Link from "next/link";

export default function Footer() {
  return (
    <Container
      color="white"
      bgColor="#BEBEBE"
      fontWeight={500}
      maxW="100%"
      minH={{ base: "auto", md: "30vh" }}
      backgroundColor="footerBackground"
      py={{ base: 6, sm: 8, md: 12 }}
      px={{ base: 4, sm: 6, md: 8 }}
    >
      <VStack spacing={{ base: 6, md: 8 }}>
        <Flex
          borderBottom="2px solid"
          borderColor="gray.600"
          pb={{ base: 8, md: 10, lg: 12 }}
          mb={{ base: 4, md: 6 }}
          w={{ base: "100%", md: "95%", lg: "85%" }}
          justifyContent={{ base: "center", lg: "space-between" }}
          alignItems={{ base: "center", lg: "flex-start" }}
          flexDirection={{ base: "column", lg: "row" }}
          gap={{ base: 8, md: 10, lg: 16 }}>
          
          <Box 
            order={{ base: 1, lg: 1 }}
            alignSelf={{ base: "center", lg: "flex-start" }}
            position="relative"
            mb={{ base: 2, lg: 0 }}>
            <Link href="/">
              <Box
                position="relative"
                display="inline-block"
                _hover={{
                  transform: "scale(1.05)",
                  filter: "brightness(1.2)"
                }}
                transition="all 0.3s ease"
                _before={{
                  content: '""',
                  position: "absolute",
                  top: "-5px",
                  left: "-5px",
                  right: "-5px",
                  bottom: "-5px",
                  background: "linear-gradient(45deg, #ff006e, #8338ec, #3a86ff, #06ffa5, #ffbe0b, #ff006e)",
                  backgroundSize: "400% 400%",
                  borderRadius: "15px",
                  opacity: 0,
                  animation: "gradientShift 3s ease infinite",
                  zIndex: -1,
                  filter: "blur(10px)"
                }}
                _hover_before={{
                  opacity: 0.7
                }}
                _after={{
                  content: '""',
                  position: "absolute",
                  top: "-2px",
                  left: "-2px",
                  right: "-2px", 
                  bottom: "-2px",
                  background: "linear-gradient(45deg, #ffffff, #f0f0f0, #ffffff)",
                  backgroundSize: "200% 200%",
                  borderRadius: "12px",
                  opacity: 0,
                  animation: "shimmer 2s ease infinite",
                  zIndex: -1
                }}
                _hover_after={{
                  opacity: 0.3
                }}
                sx={{
                  "@keyframes gradientShift": {
                    "0%, 100%": {
                      backgroundPosition: "0% 50%"
                    },
                    "50%": {
                      backgroundPosition: "100% 50%"
                    }
                  },
                  "@keyframes shimmer": {
                    "0%, 100%": {
                      backgroundPosition: "0% 0%"
                    },
                    "50%": {
                      backgroundPosition: "100% 100%"
                    }
                  }
                }}>
                <Image
                  src="/logo/logo.png"
                  alt="Kpop Road Logo"
                  height={{ base: "40px", sm: "45px", md: "55px", lg: "60px" }}
                  width="auto"
                  cursor="pointer"
                  loading="lazy"
                  position="relative"
                  zIndex={1}
                  borderRadius="8px"
                  filter="drop-shadow(0 0 10px rgba(255, 255, 255, 0.3))"
                  _hover={{
                    filter: "drop-shadow(0 0 20px rgba(255, 255, 255, 0.6))"
                  }}
                  transition="filter 0.3s ease"
                />
              </Box>
            </Link>
          </Box>

          <HStack
            order={{ base: 2, lg: 2 }}
            spacing={{ base: 8, sm: 10, md: 14, lg: 20 }}
            alignItems="flex-start"
            justifyContent={{ base: "center", lg: "flex-end" }}
            flexDirection={{ base: "column", sm: "row" }}
            w={{ base: "100%", sm: "auto" }}
          >
            <VStack 
              spacing={{ base: 3, md: 4 }} 
              alignItems={{ base: "center", sm: "flex-start" }}
              w={{ base: "100%", sm: "auto" }}>
              <Link
                href="https://medium.com/@kpoproad9"
                passHref
                target="_blank"
                rel="noopener noreferrer"
              >
                Medium
              </Link>

              <Link
                href="https://x.com/kpop_road"
                passHref
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter / X
              </Link>

              <Link
                href="https://t.me/kpoproad"
                passHref
                target="_blank"
                rel="noopener noreferrer"
              >
                Telegram Group
              </Link>
            </VStack>

            <VStack 
              spacing={{ base: 3, md: 4 }} 
              alignItems={{ base: "center", sm: "flex-start" }}
              w={{ base: "100%", sm: "auto" }}
              pt={{ base: 2, sm: 0 }}>
              <Link
                href="https://docs.kpoproad.com"
                passHref
                target="_blank"
                rel="noopener noreferrer">
                <Text 
                  _hover={{ color: "gray.600", textDecoration: "underline" }}
                  transition="all 0.2s ease"
                  cursor="pointer"
                  fontSize={{ base: "md", md: "md", lg: "lg" }}
                  fontWeight="bold">
                  Whitepaper
                </Text>
              </Link>

              {/* <Text 
                _hover={{ color: "gray.600", textDecoration: "underline" }}
                transition="all 0.2s ease"
                cursor="pointer"
                fontSize={{ base: "md", md: "md", lg: "lg" }}
                fontWeight="bold">
                Privacy Policy
              </Text> */}
            </VStack>
          </HStack>
        </Flex>

        <Text
          px={{ base: 4, md: 8 }}
          fontSize={{ base: "xs", sm: "sm", md: "md" }}
          color="gray.300"
          textAlign="center"
          maxW="100%"
        >
          Copyright © Kpop Road. All rights reserved.
        </Text>
        
      </VStack>
    </Container>
  );
}