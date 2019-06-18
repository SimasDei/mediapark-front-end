import React from 'react';
import Dropdown from 'react-dropdown';
import { ReactComponent as SelectArrow } from '../../../scss/icons/select-arrow.svg';

const Table = () => {
  const space = [
    { value: '50.17', label: '50.17' },
    { value: '60.00', label: '60.00' },
    { value: '35.00', label: '35.00' },
    { value: '30.00', label: '30.00' },
  ];

  const rooms = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
  ];

  const windows = [{ value: 'Pietūs', label: 'Pietūs' }, { value: 'Rytai', label: 'Rytai' }];

  const status = [
    { value: 'Pastatyta', label: 'Pastatyta' },
    { value: 'Statoma', label: 'Statoma' },
  ];

  const data = [
    {
      discount: 5,
      houseNr: 1,
      m2s: '50.17',
      roomNr: '3',
      orentation: 'Pietūs',
      state: 'Pastatyta',
    },
    {
      discount: 5,
      houseNr: 1,
      m2s: '60.00',
      roomNr: '4',
      orentation: 'Rytai',
      state: 'Pastatyta',
    },
    {
      discount: null,
      houseNr: 2,
      m2s: '35.00',
      roomNr: '2',
      orentation: 'Pietūs',
      state: 'Pastatyta',
    },
    {
      discount: 10,
      houseNr: 1,
      m2s: '30.00',
      roomNr: '1',
      orentation: 'Pietūs',
      state: 'Statoma',
    },
    {
      discount: null,
      houseNr: 1,
      m2s: '60.00',
      roomNr: '4',
      orentation: 'Rytai',
      state: 'Pastatyta',
    },
    {
      discount: null,
      houseNr: 2,
      m2s: '35.00',
      roomNr: '2',
      orentation: 'Pietūs',
      state: 'Pastatyta',
    },
    {
      discount: null,
      houseNr: 1,
      m2s: '50.17',
      roomNr: '3',
      orentation: 'Pietūs',
      state: 'Statoma',
    },
    {
      discount: 5,
      houseNr: 1,
      m2s: '60.00',
      roomNr: '4',
      orentation: 'Rytai',
      state: 'Pastatyta',
    },
    {
      discount: 5,
      houseNr: 2,
      m2s: '35.00',
      roomNr: '2',
      orentation: 'Pietūs',
      state: 'Pastatyta',
    },
    {
      discount: 5,
      houseNr: 1,
      m2s: '50.17',
      roomNr: '3',
      orentation: 'Pietūs',
      state: 'Statoma',
    },
    {
      discount: 10,
      houseNr: 1,
      m2s: '60.00',
      roomNr: '4',
      orentation: 'Rytai',
      state: 'Statoma',
    },
    {
      discount: null,
      houseNr: 2,
      m2s: '35.00',
      roomNr: '2',
      orentation: 'Pietūs',
      state: 'Pastatyta',
    },
  ];

  return (
    <section className="table">
      <div className="table__container">
        <div className="table__filters">
          <Dropdown
            options={space}
            placeholder="Plotas"
            arrowClosed={<SelectArrow />}
            arrowOpen={<SelectArrow className="Dropdown-arrow Dropdown-arrow--open" />}
          />
          <Dropdown
            options={rooms}
            placeholder="Kambarių skaičius"
            arrowClosed={<SelectArrow />}
            arrowOpen={<SelectArrow className="Dropdown-arrow Dropdown-arrow--open" />}
          />
          <Dropdown
            options={windows}
            placeholder="Kambarių skaičius"
            arrowClosed={<SelectArrow />}
            arrowOpen={<SelectArrow className="Dropdown-arrow Dropdown-arrow--open" />}
          />
          <Dropdown
            options={status}
            placeholder="Kambarių skaičius"
            arrowClosed={<SelectArrow />}
            arrowOpen={<SelectArrow className="Dropdown-arrow Dropdown-arrow--open" />}
          />
        </div>
        <table className="table__table">
          <thead>
            <tr>
              <th>Nuolaida</th>
              <th>Namo nr.</th>
              <th>Plotas m2</th>
              <th>Kambarių skaičius</th>
              <th>Langų orientacija</th>
              <th>Baigtumas</th>
            </tr>
          </thead>
          <tbody>
            {data.map((apartment, index) => (
              <tr className={apartment.discount ? 'discounted' : null} key={index}>
                <td>
                  -{apartment.discount}
                  {apartment.discount && '%'}
                </td>
                <td>{apartment.houseNr}</td>
                <td>{apartment.m2s}</td>
                <td>{apartment.roomNr}</td>
                <td>{apartment.orentation}</td>
                <td>{apartment.state}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Table;
