import React from 'react'
import { Flex } from '@chakra-ui/react';
import '../index.css'
import {useState} from 'react'
import Child from './Child';
import '../index.css'
   
interface Props {
    value: boolean;
  }
   

const Q6:React.FC<Props> = ({ value }) => {

    const [text,changeText] =useState("")

    return(
        <Flex height={'100vh'}  flexDir={value?'column':'row'} position='relative'  fontWeight={'700'} fontSize={value?'1rem':'2rem'} >
           
            <Flex height={value?'60%':'100%'} width={value?'100%':'50%'} flexDir={'column'} backgroundColor={'#96BEA4'} >
               
                <Child value={value} change={changeText}/>
                
            </Flex>
        </Flex>
    )
}

export default Q6