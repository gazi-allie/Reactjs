import './ItemDate.css';
import React from 'react';
const ItemDate = (props) => {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <div className="pro-date">
      <div className="pro-month">{month}</div>
      <div className="pro-year">{year}</div>
      <div className="pro-day">{day}</div>
    </div>
  );
};
export default ItemDate;
