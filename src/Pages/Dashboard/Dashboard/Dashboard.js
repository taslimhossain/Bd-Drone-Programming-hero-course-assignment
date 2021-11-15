import React from 'react'
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import TitleBar from '../../../components/TitleBar'
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import HomeDashboard from '../HomeDashboard/HomeDashboard';
import MyOrderDashboard from '../MyOrderDashboard/MyOrderDashboard';
import OrderDashboard from '../OrderDashboard/OrderDashboard';
import ReviewDashboard from '../ReviewDashboard/ReviewDashboard';

const Dashboard = () => {

  let { path, url } = useRouteMatch();
  const { admin, logout } = useAuth();

  const adminMenu = (
    <>
        <li className="nav-item"><Link to="/dashboard" className="nav-link">Dashboard</Link></li>
        {admin && <>
          <li className="nav-item"><Link to="/addProduct" className="nav-link">Add A Product</Link></li>
          <li className="nav-item"><Link to="/manageProduct" className="nav-link">Manage Products</Link></li>
          <li className="nav-item"><Link to="/makeAdmin" className="nav-link">Make Admin</Link></li>
          <li className="nav-item"><Link to="/manageOrder" className="nav-link">Manage All Orders</Link></li>
          </>
        }
          <li className="nav-item"><Link to={`${url}/myOrder`} className="nav-link">My Orders</Link></li>
          <li className="nav-item"><Link to={`${url}/review`} className="nav-link">Review</Link></li>
          <li className="nav-item"><Link to={`${url}/pay`} className="nav-link">Pay</Link></li>
          <li className="nav-item"><button type="button" onClick={logout} class="btn btn-link text-black">Logout</button></li>
    </>
  )



    return (
        <>
        <TitleBar title="Dashboard" />

        <div className="container">
            <div className="row">
              <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
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

                    <AdminRoute path={`${path}/orders`}  >
                        <OrderDashboard />
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <HomeDashboard />
                    </AdminRoute>
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
