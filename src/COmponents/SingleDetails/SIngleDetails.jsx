
import { useLoaderData } from 'react-router-dom'
import HeaderDT from './HeaderDT'
import RoomInfo from './ROomInfo'
import RoomReservation from './RoomReservation'


const SIngleDetails = () => {
  const roomData = useLoaderData()
  console.log(roomData);
 
  return (
    <div className='container mx-auto'>
      <div className='max-w-screen-lg mx-auto '>
        <div className='flex flex-col gap-6'>
          <HeaderDT />
          <div className='grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6'>
            <RoomInfo roomData={roomData} />
            <div className='mb-10 md:col-span-3 order-first md:order-last'>
              <RoomReservation roomData={roomData}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SIngleDetails
