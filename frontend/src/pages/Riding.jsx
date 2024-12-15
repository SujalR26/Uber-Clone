import React from 'react'
import { Link, useLocation } from 'react-router-dom' 
import { useEffect, useContext } from 'react'
import { SocketContext } from '../context/SocketContext'
import { useNavigate } from 'react-router-dom'
import LiveTracking from '../components/LiveTracking'

const Riding = () => {
    const location = useLocation()
    const { ride } = location.state || {} 
    const { socket } = useContext(SocketContext)
    const navigate = useNavigate()

    socket.on("ride-ended", () => {
        navigate('/home')
    })


    return (
        <div className='h-screen'>
            <Link to='/home' className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                <i className="text-lg font-medium ri-home-5-line"></i>
            </Link>
            <div className='h-1/2'>
                <LiveTracking />

            </div>
            <div className='h-1/2 p-4'>
            <h2 className='text-xl text-center font-semibold mb-2'>Enjoy your Ride...!!!</h2>
                <div className='flex items-center justify-between'>
                    
                    <img className='h-16' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_638,w_956/v1555367349/assets/d7/3d4b80-1a5f-4a8b-ac2b-bf6c0810f050/original/Final_XL.png" alt="" />
                    <div className='text-right'>
                        <h2 className='text-lg font-medium capitalize'>{ride?.captain.fullname.firstname}</h2>
                        <h4 className='text-xl font-semibold -mt-1 -mb-1 uppercase'>{ride?.captain.vehicle.plate}</h4>
                        <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>

                    </div>
                </div>

                <div className='flex flex-col gap-2 justify-between items-center'>
                    <div className='w-full'>

                        <div className='flex items-center gap-5 p-3 border-b-2border-l-2'>
                            <i className="ri-stop-fill text-lg"></i>
                            <div>
                                <h3 className='text-lg font-medium capitalize'>{ride?.destination}</h3>
                                <p className='text-sm -mt-1 text-gray-600'></p>
                            </div>
                        </div>
                        <div className='flex items-center gap-5 p-3 border-l-2border-b-2'>
                            <i className="ri-bank-card-2-fill"></i>
                            <div>
                                <h3 className='text-lg font-medium'>₹{ride?.fare} </h3>
                                <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className='w-full mt-5 bg-green-600 text-white text-xl rounded-lg font-semibold p-3'>Make a Payment</button>
            </div>
        </div>
    )
}

export default Riding