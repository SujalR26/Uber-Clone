import React from 'react'

const ConfirmRide = (props) => {
    return (
        <div>
            <h5 className='p-2 text-center w-[94%] absolute top-0' onClick={() => {
                props.setConfirmRidePanel(false)
            }}><i className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i></h5>
            <h3 className='text-2xl font-semibold mb-5'>Confirm your Ride</h3>

            <div className='flex gap-2 justify-between flex-col items-center'>
                <img className='h-28' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_638,w_956/v1555367349/assets/d7/3d4b80-1a5f-4a8b-ac2b-bf6c0810f050/original/Final_XL.png" alt="" />
                <div className='w-full '>
                    <div className='flex items-center gap-5 p-3 border-b-2 border-l-2'>
                        <i className="ri-map-pin-2-fill text-lg"></i>
                        <div>
                            <h3 className='text-lg font-medium'>{props.pickup}</h3>
                            {/* <p className='text-sm -mt-1 text-gray-600'></p> */}
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3 border-b-2 border-l-2'>
                        <i className="ri-stop-fill text-lg"></i>
                        <div>
                            <h3 className='text-lg font-medium'>{props.destination}</h3>
                            {/* <p className='text-sm -mt-1 text-gray-600'></p> */}
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3 border-l-2 border-b-2'>
                        <i className="ri-bank-card-2-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>₹{props.fare[ props.vehicleType ]}</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                        </div>
                    </div>
                </div>
                <button onClick={() => {
                    props.setVehicleFound(true)
                    props.setConfirmRidePanel(false)
                    
                    props.setVehiclePanel(false)
                    props.createRide()

                }} className='w-full mt-5 bg-green-600 text-white text-xl rounded-lg font-semibold p-3'>Confirm</button>
            </div>
        </div>
    )
} 

export default ConfirmRide