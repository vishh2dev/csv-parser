import React from 'react'
import DetailsTable from './DetailsTable'
import DetailsChart from './DetailsChart'
import './details.css'
//some changes for confirming
const Details = (props) =>{
    const { files } = props


    const hostDetails = files.filter((file) =>{
        return file.guest == "No"
    })[0]

    const timeConvert = (time) =>{
        const hours = Math.floor(time / 60) 
        const minutes = time % 60
        return `(${hours} hour ${minutes} minutes)`
    }

    return(
        <div >
            <h2>Host - {hostDetails.name__original_name_} </h2>
            <h2>Total participants -  {files.length}</h2>
            <h2>Duration - {hostDetails.total_duration__minutes_} minutes {timeConvert(hostDetails.total_duration__minutes_)}</h2>
            <div className="contain">
                <DetailsTable files={files}/>
                <DetailsChart files={files}/>
            </div>
        </div>
        
    )
}

export default Details