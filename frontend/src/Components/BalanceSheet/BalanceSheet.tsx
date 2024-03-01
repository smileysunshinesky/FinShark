import React, { useEffect, useState } from 'react'
import { CompanyBalanceSheet } from '../../company';
import { useOutletContext } from 'react-router';
import { getBalanceSheet } from '../../api';
import RatioList from '../RatioList/RatioList';
import Spinner from '../Spinner/Spinner';

type Props = {}

const config = [
    {
        label: <span className="font-bold">Total Assets</span>,
        render: (company: CompanyBalanceSheet) => company.totalAssets,
    },
    {
        label: "Current Assets",
        render: (company: CompanyBalanceSheet) => company.totalCurrentAssets,
    },
    {
        label: "Total Cash",
        render: (company: CompanyBalanceSheet) => company.cashAndCashEquivalents,
    },
    {
        label: "Property & equipment",
        render: (company: CompanyBalanceSheet) => company.propertyPlantEquipmentNet,
    },
    {
        label: "Intangible Assets",
        render: (company: CompanyBalanceSheet) => company.intangibleAssets,
    },
    {
        label: "Long Term Debt",
        render: (company: CompanyBalanceSheet) => company.longTermDebt,
    },
    {
        label: "Total Debt",
        render: (company: CompanyBalanceSheet) => company.otherCurrentLiabilities,
    },
    {
        label: <span className="font-bold">Total Liabilites</span>,
        render: (company: CompanyBalanceSheet) => company.totalLiabilities,
    },
    {
        label: "Current Liabilities",
        render: (company: CompanyBalanceSheet) => company.totalCurrentLiabilities,
    },
    {
        label: "Long-Term Debt",
        render: (company: CompanyBalanceSheet) => company.longTermDebt,
    },
    {
        label: "Long-Term Income Taxes",
        render: (company: CompanyBalanceSheet) => company.otherLiabilities,
    },
    {
        label: "Stakeholder's Equity",
        render: (company: CompanyBalanceSheet) => company.totalStockholdersEquity,
    },
    {
        label: "Retained Earnings",
        render: (company: CompanyBalanceSheet) => company.retainedEarnings,
    },
];

const BalanceSheet = (props: Props) => {
    const ticker = useOutletContext<string>();
    const [balanceSheet, setBalanceSheet] = useState<CompanyBalanceSheet>();
    useEffect(() => {
        const getData = async () => {
            const result = await getBalanceSheet(ticker!);
            setBalanceSheet(result?.data[0]);
        };
        getData();
    }, []);
    return (<>
    {balanceSheet ? (<>
    <RatioList data={balanceSheet} config={config} />
    </>): (<Spinner />)}
    </>);
}

export default BalanceSheet