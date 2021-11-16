import React from 'react'
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import TitleBar from '../../../components/TitleBar'
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import AddProductDashboard from '../AddProductDashboard/AddProductDashboard';
import HomeDashboard from '../HomeDashboard/HomeDashboard';
import MakeAdminDashboard from '../MakeAdminDashboard/MakeAdminDashboard';
import ManageOrderDashboard from '../ManageOrderDashboard/ManageOrderDashboard';
import ManageProduct from '../ManageProduct/ManageProduct';
import MyOrderDashboard from '../MyOrderDashboard/MyOrderDashboard';
import OrderDashboard from '../OrderDashboard/OrderDashboard';
import PayDashboard from '../PayDashboard/PayDashboard';
import ReviewDashboard from '../ReviewDashboard/ReviewDashboard';

const Dashboard = () => {

  let { path, url } = useRouteMatch();
  const { user, admin, logout } = useAuth();

  const adminMenu = (
      user && <>
        <li className="nav-item"><Link to="/dashboard" className="nav-link">Dashboard</Link></li>
        {admin && <>
          <li className="nav-item"><Link to={`${url}/addProduct`} className="nav-link">Add A Product</Link></li>
          <li className="nav-item"><Link to={`${url}/manageProduct`} className="nav-link">Manage Products</Link></li>
          <li className="nav-item"><Link to={`${url}/manageOrder`} className="nav-link">Manage All Orders</Link></li>
          <li className="nav-item"><Link to={`${url}/makeAdmin`} className="nav-link">Make Admin</Link></li>
          </>
        }
        {!admin && <>
          <li className="nav-item"><Link to={`${url}/myOrder`} className="nav-link">My Orders</Link></li>
          <li className="nav-item"><Link to={`${url}/review`} className="nav-link">Review</Link></li>
          <li className="nav-item"><Link to={`${url}/pay`} className="nav-link">Pay</Link></li>
          </>
        }
          <li className="nav-item"><button type="button" onClick={logout} className="bg-black btn btn-link text-black text-white w-100">Logout</button></li>
    </>
  )



    return (
        <>
        <TitleBar title="Dashboard" />

        <div className="container">
            <div className="row">
              <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse my-5 py-2">
                <div className="position-sticky pt-3">
                  <ul className="nav flex-column">
                    {adminMenu}
                  </ul>
                </div>
              </nav>

            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-3">
                
                <Switch>
                    <Route exact path={path}>
                        <HomeDashboard />
                    </Route>

                    <Route path={`${path}/myOrder`}  >
                        <MyOrderDashboard />
                    </Route>

                    <Route path={`${path}/review`}  >
                        <ReviewDashboard />
                    </Route>

                    <Route path={`${path}/pay`}  >
                        <PayDashboard />
                    </Route>


                    <AdminRoute path={`${path}/addProduct`}  >
                        <AddProductDashboard />
                    </AdminRoute>

                    <AdminRoute path={`${path}/manageOrder`}  >
                        <ManageOrderDashboard />
                    </AdminRoute>

                    <AdminRoute path={`${path}/manageProduct`}  >
                        <ManageProduct />
                    </AdminRoute>

                    <AdminRoute path={`${path}/orders`}  >
                        <OrderDashboard />
                    </AdminRoute>

                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdminDashboard />
                    </Route>
                    <AdminRoute path={`${path}/addDoctor`}>
                        <HomeDashboard />
                    </AdminRoute>
                </Switch>
            </main>
            </div>
        </div>



        </>
    )
}

export default Dashboard
