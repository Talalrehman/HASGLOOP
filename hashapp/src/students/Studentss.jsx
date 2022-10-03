// import { data } from 'autoprefixer'
import React, { Component } from 'react'
// import Data from "./data"
export default class Studentss extends Component {
    state={
        value:"",
        data : [
            {
                name: 'John',
                validityDate: '2030-12-30'
            },
            {
                name: 'Jane',
                validityDate: '2030-05-25'
            },
            {
                name: 'Adam',
                validityDate: '2030-11-11'
            },
            {
                name: 'Bonnie',
                validityDate: '2008-11-11'
            },
            {
                name: 'Dhilip',
                validityDate: '2030-12-30'
            },
            {
                name: 'Falude',
                validityDate: '2020-05-25'
            },
            {
                name: 'Damiyen',
                validityDate: '2030-11-11'
            },
            {
                name: 'Talisk',
                validityDate: '2023-11-11'
            }
        ],
        list:"",
    }
    handleChange=(e)=>{
        this.setState({value:e.target.value})}
       
            handleClick=(e)=>{
                if (e.name===this.value) {
                  // this.State({value:e.target.value[""]})
                 alert("this user is not verifird")
                  
                }
           
            //     else{
            //   this.setState({list:this.state.data.name})
            
            //   this.setState({value:""})}
    }
    //  const find=arr.filter((e)=>{this.state.arr===this.state.value})
  render() {
    console.log(this.state.data);
    return (
      <div>
         <div className='h-[60vh] w-[100%]   ' >
        <div className='h-[40vh] w-[60%] border  ml-[20%] mt-[14%] bg-gray-200'>
            <div className=' flex h-[6vh] w-[100%] border justify-around mt-[3%]'>
            <h1 className='text-3xl '>Students Name:</h1> <h1 className='text-3xl mr-[28%]'>Joining Date:</h1></div>
<div className='flex h-[6vh] w-[100%]  justify-around '>
    
<input type="text" value={this.state.value} onChange={this.handleChange} className='h-[5vh] w-[20%] border border-gray-500 ' />

<input type="date" className='h-[5vh] w-[20%] border border-gray-500 ' />
<button className='h-[5vh] w-[8%] border border-black bg-green-500' onClick={this.handleClick}>Add</button>
</div>
<thead>
    <tr>
      <th>{this.state.list}</th>
      
    </tr>
  </thead>
        </div>


       
    </div>
      </div>
    )
  }
}
