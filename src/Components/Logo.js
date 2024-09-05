import React from "react"
import { Box, Text } from "@chakra-ui/react"

export default function Logo(props) {
  return (
    <Box {...props}>
      <Text fontSize="lg" fontWeight="bold" color="#0EBE6F">
        E-Commerce
      </Text>
    </Box>
  )
}