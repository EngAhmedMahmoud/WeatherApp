import React from "react";
import './Form.css';
import Error from '../Error/Error';

const Form = (props)=>{
    return (
        <div>
            <Error errors={props.errors}/>
            <form onSubmit={props.sendData}>
                <label>City</label>
                <input type="text" name="city" required/>
                <button type="submit"> Get Weather Information</button>
            </form>
        </div>
    )
}
export default Form;