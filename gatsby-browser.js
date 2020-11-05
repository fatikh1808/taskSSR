import React from 'react';
import NotFoundPage from './src/pages/404';

export { wrapRootElement } from "./src/utils/rootWrapper"

export const onRouteUpdate = ({ location, prevLocation  }) => {
  console.log("new pathname", location.pathname)
  console.log("old pathname", prevLocation ? prevLocation.pathname : null)
}

const wrapPageElement = ({ element, props }) => {
  return <NotFoundPage {...props}>{element}</NotFoundPage>
}

export default wrapPageElement;