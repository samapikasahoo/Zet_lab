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
            <Flex className='heading'>Question 6</Flex>
            <Flex backgroundColor={'#96BEA4'} height={value?'40%':'100%'} width={value?'calc(100% - 100px)':'calc(50% - 100px)'} padding='0px 50px' justifyContent={'center'} textAlign={'center'} alignItems={'center'}>
                <div>I am sending input data from child component into parent component by using state variable</div>
            </Flex>
            <Flex height={value?'60%':'100%'} width={value?'100%':'50%'} flexDir={'column'} backgroundColor={'#96BEA4'} >
                <Flex  flexDir={'column'} width={value?'calc(100% - 100px)':'calc(100% - 100px)'}  padding='0px 50px' height={value?'50%':'50%'} justifyContent={'center'} textAlign={'center'} alignItems={'center'}>
                        <div>This is parent Component</div>
                        <div>You have entered: <span style={{color:'white'}}>{text}</span> in child component</div>
                </Flex>
                <Child value={value} change={changeText}/>
                
            </Flex>
        </Flex>
    )
}

export default Q6