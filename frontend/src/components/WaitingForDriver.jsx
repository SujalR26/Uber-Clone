import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>
      
      <h5 className='p-2 text-center w-[94%] absolute top-0' onClick={() => {
        props.setWaitingForDriver(false)
      }}><i className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i></h5>
      <h2 className='text-xl font-semibold text-center'>Captain on the way...</h2>
      <div className='flex items-center justify-between'>
        <img className='h-16' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_638,w_956/v1555367349/assets/d7/3d4b80-1a5f-4a8b-ac2b-bf6c0810f050/original/Final_XL.png" alt="" />
        <div className='text-right'>
          <h2 className='text-lg font-medium capitalize'>{props.ride?.captain.fullname.firstname}</h2>
          <h4 className='text-xl font-semibold -mt-1 -mb-1 uppercase'>{props.ride?.captain.vehicle.plate}</h4>
          <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
          <h1 className='text-lg font-semibold'>OTP - {props.ride?.otp} </h1>
        </div>
      </div>

      <div className='flex gap-2 justify-between flex-col items-center'>
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
      </div>
    </div>
  )
}

export default WaitingForDriver