import React, { Component } from 'react'
import {Link} from "react-router-dom";
import axios from 'axios';
export const done = () => {
      
    alert("your Order place successfully");
     
  }
class  CheckOut extends Component {
    state = {
        name: '',
        mail:'',
        address:'',
        phone:'',
    }
    handleInput = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        }
        );

    }
    saveOrder = async (e)=>{
        e.preventDefault();

        const res = await axios.post('http://localhost:8000/api/order',this.state);
        if(res.data.status === 200)
        {
            console.log(res.data.message);
            this.setState({
                name: '',
                mail:'',
                address:'',
                phone:'', 
            });
        }
    }
 render()
 {  
    return (
        <div>
            <div className="py-3 bg-warning">
                <div className='container'>
                    <h1 align="left" textColor={"blue"}>Home / CheckOut</h1>
                </div>
            </div>

            <div className='py-7'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-14'>
                            <div className='card'>
                                <div className='card-header'>
                                    <h2 align="left"></h2>
                                </div>
                              <div className='card-body'>
                                
                                <form onSubmit={this.saveOrder} method="post">
                                    
                                        <div className='col-md-10'>
                                            <div className='from-group mb-3'>
                                                <label ><h3>Name</h3> </label>
                                                <input type="text" name='name' onChange={this.handleInput} value={this.state.name} className='form-control' required/>
                                            </div>
                                        </div>
                                    
                                    
                                        <div className='col-md-10'>
                                            <div className='from-group mb-3'>
                                                <label ><h3>Email</h3> </label>
                                                <input type="mail" name='mail' onChange={this.handleInput} value={this.state.mail} className='form-control' required/>
                                            </div>
                                        </div>
                                    
                                    
                                        <div className='col-md-10'>
                                            <div className='from-group mb-3'>
                                                <label > <h3>Address</h3> </label>
                                                <input type="text" textSize="50px" name='address' onChange={this.handleInput} value={this.state.address} className='form-control' required/>
                                            </div>
                                        </div>
                                    
                                    
                                        <div className='col-md-10'>
                                            <div className='from-group mb-3'>
                                                <label ><h3>Phone</h3> </label>
                                                <input type="number" name='phone' onChange={this.handleInput} value={this.state.phone} className='form-control' required/>
                                            </div>
                                        </div>
                                    
                                    
                                    <div className='col-md-12'>
                                            <div className='from-group text-end'>
                                                
                                                <button type='submit' textColor="Green" className='btn btn-lg pro' onClick={done}><Link to={"/checkout"}><h3>Place Order</h3></Link></button>
                                            </div>
                                    </div>

                                 </form>   

                             </div>

                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
  }
}


export default CheckOut;
