import React from "react";

function Dashboard(props) {
  return (
    <>
      <div class="main-content">
        <div class="page-content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-sm-3">
                <div class="card profile-section inf0-card">
                  <div class="card-body">
                    <div class="d-flex align-items-center mb-3">
                      <div class="me-3">
                        <span class="info-card">
                          <i class="fa-solid fa-square-up-right"></i>
                        </span>
                      </div>
                    </div>
                    <div class="card-info-amount mt-4 d-flex justify-content-between">
                      <h5 class="card-info-text">Total Sells</h5>

                      <h4>400</h4>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-sm-3">
                <div class="card profile-section inf0-card">
                  <div class="card-body">
                    <div class="d-flex align-items-center mb-3">
                      <div class="me-3">
                        <span class="info-card">
                          <i class="fa-solid fa-file"></i>
                        </span>
                      </div>
                    </div>
                    <div class="card-info-amount mt-4 d-flex justify-content-between">
                      <h5 class="card-info-text">Total Invoice</h5>
                      <h4>450</h4>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-sm-3">
                <div class="card profile-section inf0-card">
                  <div class="card-body">
                    <div class="d-flex align-items-center mb-3">
                      <div class="me-3">
                        <span class="info-card">
                          <i class="fa-solid fa-square-up-right"></i>
                        </span>
                      </div>
                    </div>
                    <div class="card-info-amount mt-4 d-flex justify-content-between">
                      <h5 class="card-info-text">Total </h5>

                      <h4>987</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="card profile-section inf0-card">
                  <div class="card-body">
                    <div class="d-flex align-items-center mb-3">
                      <div class="me-3">
                        <span class="info-card">
                          <i class="fa-solid fa-square-up-right"></i>
                        </span>
                      </div>
                    </div>
                    <div class="card-info-amount mt-4 d-flex justify-content-between">
                      <h5 class="card-info-text">Total Referrals</h5>

                      <h4>809</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="modal fade transaction-detailModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="transaction-detailModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="transaction-detailModalLabel">
                  Order Details
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <p class="mb-2">
                  Product id: <span class="text-primary">#SK2540</span>
                </p>
                <p class="mb-4">
                  Billing Name: <span class="text-primary">Neal Matthews</span>
                </p>

                <div class="table-responsive">
                  <table class="table align-middle table-nowrap">
                    <thead>
                      <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">
                          <div>
                            <img
                              src="assets/images/product/img-7.png"
                              alt=""
                              class="avatar-sm"
                            />
                          </div>
                        </th>
                        <td>
                          <div>
                            <h5 class="text-truncate font-size-14">
                              Wireless Headphone (Black)
                            </h5>
                            <p class="text-muted mb-0">$ 225 x 1</p>
                          </div>
                        </td>
                        <td>$ 255</td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div>
                            <img
                              src="assets/images/product/img-4.png"
                              alt=""
                              class="avatar-sm"
                            />
                          </div>
                        </th>
                        <td>
                          <div>
                            <h5 class="text-truncate font-size-14">
                              Phone patterned cases
                            </h5>
                            <p class="text-muted mb-0">$ 145 x 1</p>
                          </div>
                        </td>
                        <td>$ 145</td>
                      </tr>
                      <tr>
                        <td colspan="2">
                          <h6 class="m-0 text-right">Sub Total:</h6>
                        </td>
                        <td>$ 400</td>
                      </tr>
                      <tr>
                        <td colspan="2">
                          <h6 class="m-0 text-right">Shipping:</h6>
                        </td>
                        <td>Free</td>
                      </tr>
                      <tr>
                        <td colspan="2">
                          <h6 class="m-0 text-right">Total:</h6>
                        </td>
                        <td>$ 400</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          id="otpModal"
          tabindex="-1"
          aria-labelledby="subscribeModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header border-bottom-0">
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div class="text-center mb-4">
                  <div class="avatar-md mx-auto mb-4">
                    <div class="avatar-title bg-light rounded-circle text-primary1 h1">
                      <i class="mdi mdi-email-open"></i>
                    </div>
                  </div>
                  <div class="row justify-content-center">
                    <div class="col-xl-10">
                      <h4 class="text-primary1">Enter OTP !</h4>
                      <p class="text-muted font-size-14 mb-4">
                        OTP has been sent on your email.Please enter OTP to
                        verify and update profile
                      </p>
                      <div class="input-group bg-light rounded">
                        <input
                          type="email"
                          class="form-control bg-transparent border-0"
                          placeholder="Enter OTP here"
                          aria-label="Recipient's username"
                          aria-describedby="button-addon2"
                        />
                        <button
                          class="btn btn-primary"
                          type="button"
                          id="button-addon2"
                          style={{ backgroundColor: "#16a3e8" }}
                        >
                          <i class="bx bxs-paper-plane"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
