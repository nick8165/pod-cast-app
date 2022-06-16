import React, {useState} from "react"
import { FormControl, InputGroup, Button} from "react-bootstrap"

function PodCastSearch({handleSearchValue}) {
  const [searchValue, setSearchValue] = useState("")
    
    function searchChange(e) {
        setSearchValue(e.target.value)
    }

    function handleClick() {
        handleSearchValue(searchValue)
    }

    return(
        <div className="App" onChange={searchChange}>
        <div className="container h-100">
          <div className="row h-100 justify-content-center align-items-center"></div>
          <InputGroup className="col-6">
            <FormControl
                
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2" onClick={handleClick}>
                Search
            </Button>
          </InputGroup>
        </div>
      </div>
    )
}

export default PodCastSearch