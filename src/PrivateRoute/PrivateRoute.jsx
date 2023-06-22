import React, { Children, useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';


const PrivateRoute = ({ children }) => {
   const { user, loading } = useContext(AuthContext)
   const location = useLocation()

   if (loading) {
      return <div className=' flex relative justify-center items-center'>
               <progress className="progress w-56 absolute top-0 mt-[400px]"></progress>
            </div>

   }

   if (user) {
      return children;
   }

   return <Navigate to='/login' state={{ from: location }}></Navigate>;
};

export default PrivateRoute;