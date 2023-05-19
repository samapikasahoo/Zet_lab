import React from 'react'
import { Flex } from '@chakra-ui/react';
import '../index.css'
import {useSelector} from "react-redux";
import {useState} from "react"

   
interface Props {
    value: boolean;
  }
   
interface State {
    inputValue: string;
  }

const Q1:React.FC<Props> = ({ value }) => {
    
    const Q2_state =useSelector((state:any)=>state.changeNumber)
    const Q3_state=useSelector((state:any)=>state.updateNumber)
    
    interface FunctionComponentProps {
        message: string;
      }
      
    class ClassComponent extends React.Component<{ message: string },State> 
    {
        constructor(props:any) {
            super(props);
        this.state = {
            inputValue: '',
          };
        }
        handleInputChange = (event:any) => {
          this.setState({
            inputValue: event.target.value,
          });
        }

        render() 
        {
            const { inputValue } = this.state;

          return <Flex flexDir={'column'} justifyContent={'center'} alignItems={'center'}>
                <div>{this.props.message}</div>
                <div style={{marginTop:'30px'}}>The value of count from question 2 part is</div>
                <div style={{color:'blue'}}> {Q2_state}</div>
                <div>fetched from redux store</div>
                <div style={{color:'purple',marginTop:'30px'}}>Use of Class State in Class Component</div>
                <input type="text" placeholder='Enter text here' onChange={this.handleInputChange}></input>
                <div>{inputValue}</div>
          </Flex>;
        }
    }

    const FunctionComponent: React.FC<FunctionComponentProps> = ({ message }) => {

        const [input,setInput]=useState("")

        return(
            <Flex flexDir={'column'} justifyContent={'center'} alignItems={'center'}>
                <div>{message}</div>
                <div style={{marginTop:'30px'}}>The value of count from question 3 part is</div>
                <div style={{color:'blue'}}> {Q3_state}</div>
                <div>fetched from redux store</div>
                <div style={{color:'red',marginTop:'30px'}}>Use of Hooks in Functional Component</div>
                <input type="text" placeholder='Enter text here' onChange={(e)=>setInput(e.target.value)}></input>
                <div>{input}</div>
          </Flex>
        )

    }

return (
    <Flex height={'100vh'}  flexDir={value?'column':'row'} position='relative' justifyContent={'center'} color={'white'} fontWeight={'700'} fontSize={value?'1rem':'2rem'} textAlign={'center'}>
        <Flex className='heading'>Question 1</Flex>
        <Flex width={value?'100%':'50%'} backgroundColor={'#ED806E'} height={value?'50%':''}  justifyContent={'center'} alignItems={'center'}>
            <ClassComponent message={"This is from Class Component."}/>
        </Flex>
       

    </Flex>
  )
}

export default Q1