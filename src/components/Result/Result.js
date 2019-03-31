import React,{Fragment} from 'react';
const Result = (props)=>{
    if(props && props.result && props.result.errors.length ===0){
        return (
            <Fragment>
            {
                (props.result.temp) && <p>Temp:{props.result.temp}</p>
            }
            {
                (props.result.humidity) && <p> Humidity:{props.result.humidity}</p>
            }
            {
                (props.result.country) && <p>Country:{props.result.country}</p>
            }
            {
                (props.result.city) && <p>City:{props.result.city}</p>
            }

            </Fragment>
        )
    }else{
        return null;
    }
    
};
export default Result;