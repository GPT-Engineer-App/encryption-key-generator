import React, { useState } from "react";
import { Container, VStack, Input, Button, Text, Heading } from "@chakra-ui/react";

const Index = () => {
  const [number, setNumber] = useState("");
  const [encryptionKey, setEncryptionKey] = useState(null);

  const isPrime = (digit) => {
    if (digit < 2) return false;
    for (let i = 2; i <= Math.sqrt(digit); i++) {
      if (digit % i === 0) return false;
    }
    return true;
  };

  const calculateEncryptionKey = (num) => {
    const digits = num.split("").map(Number);
    const nonPrimeSum = digits.reduce((sum, digit) => {
      return !isPrime(digit) ? sum + digit : sum;
    }, 0);
    return nonPrimeSum;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const key = calculateEncryptionKey(number);
    setEncryptionKey(key);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} as="form" onSubmit={handleSubmit}>
        <Heading as="h1" size="xl">Encryption Key Calculator</Heading>
        <Input
          placeholder="Enter a number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          type="text"
          maxW="300px"
        />
        <Button type="submit" colorScheme="teal">Calculate</Button>
        {encryptionKey !== null && (
          <Text fontSize="2xl">Encryption Key: {encryptionKey}</Text>
        )}
      </VStack>
    </Container>
  );
};

export default Index;