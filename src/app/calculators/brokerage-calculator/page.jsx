'use client';
import React, { useState, useEffect } from 'react';
import WidthXL from '@/wrapper/widths/WidthXL';

export default function BrokerageCalculator() {
  const [tab, setTab] = useState('delivery'); // Tabs: delivery, intraday, f&o
  const [exchange, setExchange] = useState('BSE'); // Exchange: BSE or NSE
  const [quantity, setQuantity] = useState(50); // Number of shares
  const [buyPrice, setBuyPrice] = useState(1000); // Buy price per share
  const [sellPrice, setSellPrice] = useState(1500); // Sell price per share
  const [data, setData] = useState({
    turnover: 0,
    profitLoss: 0,
    charges: {
      brokerage: 0,
      stt: 0,
      exchange: 0,
      sebi: 0,
      gst: 0,
      stampDuty: 0,
    },
    netProfitLoss: 0,
  });

  // Charge rates per tab
  const chargeRates = {
    delivery: {
      brokerage: 20, // Delivery brokerage cap
      sttRate: 0.00125, // STT: 0.125%
      sebiRate: 0.0000005, // SEBI Fee
      gstRate: 18, // GST: 18%
    },
    intraday: {
      brokerage: 0.03, // Intraday brokerage: 0.03% per leg
      sttRate: 0.00025, // STT: 0.025%
      sebiRate: 0.0000005, // SEBI Fee
      gstRate: 18, // GST: 18%
    },
    fno: {
      brokerage: 0.03, // F&O brokerage: 0.03% or ₹20 cap
      sttRate: 0.0001, // STT: 0.01%
      sebiRate: 0.0000005, // SEBI Fee
      gstRate: 18, // GST: 18%
    },
  };

  // Exchange-specific rates
  const exchangeRates = {
    BSE: {
      stampDutyRate: 0.00015, // BSE stamp duty
      exchangeRate: 0.0000345, // BSE exchange charges
    },
    NSE: {
      stampDutyRate: 0.00016, // NSE stamp duty
      exchangeRate: 0.0000325, // NSE exchange charges
    },
  };

  // Calculate values
  useEffect(() => {
    if (!exchange || !tab) return;

    const rates = chargeRates[tab];
    const exchangeSpecificRates = exchangeRates[exchange];

    const turnover = quantity * (buyPrice + sellPrice);

    // Profit & Loss
    const profitLoss = quantity * (sellPrice - buyPrice);

    // Charges
    const brokerage = Math.min((turnover * rates.brokerage) / 100, 20); // Brokerage capped at ₹20 for delivery & F&O
    const stt = turnover * rates.sttRate; // Securities Transaction Tax
    const exchangeCharges = turnover * exchangeSpecificRates.exchangeRate; // Exchange charges based on exchange
    const sebi = turnover * rates.sebiRate; // SEBI fees
    const gst = ((brokerage + exchangeCharges) * rates.gstRate) / 100; // GST
    const stampDuty = quantity * buyPrice * exchangeSpecificRates.stampDutyRate; // Stamp duty based on exchange

    const totalCharges = brokerage + stt + exchangeCharges + sebi + gst + stampDuty;

    // Net P&L
    const netProfitLoss = profitLoss - totalCharges;
    console.log("np:",netProfitLoss);

    setData({
      turnover,
      profitLoss,
      charges: {
        brokerage,
        stt,
        exchange: exchangeCharges,
        sebi,
        gst,
        stampDuty,
      },
      netProfitLoss,
    });
  }, [quantity, buyPrice, sellPrice, tab, exchange]);

  return (
    <div className="w-full bg-white">
      <div className="pt-24 px-5 sm:px-0">
        <WidthXL>
          <h1 className="font-poppins font-bold text-[30px] sm:text-[42px]">
            Brokerage Calculator
          </h1>

          {/* Tabs */}
          <div className="flex gap-5 my-8 mt-14">
            {['delivery', 'intraday', 'fno'].map((item) => (
              <button
                key={item}
                onClick={() => setTab(item)}
                className={`px-3 sm:px-4 py-2 border rounded-lg text-base sm:text-lg ${
                  tab === item
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                {item === 'delivery' && 'Equity - Delivery'}
                {item === 'intraday' && 'Equity - Intraday'}
                {item === 'fno' && 'F&O'}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 my-20">
            {/* Inputs */}
            <div>
              {/* Exchange Selector */}
              <div className="flex justify-between items-center mb-4">
                <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                  Stock Exchange
                </label>
                <select
                  value={exchange}
                  onChange={(e) => setExchange(e.target.value)}
                  className="px-4 py-2 border rounded"
                >
                  <option value="BSE">BSE</option>
                  <option value="NSE">NSE</option>
                </select>
              </div>

              {/* Quantity Input */}
              <div className="flex items-center justify-between mb-4">
                <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                  Quantity
                </label>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  placeholder="Enter quantity"
                />
              </div>

              {/* Buy Price Input */}
              <div className="flex items-center justify-between mb-4">
                <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                  Buy Price
                </label>
                <input
                  type="number"
                  value={buyPrice}
                  onChange={(e) => setBuyPrice(Number(e.target.value))}
                  className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  placeholder="Buy price per share"
                />
              </div>

              {/* Sell Price Input */}
              <div className="flex items-center justify-between">
                <label className="font-bold font-lato text-base sm:text-[20px] text-gray-700">
                  Sell Price
                </label>
                <input
                  type="number"
                  value={sellPrice}
                  onChange={(e) => setSellPrice(Number(e.target.value))}
                  className="w-[100px] sm:w-[200px] mt-2 px-4 py-2 border font-lato text-lg text-gray-500 border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
                  placeholder="Sell price per share"
                />
              </div>
            </div>

            {/* Outputs */}
            <div>
              <table className="w-full text-left border-collapse border border-gray-300 rounded-2xl">
                <tbody>
                  <tr>
                    <th className="border p-2 text-gray-600">Turnover</th>
                    <td className="border p-2 text-end font-bold text-gray-600">
                      ₹
                      {data.turnover.toLocaleString('en-IN', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                  </tr>
                  <tr>
                    <th className="border p-2 text-gray-600">P&L</th>
                    <td className="border p-2 text-end text-gray-600 font-bold">
                      ₹
                      {data.profitLoss.toLocaleString('en-IN', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                  </tr>
                  <tr>
                    <th className="border p-2 font-medium text-gray-500">
                      Brokerage
                    </th>
                    <td className="border p-2 text-end text-gray-500">
                      ₹
                      {data.charges.brokerage.toLocaleString('en-IN', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                  </tr>
                  <tr>
                    <th className="border p-2 font-medium text-gray-500">
                      STT
                    </th>
                    <td className="border p-2 text-end text-gray-500">
                      ₹
                      {data.charges.stt.toLocaleString('en-IN', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                  </tr>
                  <tr>
                    <th className="border p-2 font-medium text-gray-500">
                      Exchange Charges
                    </th>
                    <td className="border p-2 text-end text-gray-500">
                      ₹
                      {data.charges.exchange.toLocaleString('en-IN', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                  </tr>
                  <tr>
                    <th className="border p-2 font-medium text-gray-500">
                      SEBI Fees
                    </th>
                    <td className="border p-2 text-end text-gray-500">
                      ₹
                      {data.charges.sebi.toLocaleString('en-IN', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                  </tr>
                  <tr>
                    <th className="border p-2 font-medium text-gray-500">
                      GST
                    </th>
                    <td className="border p-2 text-end text-gray-500">
                      ₹
                      {data.charges.gst.toLocaleString('en-IN', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                  </tr>
                  <tr>
                    <th className="border p-2 font-medium text-gray-500">
                      Stamp Duty
                    </th>
                    <td className="border p-2 text-end text-gray-500">
                      ₹
                      {data.charges.stampDuty.toLocaleString('en-IN', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                  </tr>
                  <tr>
                    <th className="border p-2 text-gray-600">Net P&L</th>
                    <td className="border p-2 text-end text-gray-600 font-bold">
                      ₹
                      {data.netProfitLoss.toLocaleString('en-IN', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </WidthXL>
      </div>
    </div>
  );
}
