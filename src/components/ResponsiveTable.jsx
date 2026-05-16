import React from 'react';

const ResponsiveTable = ({ headers, data, rows, title }) => {
  const tableData = rows || data || [];
  
  return (
    <div className="my-8 overflow-hidden border border-gray-200 rounded-lg">
      {title && (
        <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
          <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              {headers.map((header, index) => (
                <th key={index} scope="col" className="px-6 py-3 font-bold">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, rowIndex) => (
              <tr 
                key={rowIndex} 
                className={`bg-white border-b hover:bg-gray-50 transition-colors ${
                  rowIndex === tableData.length - 1 ? 'border-b-0' : ''
                }`}
              >
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="px-6 py-4 text-gray-900">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResponsiveTable;

