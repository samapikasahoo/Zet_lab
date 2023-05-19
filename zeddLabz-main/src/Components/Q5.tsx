import React from 'react'
import { Flex } from '@chakra-ui/react';
import '../index.css'
import {useRef} from 'react'
   
interface Props {
    value: boolean;
  }
   

const Q5:React.FC<Props> = ({ value }) => {

    const divRef = useRef<HTMLDivElement | null>(null);

    const scrollToDiv = () => {
        divRef.current?.scrollIntoView({ behavior: 'smooth' });
      };

    return(
        <>
        <Flex height={'100vh'}  flexDir={'column'} position='relative' color={'white'} backgroundColor={'#2C5448'}   fontWeight={'700'} fontSize={value?'1rem':'2rem'} justifyContent={'center'} textAlign={'center'} alignItems={'center'} >
            <Flex className='heading'>Question 5</Flex>
            <Flex>In this task I have used useRef hook to scroll to another div</Flex>
            <Flex style={{marginBottom:'50px'}}>This is the Primary div which has button which onclick slides to another div</Flex>
            <button onClick={scrollToDiv}>Scroll to Div</button>
            
        </Flex>
        <Flex ref={divRef} height={'100vh'}  flexDir={'column'} color={'white'} backgroundColor={'#C48C5C'}  fontWeight={'700'} fontSize={'2rem'} justifyContent={'center'} textAlign={'center'} alignItems={'center'} ><div >Screen is scrolled to this component.</div></Flex>
        </>
    )
}

export default Q5