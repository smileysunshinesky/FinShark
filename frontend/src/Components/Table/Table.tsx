import React from 'react';
import { testIncomeStatementData } from './testData';
import {v4 as uuidv4} from 'uuid';

const data = testIncomeStatementData;

type Props = {
    config: any;
    data: any;
};

const Table = ({config, data}: Props) => {
    const renderedRows = data.map((company: any) => {
        return (
            <tr key={uuidv4()}>
                {config.map((val: any) => {
                    return <td key={uuidv4()} className='p-4 whitespace-nowrap text-sm font-normal text-gray-900'>
                        {val.render(company)}
                    </td>
                })}
            </tr>
        )
    });

    const renderedHeaders = config.map((cell: any) => {
        return (
            <th className='p-4 text-left text-xs font-medium text-fray-500 uppercase tracking wider' key={uuidv4()}>
                {cell.label}
            </th>
        )
    })
    return (
        <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8">
            <table>
                <thead ><tr className='min-w-full divide-y divide=gray-200 m-5'>{renderedHeaders}</tr></thead>
                <tbody>{renderedRows}</tbody>
            </table>
        </div>
    )
}

export default Table