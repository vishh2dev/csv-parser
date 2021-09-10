import React from 'react'
import Details from './Details'
import './details.css'
import './table.css'
const DetailsTable = (props) =>{
    const { files } = props

    return(
           <div id="customers">
            <table border="1px">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Duration</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        files.map((file,i) =>{
                            return(
                                <tr key={i}>
                                    <td>{file.name__original_name_}</td>
                                    <td>{file.user_email}</td>
                                    <td>{file.total_duration__minutes_}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
          </div> 
    )
}

export default DetailsTable