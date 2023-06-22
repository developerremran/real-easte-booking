import React, { useEffect, useState } from 'react';
import TableRow from '../../COmponents/Dashboard-compo/TableRow';
import ContextShear from '../../API/ContextShear';
import { getBookings } from '../../API/booking';
import { Link } from 'react-router-dom';


const MyBooking = () => {
  const [bookings, setBookings] = useState([])
  const { user } = ContextShear()




  const fetchBookings = () => {
    getBookings(user?.email).then(data => {
      setBookings(data)
    })
  }
  useEffect(() => {
    fetchBookings()
  }, [user])

  // ________________________________

  // const payBookingData = () => {
  //   getBookingsData(user?.email).then(data => {
  //     setBookingsData(data)
  //   })
  // }
  // useEffect(() => {
  //   payBookingData()
  //   console.log(payBookingData);
  // }, [user])


  return (
    <div className='container mx-auto px-4 sm:px-8'>
      <div className='py-8'>
        <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
          <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
            <table className='min-w-full leading-normal'>
              <thead>
                <tr>
                  <th
                    scope='col'
                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                  >
                    Title
                  </th>
                  <th
                    scope='col'
                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                  >
                    Location
                  </th>
                  <th
                    scope='col'
                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                  >
                    Price
                  </th>
                  <th
                    scope='col'
                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                  >
                    From
                  </th>
                  <th
                    scope='col'
                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                  >
                    To
                  </th>
                  <th
                    scope='col'
                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {bookings &&
                  bookings.map(booking => (
                    <TableRow
                      key={booking._id}
                      booking={booking}
                      fetchBookings={fetchBookings}
                    />
                  ))}
              </tbody>
            </table>

            <div className='p-5 flex justify-end' >
              <Link to={`payment/${bookings._id}`}>
                <button  className=' bg-yellow-700 px-5 py-2 text-white rounded-md '>Pay</button>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
};

export default MyBooking;