import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ConfirmRidePopUp = (props) => {
    const [ otp, setOtp ] = useState('')
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

    const submitHander = async (e) => {
        e.preventDefault()

        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/start-ride`, {
            params: {
                rideId: props.ride._id,
                otp: otp
            },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        if (response.status === 200) {
            props.setConfirmRidePopupPanel(false)
            props.setRidePopupPanel(false)
            navigate('/captain-riding', { state: { ride: props.ride } })
        }


    }
    return (
        <div>
            <h5 className='p-2 text-center w-[94%] absolute top-0' onClick={() => {
                props.setConfirmRidePopupPanel(false)
                props.setRidePopupPanel(false)
            }}><i className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i></h5>
            <h3 className='text-2xl font-semibold mb-5'>Confirm this ride to Start</h3>
            <div className='flex items-center justify-between p-3 border-2 border-yellow-400 rounded-lg mt-2'>
                <div className='flex items-center gap-3 '>
                    <img className='h-12 rounded-full object-cover w-12' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF5-3YjBcXTqKUlOAeUUtuOLKgQSma2wGG1g&s" alt="" />
                    <h2 className='text-lg font-medium capitalize'>{props.ride?.user.fullname.firstname+" "+props.ride?.user.fullname.lastname}</h2>
                </div>
                <h5 className='text-lg font-semibold'>{(props.ride?.distance / 1000).toFixed(0)} KM</h5>
            </div>
            <div className='flex gap-2 justify-between flex-col items-center mt-4'>
                <div className='w-full'>
                    <div className='flex items-center gap-5 p-3 border-b-2 border-l-2'>
                        <i className="ri-map-pin-2-fill text-lg"></i>
                        <div>
                            <h3 className='text-lg font-medium'>{props.ride?.pickup}</h3>
                            {/* <p className='text-sm -mt-1 text-gray-600'></p> */}
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3 border-b-2 border-l-2'>
                        <i className="ri-stop-fill text-lg"></i>
                        <div>
                            <h3 className='text-lg font-medium'>{props.ride?.destination}</h3>
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

                <div className='mt-6 w-full'>
                    <form onSubmit={submitHander}>
                        <input value={otp} onChange={(e) => setOtp(e.target.value)} type="text" className='bg-[#eee] px-6 py-4 font-mono text-lg rounded-lg w-full mt-3' placeholder='Enter OTP' />

                        <button className='w-full flex justify-center bg-green-600 text-white text-xl rounded-lg font-semibold p-3 mt-2'>Confirm</button>
                        <button onClick={() => {
                            props.setConfirmRidePopupPanel(false)
                            props.setRidePopupPanel(false)

                        }} className='w-full  bg-red-600 mt-2 text-white text-xl rounded-lg font-semibold p-3'>Cancel</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default ConfirmRidePopUp