import React from 'react'

const VehicleNav = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Vehicle Inventory</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Add Vehicle</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Search Vehicle</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Delete Vehicle</a>
        </li>
               <li class="nav-item">
          <a class="nav-link" href="#">View All Vehicle</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default VehicleNav