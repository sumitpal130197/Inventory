import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div class="vertical-menu">
        <div data-simplebar class="h-100">
          <div id="sidebar-menu">
            <ul
              class="metismenu list-unstyled pl-0"
              id="side-menu"
              style={{ paddingLeft: "0" }}
            >
              <li class="menu-title" key="t-menu">
                Menu
              </li>

              <li>
                <Link to="/" class="menu-card waves-effect mm-active">
                  <i class="fa fa-home"></i>
                  <span key="t-dashboards">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link to="/invenroty" class="menu-card waves-effect">
                  <i class="fa fa-file"></i>
                  <span key="t-contacts">Inventorys</span>
                </Link>
              </li>
              <li>
                <Link to="/generate-invoice" class="menu-card waves-effect">
                  <i class="fa fa-file"></i>
                  <span key="t-contacts">Generate Invoice</span>
                </Link>
              </li>
              {/* <a class="metismenu1">
                <button
                  type="button"
                  class="btn1 btn-primary btn-sm btn-rounded waves-effect waves-light menu-card"
                  data-bs-toggle="modal"
                  data-bs-target="#otpModal"
                >
                  OTP Pop Up
                </button>
              </a> */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
