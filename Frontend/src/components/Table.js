import React from 'react';
import numeral from 'numeral';
import '../assets/css/Table.css';

function Table({ countries }) {
  return (
    <div className="table">
      {countries.map(({ country, cases }) => (
        <tr>
          {/* Emmet */}
          <td className="country-name">{country}</td>
          <td>
            {/* <strong>{cases}</strong> */}
            <strong className="cases-percent">{numeral(cases).format('0,0')}</strong>
          </td>
        </tr>
      ))}
    </div>
  );
}

export default Table;
