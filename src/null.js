const [file,setFile] = useState([])

    const csvToArray = (str) =>{
        const headers = str.slice(0, str.indexOf("\n")).split(', ')
        const rows = str.slice(str.indexOf("\n") + 1).split("\n")
        console.log(headers,rows)
        const arr = rows.map(function (row) {
            const values = row.split(',');
            const el = headers.reduce(function (object, header, index) {
              object[header] = values[index];
              return object;
              console.log(object)
            }, {})
            return el;
          });
          
          // return the array
          return arr;
          
        

    }

    const handleChange = (e) =>{
        // console.log(e.target.files[0])
        const input = e.target.files[0]
        const reader = new FileReader()

        reader.onload = function (e) {
            const text = e.target.result;
            // console.log(text)
            const data = csvToArray(text)
            // console.log(data)
            // setFile(text)
          }
          
        reader.readAsText(input)
        //   setFile(input)
          
    }
    // console.log(file)
      return(
            <div> 
                <input type="file" onChange={handleChange} accept=".csv" />
                
            </div>
      )