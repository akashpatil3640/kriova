import React from 'react'
import {Input,Button,InputGroup,InputRightElement, Flex, Box, Heading,FormControl,CircularProgress} from '@chakra-ui/react'

import { useState } from 'react';

const initialValues={
    Email:"",
    Password:"",
    
};
function Signup()
{


    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    const [user , setUser]=useState(initialValues);
    const {Password,ConfirmPassword}=user;

    const onValueChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
        console.log(e.target.value)
       
    }
    const handleSubmit =(e)=>{

        



    }
    const isLoading=0

    return(
        <>
            <Box
                display='flex'
                alignItems='center'
                justifyContent='center'
                width='100%'
                py={12}
                // bgImage="url('/src/background/1.jpg')"
                //bgImage={brgImage}
                bgPosition='center'
                bgRepeat='no-repeat'
                mb={2}
            >
    
  
            <Flex width="Full" align="center" justifyContent="center" my="130px" >
                <Box p={8} maxWidth="500px" borderWidth={4} borderRadius={8} boxShadow="lg"  >
                    <Box textAlign="center">
                        <Heading> Signup </Heading>
                    </Box>

                    <Box my={4} textAlign="left">
                        <form onSubmit={handleSubmit}>

                        <FormControl isRequired>
                                <Input type="name" 
                                    placeholder="Enter Name"
                                    onChange={(e)=>onValueChange(e)}
                                    name='name'
                                        my={4}
                                />
                            </FormControl>
                            
                            <FormControl isRequired>
                                <Input type="email" 
                                    placeholder="Enter Email / Phone"
                                    onChange={(e)=>onValueChange(e)}
                                    name='Email'
                                        
                                />
                            </FormControl>

                            <FormControl isRequired mt={6}>
                                <InputGroup size='md'>
                                    <Input
                                        pr='4.5rem'
                                        type={show ? 'text' : 'password'}
                                        placeholder='Enter Password'
                                        name='Password'
                                        onChange={(e)=>onValueChange(e)}
                                    />
                                    <InputRightElement width='4.5rem'>

                                        <Button h='1.75rem' size='sm' onClick={handleClick} >
                                            {show ? 'Hide' : 'Show'}
                                        </Button>
                                    </InputRightElement>
                                    
                                </InputGroup>
                                <InputGroup>
                                <Input
                                        pr='4.5rem'
                                         type={show ? 'text' : 'password'}
                                        placeholder='Confirm Password'
                                        name="ConfirmPassword"
                                        onChange={(e)=>onValueChange(e)}
                                        my='21px'
                                    />
                                </InputGroup>
                                
                            </FormControl>
                            <Button variantColor="teal" variant="outline" width="full" mt={4} type="submit" borderColor='red.700' border='2px' onClick={(e)=>handleSubmit(e)}>
                            {isLoading ? (
                                <CircularProgress isIndeterminate size="24px" color="teal" />
                            ): (
                                'Sign Up'
                            )}
                           
                        </Button>
                        </form>
                    </Box>
                </Box>
            </Flex>
            </Box>
            

            
        
        
        
        </>
       
    )
}
export default Signup;