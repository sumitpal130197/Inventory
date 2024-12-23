import React from "react";

function AddProduct() {
  return (
    <>
      <div class="main-content">
        <div class="page-content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12">
                <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 class="mb-sm-0 font-size-18">Add Product</h4>
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
                          className=""
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
                        </div>
                        <div class="form-group mb-3">
                          <label for="" class="sub-heading col-form-label">
                            Product Qty
                          </label>
                          <div class="input-group">
                            <input
                              type="text"
                              class="form-control"
                              aria-label="Text input with dropdown button"
                              placeholder="Product Qty"
                            />
                            <div class="input-group-append">
                              <button
                                class="btn btn-outline-secondary dropdown-toggle"
                                type="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                Ml
                              </button>
                              <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">
                                  ML
                                </a>
                                <a class="dropdown-item" href="#">
                                  L
                                </a>
                                <a class="dropdown-item" href="#">
                                  GM
                                </a>
                                <div
                                  role="separator"
                                  class="dropdown-divider"
                                ></div>
                                <a class="dropdown-item" href="#">
                                  KG
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="form-group mb-3">
                          <label for="" class="sub-heading col-form-label">
                            Units
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Units"
                          />
                        </div>
                        <div class="form-group mb-3">
                          <label for="" class="sub-heading col-form-label">
                            Price
                          </label>
                          <input
                            type="number"
                            class="form-control"
                            placeholder="Price"
                          />
                        </div>
                        <div class="form-group mb-3">
                          <label for="" class="sub-heading col-form-label">
                            Batch No.
                          </label>
                          <input
                            type="email"
                            class="form-control"
                            placeholder="Batch No."
                          />
                        </div>
                      </form>
                    </div>
                    <div class="">
                      <button type="submit" class="block-menu mt-4">
                        Add Product
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

export default AddProduct;
