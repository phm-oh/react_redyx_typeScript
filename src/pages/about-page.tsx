import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux-toolkit/hooks';
import { selectAuthSate, updateProfileAcion } from '../redux-toolkit/auth/auth-slice';

export default function About() {
  const {profile , email} = useAppSelector(selectAuthSate);
  

  const navigate = useNavigate();
  const dispath = useAppDispatch();

   const updateProfile = () => {
         dispath(updateProfileAcion())
   }


  return (
    <Box textAlign="center" py={10} px={6}>
      <CheckCircleIcon boxSize={'50px'} color={'green.500'} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        เกี่ยวกับเรา {profile}  {email}
      </Heading>
      <Text color={'gray.500'}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua.
      </Text>
      
            <Button
              rounded={"full"}
              px={6}
              colorScheme={"orange"}
              bg={"orange.400"}
              _hover={{ bg: "orange.500" }}
              mt={10}
              onClick={()=>{ navigate('/')}}
            >
              กลับหน้าหลัก
            </Button>

            <Button
              rounded={"full"}
              px={6}
              colorScheme={"orange"}
              bg={"green.400"}
              _hover={{ bg: "green.500" }}
              mt={10}
              ml={10}
              onClick={ updateProfile }
            >
              อัพเดตโปรไฟล์
            </Button>
         
    </Box>
  );
}