import React from 'react'
import VehicleNav from './VehicleNav'

const DeleteVehicles = () => {
  return (
    <div>
        <VehicleNav/>
         <div style={{ backgroundColor: '#FAF0E6', minHeight: '100vh', paddingBottom: '30px' }}>
         <div className="bg-light p-4 rounded shadow">
        <h2 style={{ color: "green", textAlign: "center" }}>DELETE VEHICLE</h2>
        <div className="container">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                   <div className="row">
                    <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="label form-control" >Brand </div>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-12 d-flex justify-content-center mt-3">
                        <button className="btn btn-danger" >DELETE</button>
                    </div>
                   </div>

                </div>
            </div>
        </div>
    </div>
       </div>
    </div>
  )
}

export default DeleteVehicles