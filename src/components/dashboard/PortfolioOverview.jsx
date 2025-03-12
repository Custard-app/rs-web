import React, { useState } from 'react';

const PortfolioOverview = () => {
  const data = [
    {
      '3190-ICICI Prudential Manufacturing Fund Growth': {
        folio_no: '10076220',
        mode_of_holding: 'Single',
        kyc_status: 'KYC OK',
        nominee: 'Registered',
        isin: 'INF109KC1LG4',
        ucn: 'Not Available',
        mobile: 'XXXXXX1600',
        email: 'kirti23@rediffmail.com',
        opening_balance: 113.334,
        transactions: [
          {
            date: '07.11.24',
            description: 'SIP Purchase-NSE - Instalment No - 5/906',
            amount: 999.95,
            stamp_duty: 0.05,
            nav: 34.56,
            price: 34.56,
            units: 28.934,
          },
        ],
        closing_balance: 142.268,
      },
      'ESG-ICICI Prudential MidCap Fund - Growth': {
        folio_no: '10076220',
        mode_of_holding: 'Single',
        kyc_status: 'KYC OK',
        nominee: 'Registered',
        isin: 'INF109K01AN2',
        ucn: 'MFPRUI0040',
        mobile: 'XXXXXX1600',
        email: 'kirti23@rediffmail.com',
        opening_balance: 128.41,
        transactions: [
          {
            date: '18.11.24',
            description: 'SIP Purchase-NSE - Instalment No - 88/988',
            amount: 999.95,
            stamp_duty: 0.05,
            nav: 273.4,
            price: 273.4,
            units: 3.657,
          },
        ],
        closing_balance: 132.067,
      },
      'CFGP-Invesco India Contra Fund - Regular Growth': {
        folio_no: '2105558025',
        mode_of_holding: 'Single',
        kyc_status: 'KYC OK',
        nominee: 'Registered',
        isin: 'INF205K01189',
        ucn: 'MFLOTS0006',
        mobile: 'XXXXXX1600',
        email: 'kirti23@rediffmail.com',
        opening_balance: 408.273,
        transactions: [
          {
            date: '04.11.24',
            description: 'Systematic Investment',
            amount: 999.95,
            stamp_duty: 0.05,
            nav: 132.75,
            price: 132.75,
            units: 7.533,
          },
          {
            date: '18.11.24',
            description: 'Systematic Investment',
            amount: 999.95,
            stamp_duty: 0.05,
            nav: 129.57,
            price: 129.57,
            units: 7.717,
          },
          {
            date: '26.11.24',
            description: 'Systematic Investment',
            amount: 1999.9,
            stamp_duty: 0.1,
            nav: 133.86,
            price: 133.86,
            units: 14.94,
          },
        ],
        closing_balance: 438.463,
      },
      'PSGP-NIPPON INDIA POWER & INFRA FUND - GROWTH PLAN - GROWTH OPTION': {
        folio_no: '477163386676',
        mode_of_holding: 'Single',
        kyc_status: 'KYC OK',
        nominee: 'Registered',
        isin: 'INF204K01AE0',
        ucn: 'MFRILC0014',
        mobile: 'XXXXXX1600',
        email: 'kirti23@rediffmail.com',
        opening_balance: 10.775,
        transactions: [
          {
            date: '04.11.24',
            description: 'Sys. Investment (1/1)',
            amount: 1999.9,
            stamp_duty: 0.1,
            nav: 348.6957,
            price: 348.6957,
            units: 5.735,
          },
          {
            date: '26.11.24',
            description: 'Sys. Investment (1/Perpetual)',
            amount: 1999.9,
            stamp_duty: 0.1,
            nav: 350.0375,
            price: 350.0375,
            units: 5.713,
          },
        ],
        closing_balance: 22.223,
      },
      'SCGP-NIPPON INDIA SMALL CAP FUND - GROWTH PLAN GROWTH OPTION': {
        folio_no: '477163386676',
        mode_of_holding: 'Single',
        kyc_status: 'KYC OK',
        nominee: 'Registered',
        isin: 'INF204K01HY3',
        ucn: 'MFRILC0135',
        mobile: 'XXXXXX1600',
        email: 'kirti23@rediffmail.com',
        opening_balance: 402.165,
        transactions: [
          {
            date: '05.11.24',
            description: 'Sys. Investment (1/1)',
            amount: 1999.9,
            stamp_duty: 0.1,
            nav: 176.3258,
            price: 176.3258,
            units: 11.342,
          },
          {
            date: '26.11.24',
            description: 'Sys. Investment (1/Perpetual)',
            amount: 1999.9,
            stamp_duty: 0.1,
            nav: 172.969,
            price: 172.969,
            units: 11.562,
          },
        ],
        closing_balance: 425.069,
      },
      summary: {
        'Aditya Birla Sun Life Mutual Fund': {
          1019449765: {
            scheme_name:
              '92-Aditya Birla Sun Life Frontline Equity Fund -Growth-Regular Plan',
            closing_units: 58.947,
            nav: 509.05,
            cost_value: 23000.0,
            valuation: 30006.97,
          },
        },
        'ICICI Prudential Mutual Fund': {
          10076220: {
            scheme_name: '3190-ICICI Prudential Manufacturing Fund Growth',
            closing_units: 142.268,
            nav: 33.93,
            cost_value: 5000.0,
            valuation: 4827.15,
          },
          '10076220_2': {
            scheme_name: 'ESG-ICICI Prudential MidCap Fund - Growth',
            closing_units: 132.067,
            nav: 285.33,
            cost_value: 27000.0,
            valuation: 37682.68,
          },
        },
        'INVESCO MUTUAL FUND': {
          2105558025: {
            scheme_name: 'CFGP-Invesco India Contra Fund - Regular Growth',
            closing_units: 438.463,
            nav: 134.37,
            cost_value: 40801.09,
            valuation: 58916.27,
          },
        },
        'NIPPON INDIA MUTUAL FUND': {
          477163386676: {
            scheme_name:
              'PSGP-NIPPON INDIA POWER & INFRA FUND - GROWTH PLAN - GROWTH OPTION',
            closing_units: 22.223,
            nav: 355.9408,
            cost_value: 8000.0,
            valuation: 7910.07,
          },
          '477163386676_2': {
            scheme_name:
              'SCGP-NIPPON INDIA SMALL CAP FUND - GROWTH PLAN GROWTH OPTION',
            closing_units: 425.069,
            nav: 176.0509,
            cost_value: 52000.0,
            valuation: 74833.78,
          },
        },
        grand_total: 214176.92,
      },
    },
  ];

  if (!data || data.length === 0)
    return <p className="text-center text-gray-500">No data available</p>;

  const portfolioData = data[0];
  const funds = Object.keys(portfolioData).filter(
    (key) => key !== 'summary' && key !== 'grand_total',
  );
  const summary = portfolioData.summary;

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8 mt-10">
      <h1 className="text-3xl font-bold text-gray-900 text-center border-b pb-4">
        Mutual Fund Portfolio Overview
      </h1>

      {/* Fund Details */}
      <div className="space-y-6">
        {funds.map((fundKey) => {
          const fund = portfolioData[fundKey];
          return (
            <div
              key={fundKey}
              className="bg-white p-6 shadow-md rounded-lg border"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2 border-b pb-2">
                {fundKey}
              </h2>
              <div className="grid grid-cols-2 gap-4 text-gray-600">
                <p>
                  <strong>Folio No:</strong> {fund.folio_no}
                </p>
                <p>
                  <strong>Mode of Holding:</strong> {fund.mode_of_holding}
                </p>
                <p>
                  <strong>Nominee:</strong> {fund.nominee}
                </p>
                <p>
                  <strong>Closing Balance:</strong> {fund.closing_balance} units
                </p>
              </div>

              {/* Transactions */}
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-700">
                  Transactions
                </h3>
                <div className="overflow-x-auto mt-2">
                  <table className="w-full border-collapse border text-gray-700">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border p-2">Date</th>
                        <th className="border p-2">Description</th>
                        <th className="border p-2">Amount (₹)</th>
                        <th className="border p-2">NAV</th>
                        <th className="border p-2">Units</th>
                      </tr>
                    </thead>
                    <tbody>
                      {fund.transactions.map((tx, index) => (
                        <tr key={index} className="text-center">
                          <td className="border p-2">{tx.date}</td>
                          <td className="border p-2">{tx.description}</td>
                          <td className="border p-2">₹{tx.amount}</td>
                          <td className="border p-2">{tx.nav}</td>
                          <td className="border p-2">{tx.units}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Portfolio Summary */}
      <div className="bg-white p-6 shadow-md rounded-lg border">
        <h2 className="text-2xl font-bold text-gray-900 border-b pb-2">
          Portfolio Summary
        </h2>
        {Object.keys(summary).map((amcKey) => {
          const amcData = summary[amcKey];
          return (
            <div key={amcKey} className="mt-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {amcKey}
              </h3>
              <div className="grid grid-cols-2 gap-4 text-gray-700">
                {Object.keys(amcData).map((fundKey) => {
                  const fund = amcData[fundKey];
                  return (
                    <div
                      key={fundKey}
                      className="bg-gray-50 p-4 rounded-md shadow"
                    >
                      <p className="font-medium text-gray-800">
                        {fund.scheme_name}
                      </p>
                      <p>Closing Units: {fund.closing_units}</p>
                      <p>NAV: ₹{fund.nav}</p>
                      <p>Cost Value: ₹{fund.cost_value}</p>
                      <p>Valuation: ₹{fund.valuation}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
        <h3 className="text-xl font-bold mt-6 text-center text-gray-900">
          Grand Total: ₹{summary.grand_total}
        </h3>
      </div>
    </div>
  );
};

export default PortfolioOverview;
