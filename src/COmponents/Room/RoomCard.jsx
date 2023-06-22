import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Card from './Card';
import { getAllRooms } from '../../API/rooms';

const RoomCard = () => {
    // 1. get data load to search query 
    const [params, setParams] = useSearchParams();
    const category = params.get('category')

    // store declear save 
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
             getAllRooms()
            .then(data => {
                // console.log(data);
                if (category) {
                    const filtered = data.filter(room => room.category === category)
                    setRooms(filtered)
                } else {
                    setRooms(data)
                }
                setLoading(false)

            })
            .catch(err => console.log(err))
    }, [category])

    return (
        <div>
            {rooms && rooms.length > 0 ? (
                <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
                    {rooms.map((room, index) => (
                        <Card key={index} room={room} />
                    ))}
                </div>
            ) : (
                <div className='pt-12'>
                    <p className='flex justify-center mt-16 text-3xl '>No Rooms Available In This Category!</p>
                </div>
            )}
        </div>
    );
};

export default RoomCard;