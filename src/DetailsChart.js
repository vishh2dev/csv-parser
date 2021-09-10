import React from 'react'
import Chart from "react-google-charts"
import './details.css'

const DetailsChart = (props) =>{
    const { files } = props
    const data = [['Student Names','Duration']]

    files.filter((file) => file.guest === "Yes" ).forEach((ele) => data.push([ele.name__original_name_,ele.total_duration__minutes_]))

    
    return(
        <div >
            <Chart chartType="Bar" 
                   width="500px" 
                   height="300px"
                   data={data} 
                   options={{
                    colors:'#606060'
                        }} 
            />
        </div>
    )
}

export default DetailsChart