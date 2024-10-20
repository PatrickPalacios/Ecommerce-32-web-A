import Head from "next/head";
import {
  Box,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue, //Permite cambiar el color del texto dependiendo del color del fondo
} from "@chakra-ui/react";

const Layout = () => {
  return (
    <div>
      <Head>
        <title>E-commerce App</title>
      </Head>
      
      <Box> {/* Box es como un div pero con estilos de Chakra UI */}
        <Flex
        bg={useColorModeValue('white', 'gray.600')} //Cambia el color del fondo dependiendo del modo de color
        minH={'60PX'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderTop={1}
        borderBottom={1}
        borderStartStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
        >
          <Flex
          flex={{ base: 1 }}
          justify={{ base: 'center', md: 'start' }}          
          >
            <Text
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}
            >Logo</Text></Flex>
          <Stack
          flex={{ base: 1 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
          >
            <Button
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'#'}
            >Sign in
            </Button>
            <Button
            fontSize={'md'}
            fontWeight={600}
            color={'black'}
            variant={'link'}
            href={'#'}
            bg={'blue.400'}
            _hover={{bg:'ping.300'}}
            >Sign up
            </Button>
          </Stack>
        </Flex>
      </Box>
    </div>
  );
};
export default Layout;
