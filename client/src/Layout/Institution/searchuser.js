import Sidebar from "../includes/sidebar";
import Header from "../includes/header";
import Footer from "../includes/footer";
export default function Searchuser() {
  return (
    <>
      <div class="layout-wrapper layout-content-navbar">
  <div class="layout-container">
    <Sidebar />
    <div class="layout-page">
      <Header />
	  <div class="row justify-content-center my-2 container-fluid ">
                    <div class="col-md-12 stretch-card">
                        <div class="card">
                            <div class="card-body">
                                <div class="row pb-3">
                                    <div class="col-md-6">
                                        <h6>
                                            <strong>Download Users</strong>
                                        </h6>
                                    </div>
                                </div>
                                <div class="input-group justify-content-center">
                                    <div class="col pr-2">
                                        <button type="button" class="btn btn-primary">
                                            Download
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center my-2 container-fluid">
                    <div class="col-md-12 stretch-card">
                        <div class="card">
                            <div class="card-body">
                                <div class="row pb-3">
                                    <div class="col-md-6">
                                        <h6>
                                            <strong>Search User:</strong>
                                        </h6>
                                    </div>
                                </div>
                                <div class="input-group justify-content-center">
                                    <div class="form-outline form-group w-50">
                                        <input type="search" name="_search-box" id="myInput" placeholder="Search Here" 
                                            class="form-control" />
                                    </div>
                                    <div class="col pr-2">
                                        <button type="button" id="search-button" class="btn btn-primary" data-target="#user-table">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                              </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="user-table">
                    <div class="row mt-2 my-2 container-fluid">
                        <div class="col-md-12 stretch-card">
                            <div class="card rounded">
                                <div class="card-body">
                                    <div class="row pb-3">
                                        <div class="col-md-6">
                                            <h5 class="pb-2">
                                                <strong>User Details:</strong>
                                            </h5>
                                        </div>
                                    </div>
                                    <div class="row pt-2">
                                        <div class="col-md-12 stretch-card">
                                            <div class="card table-responsive">
                                                <div class="card-body row">
                                                    <table class="table table-bordered">
                                                        <thead>
                                                            <tr>
                                                                <th>
                                                                    S.No
                                                                </th>
                                                                <th>
                                                                    First Name
                                                                </th>
                                                                <th>
                                                                    Last Name
                                                                </th>
                                                                <th>
                                                                    Email
                                                                </th>
                                                                <th>
                                                                    Mobile
                                                                </th>
                                                                <th>
                                                                    Regd
                                                                </th>
                                                                <th>
                                                                    Batch Year
                                                                </th>
                                                                <th>
                                                                    Batch
                                                                </th>
                                                                <th>
                                                                    Institution Name
                                                                </th>
                                                                <th>
                                                                    View Details
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
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
