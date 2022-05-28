/** @format */

import { Box, Flex } from '@chakra-ui/layout';
import { Button, Input } from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { useSWRConfig } from 'swr';
import { auth } from '../lib/mutations';

const AuthForm: FC<{ mode: 'signin' | 'signup' }> = ({ mode }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const { body } = await auth(mode, { email, password });
    console.log(body);

    setIsLoading(false);
    // router.push('/');
  };

  return (
    <Box height="100vh" width="100vw" bg="black" color="white">
      <Flex
        justify="center"
        align="center"
        height="100px"
        borderBottom="white 1px solid"
      >
        <Image src="/logo.svg" height={60} width={120} />
      </Flex>
      <Flex
        justifyContent="center"
        alignItems="center"
        height="calc(100vh - 100px)"
      >
        <Box padding="50px" bg="gray.900" borderRadius="6px">
          <form onSubmit={handleSubmit}>
            <Input
              placeholder="Email"
              type="email"
              autoComplete="false"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="Password"
              type="password"
              autoComplete="false"
              onChange={(e) => setPassword(e.target.value)}
              mt="3"
            />
            <Button
              color="green.400"
              type="submit"
              variant="outline"
              isLoading={isLoading}
              mt="3"
            >
              {mode === 'signin' ? 'Sign In' : 'Sign Up'}
            </Button>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};

export default AuthForm;
