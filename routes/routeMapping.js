import Register from '../components/pages/Register/Register';
import Login from '../components/pages/Login/Login';

const routes = {
  register: {
    metadata: { component: Register, props: { key: 'register' } },
  },
  login: {
    metadata: { component: Login, props: { key: 'register' } },
  },
};

export function getRouteData(route) {
  if (!route) {
    return routes.login;
  }

  return routes[route];
};

export default function navigate(navigator, route, animation) {
  if (navigator && route) {
    const routeData = getRouteData(route);
    if (routeData) {
      navigator.pushPage(routeData.metadata, { animation });
    }
  } else {
    console.error('No navigator or route');
  }
};
