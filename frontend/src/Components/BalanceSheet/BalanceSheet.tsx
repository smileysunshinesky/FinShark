import React, { useEffect, useState } from 'react'
import { CompanyBalanceSheet } from '../../company';
import { useOutletContext } from 'react-router';
import { getBalanceSheet } from '../../api';
import RatioList from '../RatioList/RatioList';
import Spinner from '../Spinner/Spinner';
import { formatLargeMonetaryNumber } from '../../Helpers/NumberFormatting';

type Props = {}

const config = [
    {
        label: <div className="font-bold">Total Assets</div>,
        render: (company: CompanyBalanceSheet) =>
          formatLargeMonetaryNumber(company.totalAssets),
      },
      {
        label: "Current Assets",
        render: (company: CompanyBalanceSheet) =>
          formatLargeMonetaryNumber(company.totalCurrentAssets),
      },
      {
        label: "Total Cash",
        render: (company: CompanyBalanceSheet) =>
          formatLargeMonetaryNumber(company.cashAndCashEquivalents),
      },
      {
        label: "Property & equipment",
        render: (company: CompanyBalanceSheet) =>
          formatLargeMonetaryNumber(company.propertyPlantEquipmentNet),
      },
      {
        label: "Intangible Assets",
        render: (company: CompanyBalanceSheet) =>
          formatLargeMonetaryNumber(company.intangibleAssets),
      },
      {
        label: "Long Term Debt",
        render: (company: CompanyBalanceSheet) =>
          formatLargeMonetaryNumber(company.longTermDebt),
      },
      {
        label: "Total Debt",
        render: (company: CompanyBalanceSheet) =>
          formatLargeMonetaryNumber(company.otherCurrentLiabilities),
      },
      {
        label: <div className="font-bold">Total Liabilites</div>,
        render: (company: CompanyBalanceSheet) =>
          formatLargeMonetaryNumber(company.totalLiabilities),
      },
      {
        label: "Current Liabilities",
        render: (company: CompanyBalanceSheet) =>
          formatLargeMonetaryNumber(company.totalCurrentLiabilities),
      },
      {
        label: "Long-Term Debt",
        render: (company: CompanyBalanceSheet) =>
          formatLargeMonetaryNumber(company.longTermDebt),
      },
      {
        label: "Long-Term Income Taxes",
        render: (company: CompanyBalanceSheet) =>
          formatLargeMonetaryNumber(company.otherLiabilities),
      },
      {
        label: "Stakeholder's Equity",
        render: (company: CompanyBalanceSheet) =>
          formatLargeMonetaryNumber(company.totalStockholdersEquity),
      },
      {
        label: "Retained Earnings",
        render: (company: CompanyBalanceSheet) =>
          formatLargeMonetaryNumber(company.retainedEarnings),
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