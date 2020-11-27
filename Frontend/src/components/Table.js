import React from 'react';
import numeral from 'numeral';

function Table({ countries }) {
  return (
    <div className="app_left-top-table">
      {countries.map(({ country, cases }) => (
        <tr>
          <td>
            <strong className="country-name">{country}</strong>
          </td>
          <td>
            {/* <strong>{cases}</strong> */}
            <strong className="cases-percent">
              {numeral(cases).format('0,0')}
            </strong>
          </td>
        </tr>
      ))}
    </div>
  );
}

export default Table;
