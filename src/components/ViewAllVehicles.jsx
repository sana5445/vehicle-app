import React from 'react';
import VehicleNav from './VehicleNav';

const ViewAllVehicles = () => {
  return (
    <div>
        <VehicleNav/>
         <div style={{ backgroundColor: '#e4c4a4ff', minHeight: '100vh', paddingBottom: '30px' }}>
      <div className="container mt-4">
        <h2 className="text-center mb-4" style={{ color: "green" }}>ALL VEHICLES</h2>
        <div className="row">
          <div className="col-12">
            <table className="table table-bordered table-striped">
              <thead className="table-dark">
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Brand</th>
                  <th>Fuel Type</th>
                  <th>Registration No</th>
                  <th>Manufacturing Date</th>
                  <th>Price</th>
                  <th>Image</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Swift</td>
                  <td>Maruti</td>
                  <td>Petrol</td>
                  <td>KL-07-AB-1234</td>
                  <td>2022-05-01</td>
                  <td>₹6,50,000</td>
                  <td><img src="https://up.yimg.com/ib/th/id/OIP.FYBSF024w9lXQEyk6ma8KgHaD4?pid=Api&rs=1&c=1&qlt=95&w=181&h=94" alt="Swift" /></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Creta</td>
                  <td>Hyundai</td>
                  <td>Diesel</td>
                  <td>TN-10-BF-5689</td>
                  <td>2023-01-15</td>
                  <td>₹11,20,000</td>
                  <td><img src="https://up.yimg.com/ib/th/id/OIP.5eqW41pAwUFSC1m3J-CLMAHaFj?pid=Api&rs=1&c=1&qlt=95&w=144&h=108" alt="Creta" /></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>City</td>
                  <td>Honda</td>
                  <td>Petrol</td>
                  <td>DL-4C-AH-9090</td>
                  <td>2021-03-12</td>
                  <td>₹11,00,000</td>
                  <td><img src="https://up.yimg.com/ib/th/id/OIP.Wfb1iSyh3MJjh2MCSQQEGAHaEK?pid=Api&rs=1&c=1&qlt=95&w=207&h=116" alt="City" /></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Altroz</td>
                  <td>Tata</td>
                  <td>Petrol</td>
                  <td>UP-32-QW-3344</td>
                  <td>2021-07-07</td>
                  <td>₹6,75,000</td>
                  <td><img src="https://up.yimg.com/ib/th/id/OIP.-ERykr8UWLYcXr80r8rIlwHaEK?pid=Api&rs=1&c=1&qlt=95&w=212&h=119" alt="Altroz" /></td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Venue</td>
                  <td>Hyundai</td>
                  <td>Diesel</td>
                  <td>MH-12-ZZ-4567</td>
                  <td>2020-12-10</td>
                  <td>₹10,50,000</td>
                  <td><img src="https://tse3.mm.bing.net/th/id/OIP.BWVbFT6BgkSPORhdR1h--AHaEK?pid=Api&P=0&h=180" alt="Venue" /></td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>XUV700</td>
                  <td>Mahindra</td>
                  <td>Diesel</td>
                  <td>GJ-01-XR-1122</td>
                  <td>2023-06-30</td>
                  <td>₹18,90,000</td>
                  <td><img src="https://tse3.mm.bing.net/th/id/OIP.1-Jm0LOOUS5npjcRVQOgigHaE6?pid=Api&P=0&h=180" alt="XUV700" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ViewAllVehicles;
