import React from 'react'
import Details from './Details'

const FileContainer = (props) =>{
    const { files } = props
    return(
        <div>
            <hr/>
            <h1>Report</h1> 
            <Details files={files} />
        </div>
        
    )
}

export default FileContainer