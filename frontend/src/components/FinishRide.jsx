import React, { useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'


const FinishRide = (props) => {
    const navigate = useNavigate()      
    
    const createRide = async () => {
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_BASE_URL}/rides/create`,
                { pickup, destination, vehicleType },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                }
            );
    
            const ride = response.data;
    
            console.log('Distance (meters):', ride.distance); // Log or use the distance in meters
            setRide(ride);
        } catch (error) {
            console.error(error);
        }
    };

    async function endRide() {
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/end-ride`, {

            rideId: props.ride._id


        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        if (response.status === 200) {
            navigate('/captain-home')
        }

    }

    return (
        <div>
            <h5 className='text-center absolute w-[94%] p-2 top-0' onClick={() => {
                props.setFinishRidePanel(false)
            }}><i className="ri-arrow-down-wide-line text-3xl text-gray-300"></i></h5>
            <h3 className='text-2xl font-semibold mb-5'>Finish this Ride</h3>
            <div className='flex items-center justify-between p-4 border-2 border-yellow-400 rounded-lg mt-2'>
                <div className='flex items-center gap-3 '>
                    <img className='h-12 rounded-full object-cover w-12' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF5-3YjBcXTqKUlOAeUUtuOLKgQSma2wGG1g&s" alt="" />
                    <h2 className='text-lg font-medium'>{props.ride?.user.fullname.firstname+" "+props.ride?.user.fullname.lastname}</h2>
                </div>
                <h5 className='text-lg font-semibold'>{(props.ride?.distance / 1000).toFixed(0)} KM</h5>
            </div>
            <div className='flex mt-4 flex-col gap-2 justify-between items-center'>
                <div className='w-full '>
                    <div className='flex items-center gap-5 p-3 border-b-2 border-l-2'>
                        <i className="ri-map-pin-2-fill text-lg"></i>
                        <div>
                            <h3 className='text-lg font-medium capitalize'>{props.ride?.pickup}</h3>
                            {/* <p className='text-sm -mt-1 text-gray-600'></p> */}
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3 border-b-2 border-l-2'>
                        <i className="ri-stop-fill text-lg"></i>
                        <div>
                            <h3 className='text-lg font-medium capitalize'>{props.ride?.destination}</h3>
                            {/* <p className='text-sm -mt-1 text-gray-600'></p> */}
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3 border-l-2 border-b-2'>
                        <i className="ri-bank-card-2-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>₹{props.ride?.fare} </h3>
                            <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                        </div>
                    </div>
                </div>

                <div className='mt-10 w-full'>

                    <button
                        onClick={endRide}
                        className='w-full mt-2 flex  text-xl justify-center bg-green-600 text-white font-semibold p-3 rounded-lg'>Finish Ride</button>


                </div>
            </div>
        </div>
    )
}

export default FinishRide