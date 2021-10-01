import React, { useEffect, useState } from 'react'
import { Popup, Table, Pagination, Grid, Header, Input } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux';
import { searchCompanies, changePageLimit } from "slices/companies"
import moment from 'moment';
import Filters from "components/Filters/CompaniesFilter"
import _ from "lodash"

const CompaniesTable = () => {
    const dispatch = useDispatch()
    const { companies, currentPage, perPage, totalEntries} = useSelector((state) => state.companies);
    const [tableData, setTableData] = useState({})
    const [sorting, setSorting] = useState({column: null, direction: null})
    const [filter, setFilter] = useState(false)

    useEffect(() => {
        dispatch(searchCompanies(tableData))
    }, [sorting, perPage, filter])

    const primaryAddress = (addresses) => {
        const address = addresses.find((add) => {
            return add.address_type == "primary"
        })
        return(_.isEmpty(address) ? "--" : address.street_address)
    } 

    const pageChangeHandle = (e, {activePage}) => {
        setTableData({...tableData, page: activePage})
        dispatch(searchCompanies(tableData))
    }

    const handleSorting = (column) => {
        const setDir = sorting.direction == null ? 'ascending' : (sorting.direction == 'ascending' ? 'descending' : null)
        const query = sorting.direction == null ? 'name ASC' : (sorting.direction == 'ascending' ? 'name DESC' : null)
        setSorting({
            column: column, 
            direction: setDir
        })
        if (query != null){
            setTableData({...tableData, order: query})
        }
        else{
            const updatedTableData = tableData;
            delete updatedTableData.order;
            setTableData(updatedTableData)

        }
    }

    const handlePageLimit = (e) => {
        setTableData({...tableData, per_page: e.target.value})
        dispatch(changePageLimit(e.target.value))
    }

    const filterHandler = (data) => {
        setTableData({...tableData, ...data})
        setFilter(!filter)
    }


    return(
    <>
    <Filters filterData={filterHandler}/>
    <Table sortable celled>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell
                    sorted={sorting.column === 'name' ? sorting.direction : null}
                    onClick={() => handleSorting("name")}
                >
                    Name
                </Table.HeaderCell>
                <Table.HeaderCell>Primary Address</Table.HeaderCell>
                <Table.HeaderCell>Avatar Url</Table.HeaderCell>
                <Table.HeaderCell>Business Structure</Table.HeaderCell>
                <Table.HeaderCell>NAICS Code</Table.HeaderCell>
                <Table.HeaderCell>Created At</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
        <Table.Body>
            {companies.map((company) => (
                <Table.Row key={company.id}>
                    <Table.Cell>{company.name}</Table.Cell>
                    <Table.Cell>{primaryAddress(company.addresses)}</Table.Cell>
                    <Table.Cell>{company.avatar_url}</Table.Cell>
                    <Table.Cell>{company.business_structure}</Table.Cell>
                    <Popup
                        trigger={<Table.Cell>{company.naic.code}</Table.Cell>}
                        basic
                    >
                        <Grid centered divided columns={1}>
                            <Grid.Column textAlign='center'>
                                <Header as='h4'>{company.naic.title}</Header>
                                {company.naic.description != "NULL" && (<p>{company.naic.description}</p>)}
                            </Grid.Column>
                        </Grid>
                    </Popup>
                    <Table.Cell>{moment(company.created_at).format('L')}</Table.Cell>
                </Table.Row>

            ))}
        </Table.Body>

        <Table.Footer>
            <div className="pagination">
                <Pagination className="pagination" onPageChange={pageChangeHandle} defaultActivePage={currentPage} totalPages={parseInt(totalEntries/perPage)} />
                <Input placeholder='page size'
                    value={perPage}
                    onChange={(e) => handlePageLimit(e)}
                 />
            </div>
        </Table.Footer>
    </Table>
    </>
    )
}
export default CompaniesTable
