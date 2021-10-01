import react from "react"
import CompaniesTable from "components/Tables/CompaniesTable"
import Spinner from "components/Spinners/Spinner"
import { useSelector } from 'react-redux';
import "./index.scss"


const Companies = () => {
    const { loading } = useSelector((state) => state.companies);

    return(
        <>
        <Spinner active={loading} />
        <div className="company-container">
            <CompaniesTable />
        </div>
        </>
    )
}

export default Companies