import {
    Flex, Box, FormControl, FormLabel, Input,
    Checkbox, Stack, Link, Button, useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function SignInBody() {
    return (
      <Flex
        align={'center'}
        justify={'center'}>
        <Stack spacing={8}>
          <Box
            bg={useColorModeValue('white', 'gray.700')}
            py={8}>
            <Stack spacing={4}>
              <FormControl id="username">
                <FormLabel>Username</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }