import React, { useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { Input, Button, Icon } from 'semantic-ui-react'

const CompaniesFilter = (props) => {
    const { totalEntries } = useSelector((state) => state.companies);
    const [searchFields, setSearchFields] = useState({name: "", code: ""})

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setSearchFields({
            ...searchFields,
            [name]: value,
          });
    }

    const filterHandler = () => {
        props.filterData(searchFields)
    }

    return(
        <div className="filter">
            <p>{`${totalEntries} companies`}</p>
            <div>
                <Input 
                    name="name"
                    placeholder='company name'
                    value={searchFields.name} 
                    onChange={(e) => changeHandler(e)}
                />
                <Input 
                    name="code"
                    placeholder='NAIC Code'
                    value={searchFields.code} 
                    onChange={(e) => changeHandler(e)} 
                />
                <Button onClick={filterHandler} icon labelPosition='right' >
                    Filter
                    <Icon name= 'search' />
                </Button>
            </div>
        </div>
    )
}

export default CompaniesFilter