import React, { useEffect, useState } from 'react'
import { CompanyTenK } from '../../company';
import { getTenK } from '../../api';
import TenkFinderItem from './TenkFinderItem/TenkFinderItem';
import {v4 as uuidv4} from 'uuid';

type Props = {
    ticker: string;
}

const TenKFinder = ({ ticker }: Props) => {
    const [companyData, setCompanyData] = useState<CompanyTenK[]>();
    useEffect(() => {
        const getCompanyData = async() => {
            const value = await getTenK(ticker);
            setCompanyData(value?.data);
        }
        getCompanyData();
    }, []);
    return (
        <div className="inline-flex rounded-md shadow-sm m-4">
            {companyData?.slice(0, 5).map((tenK) => {
                return <TenkFinderItem key={uuidv4()} tenK={tenK} />
            })}
        </div>
    )
}

export default TenKFinder