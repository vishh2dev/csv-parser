import React,{useState} from 'react'
import CSVReader from 'react-csv-reader'
import FileContainer from './FileContainer'
import './mainPageStyle.css'

const MainPage = (props) =>{
    const [files,setFile] = useState([])
    const [isClicked,setIsClicked] = useState(false)
    const handleChange = (data, fileInfo) =>{
        // console.log(data); 
        setFile(data) 
    }

    const papaparseOptions = {
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
        transformHeader: header => header.toLowerCase().replace(/\W/g, "_")
    }

    const handleClick = () =>{
        setIsClicked(true)
    }

    //   console.log(files);
    return(
       <div className="container">
           <h1> File Upload + CSV parser</h1>
           <CSVReader 
                cssClass="react-csv-input"
                onFileLoaded={handleChange} 
                parserOptions={papaparseOptions} 
            />
            <div>
               <button onClick={handleClick}>Upload file</button>
            </div>
           
           {isClicked > 0 && <FileContainer files={files}/>}
       </div>
       
    )
} 

export default MainPage