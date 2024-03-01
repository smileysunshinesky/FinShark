import { useOutletContext } from 'react-router';
import { CompanyCashFlow } from '../../company';
import { useEffect, useState } from 'react';
import { getCashflowStatement } from '../../api';
import Table from '../Table/Table';
import Spinner from '../Spinner/Spinner';

type Props = {};

const config = [
  {
    label: "Date",
    render: (company: CompanyCashFlow) => company.date,
  },
  {
    label: "Operating Cashflow",
    render: (company: CompanyCashFlow) => company.operatingCashFlow,
  },
  {
    label: "Investing Cashflow",
    render: (company: CompanyCashFlow) => company.netCashUsedForInvestingActivites,
  },
  {
    label: "Financing Cashflow",
    render: (company: CompanyCashFlow) => company.netCashUsedProvidedByFinancingActivities
  },
  {
    label: "Cash At End of Period",
    render: (company: CompanyCashFlow) => company.cashAtEndOfPeriod,
  },
  {
    label: "CapEX",
    render: (company: CompanyCashFlow) => company.capitalExpenditure,
  },
  {
    label: "Issuance Of Stock",
    render: (company: CompanyCashFlow) => company.commonStockIssued,
  },
  {
    label: "Free Cash Flow",
    render: (company: CompanyCashFlow) => company.freeCashFlow,
  },
];

const CashFlowStatement = (props: Props) => {

  const ticker = useOutletContext<string>();
  const [cashflowData, setCashflowData] = useState<CompanyCashFlow[]>();
  useEffect(() => {
    const fetchCashflow =async () => {
      const result = await getCashflowStatement(ticker!);
      setCashflowData(result?.data);
    };
    fetchCashflow();
  }, []);
  return (<>
  {cashflowData ? (
  <Table data={cashflowData} config={config} />
  ): (<Spinner />)}
  </>)
}

export default CashFlowStatement