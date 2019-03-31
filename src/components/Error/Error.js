import React from 'react';
const Error = (props)=>{
    const errors = props.errors.length;
   
    if(errors !== 0){
        const error_msg = props.errors.map((error)=>{
            return (
                <li key={error}>{error}</li>
            );
        });
        return (
            <ul>
                {error_msg}
            </ul>
        );
    }else{
        //no errors return null
        return null;
    }
}
export default Error