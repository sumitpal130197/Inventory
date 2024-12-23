import React from "react";

function GenerateInvoice() {
  return (
    <>
      <div class="main-content">
        <div class="page-content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12">
                <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 class="mb-sm-0 font-size-18">Generate Invoice</h4>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-12">
                <div class="card profile-section">
                  <div class="card-body">
                    <div class="">
                      <form>
                        <div
                          className="d-flex"
                          style={{ justifyContent: "space-between" }}
                        >
                          <div class="form-group mb-3">
                            <label class="sub-heading col-form-label">
                              Product Name
                            </label>
                            <br />
                            <select class="form-select">
                              <option>Select</option>
                              <option>Tirrent Booster</option>
                              <option>Tirrent Fuel Conditioner</option>
                              <option>Tirrent TG-10</option>
                              <option>
                                TIRRENT EP-2 Lithium Complex Grease
                              </option>
                            </select>
                          </div>
                          <div class="form-group mb-3">
                            <label class="sub-heading col-form-label">
                              Product Qyt
                            </label>
                            <br />
                            <select class="form-select">
                              <option>Select</option>
                              <option>50ml</option>
                              <option>250ml</option>
                              <option>4kg</option>
                              <option>19kg</option>
                            </select>
                          </div>
                        </div>
                        <div class="form-group mb-3">
                          <label for="" class="sub-heading col-form-label">
                            Buyer Name
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Id"
                          />
                        </div>
                        <div class="form-group mb-3">
                          <label for="" class="sub-heading col-form-label">
                            Buyer Address
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Buyer Address"
                          />
                        </div>
                        <div class="form-group mb-3">
                          <label for="" class="sub-heading col-form-label">
                            Phone Number
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Phone Number"
                          />
                        </div>
                        <div class="form-group mb-3">
                          <label for="" class="sub-heading col-form-label">
                            Email Id
                          </label>
                          <input
                            type="number"
                            class="form-control"
                            placeholder="Email Id"
                          />
                        </div>
                       
                      

                        <div class="form-group mb-3">
                          <label for="" class="sub-heading col-form-label">
                            GSTN
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="GSTN"
                          />
                        </div>
                        <div class="form-group mb-3">
                          <label for="" class="sub-heading col-form-label">
                            Units
                          </label>
                          <input
                            type="email"
                            class="form-control"
                            placeholder="Units"
                          />
                        </div>
                        <div class="form-group mb-3">
                          <label for="" class="sub-heading col-form-label">
                            IGST%
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="IGST"
                          />
                        </div>
                        <div class="form-group mb-3">
                          <label for="" class="sub-heading col-form-label">
                            City
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="City"
                          />
                        </div>
                        <div class="form-group mb-3">
                          <label for="" class="sub-heading col-form-label">
                            Rate
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Rate"
                          />
                        </div>
                        <div class="form-group mb-3">
                          <label for="" class="sub-heading col-form-label">
                            Amount
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Amount"
                          />
                        </div>
                      </form>
                    </div>
                    <div class="">
                      <button type="submit" class="block-menu mt-4">
                        Generate nvoice
                      </button>
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

export default GenerateInvoice;
