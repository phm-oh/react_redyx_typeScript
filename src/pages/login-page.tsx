import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { LoginFormInput } from '../app-types/login-form-input.type';
import { SubmitHandler, useForm } from 'react-hook-form';
  
  export default function login() {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInput>();
    const onSubmit: SubmitHandler<LoginFormInput> = (data) => {
      console.log(data);
    }
    // const navigate = useNavigate();


    return (
       <form onSubmit={handleSubmit(onSubmit)}  noValidate>
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Login in </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" {...register("email")}/>  { /*เป็นการลงทะเบียนตั้งชื่อว่า email เพิ้อเอาไว้ดึงค่าที่กรอก*/}
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" {...register("password")}/> {/*เป็นการลงทะเบียนตั้งชื่อว่า password เพิ้อเอาไว้ดึงค่าที่กรอก*/}
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
                  type='submit'
                  onClick={()=>{
                    // navigate('/dashboard')
                  }}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Log in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      </form>
    );
  }