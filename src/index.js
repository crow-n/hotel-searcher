import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// import { cities, searchHotel, getFilter, getHotelDetail, getRooms } from "./request/hotel";
// async function a() {
//   const filter = await getFilter('深圳')
//   console.log(filter)

//   // const hotels = await searchHotel({
//   //   page: 0,
//   //   cityName: '深圳',
//   //   sortCode: 3,
//   //   minPrice: 200,
//   //   maxPrice: 300
//   // })
//   // console.log(hotels)

//   // const hotelDetail = await getHotelDetail(474138)
//   // console.log(hotelDetail)

//   // const rooms = await getRooms({
//   //   hotelId: 540562,
//   //   inDate: '2018-10-28',
//   //   outDate: '2018-10-29'
//   // })
//   // console.log(rooms)
// }
// a()



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

