import React from 'react'
import VehicleNav from './VehicleNav'

const AddVehicle = () => {
  return (
    <div>
        <VehicleNav/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <div className="label form-label">Name</div>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                              <div className="label form-label">Brand</div>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                              <div className="label form-label">Fuel type</div>
                            <input type="text" className="form-control" />
                        </div>
                         <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                              <div className="label form-label">Registration number</div>
                            <input type="text" className="form-control" />
                        </div>
                       
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                              <div className="label form-label">Manufacturing date</div>
                            <input type="date" className="form-control" />
                        </div>
                       
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <div className="label form-label">price</div>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <div className="label form-label">Image Upload</div>
                             <input type="file" className="form-control" accept="image/*" />
                        </div>

                       
                         

                        <div className="col-12 d-flex justify-content-center mt-3">
                         <button className="btn btn-success">SUBMIT</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default AddVehicle