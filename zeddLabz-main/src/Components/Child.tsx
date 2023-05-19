import React from 'react'
import { Flex } from '@chakra-ui/react';
import '../index.css'
import {useState} from 'react'
   
interface Props {
    value: boolean;
    change:React.Dispatch<React.SetStateAction<string>>
  }
   

const Child:React.FC<Props> = ({ value,change }) => {

    const [input,setInput]=useState("")

    const handleChange=(e:any)=>{
        setInput(e.target.value)
    }
    const setText=()=>{
        change(input)
    }

    return(
        <Flex backgroundColor={'#ED806E'} width={'100%'} height={value?'50%':'50%'} flexDir={'column'} fontWeight={'700'} fontSize={value?'1rem':'2rem'} justifyContent={'center'} textAlign={'center'} alignItems={'center'}>
            <div>This is Child Component</div>
            Enter Name: <input type='text' onChange={handleChange}></input>
            <button onClick={setText}>Submit</button>
        </Flex>
    )
}
export default Child
