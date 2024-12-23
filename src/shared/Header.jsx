import React from "react";
import logo from "../assets/images/logo.png";
import smalllogo from "../assets/images/Logo-icon.png";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header id="page-topbar">
      <div class="navbar-header">
        <div class="">
          <div class="navbar-brand-box">
            <a href="index.html" class="logo logo-light">
              <span class="logo-sm">
                <img src={smalllogo} class="sm-img" alt="" />
              </span>
              <span class="logo-lg">
                <img src={logo} alt="" width="60%" />
              </span>
            </a>
          </div>

          <button
            type="button"
            class="btn btn-sm px-3 font-size-16 header-item waves-effect sm-bars"
            id="vertical-menu-btn"
          >
            <i class="fa fa-fw fa-bars"></i>
          </button>
        </div>

        {/* <div class="d-flex">
          <div class="dropdown d-inline-block">
            <button
              type="button"
              class="btn header-item waves-effect"
              id="page-header-user-dropdown"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                class="rounded-circle header-profile-user"
                src="assets/images/users/userImg.png"
                alt="Header Avatar"
              />
              <span class="d-none d-xl-inline-block ms-1" key="t-henry">
                Henry
              </span>
              <i class="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
            </button>
            <div class="dropdown-menu dropdown-menu-end">
              <a class="dropdown-item" href="#">
                <i class="bx bx-user font-size-16 align-middle me-1"></i>
                <span key="t-profile">Profile</span>
              </a>
              <a class="dropdown-item" href="#">
                <i class="bx bx-wallet font-size-16 align-middle me-1"></i>
                <span key="t-my-wallet">My Wallet</span>
              </a>
              <a class="dropdown-item d-block" href="#">
                <span class="badge bg-success float-end">11</span>
                <i class="bx bx-wrench font-size-16 align-middle me-1"></i>
                <span key="t-settings">Settings</span>
              </a>
              <a class="dropdown-item" href="#">
                <i class="bx bx-lock-open font-size-16 align-middle me-1"></i>
                <span key="t-lock-screen">Lock screen</span>
              </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item text-danger" href="#">
                <i class="bx bx-power-off font-size-16 align-middle me-1 text-danger"></i>
                <span key="t-logout">Logout</span>
              </a>
            </div>
          </div>
        </div> */}
        <div className="">
          <button className="btn add-btn">
            <Link to="/add-product"> +Add Product</Link>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
