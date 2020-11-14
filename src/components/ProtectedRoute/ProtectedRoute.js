import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...props }) => {
  React.useEffect(() => {
    if (!props.logged && !localStorage.getItem('logged')) {
      props.openPopupLogin();
    }
  });

  return (
    <Route>
      {
        props.logged || localStorage.getItem('logged') ? <Component {...props} /> : <Redirect to="/" />
      }
    </Route>
  )
}

export default ProtectedRoute;
