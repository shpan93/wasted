import React from 'react';
import createMemoryHistory from 'react-router/lib/createMemoryHistory';
import configureStore from '../../redux/configureStore';

export default (req, res) => {
  const memoryHistory = createMemoryHistory(req.originalUrl);
  const { store, history } = configureStore(memoryHistory);

  // match({
  //   history,
  //   routes: getRoutes(store),
  //   location: req.originalUrl,
  // }, (error, redirectLocation, renderProps) => {
  //   if (redirectLocation) {
  //     res.redirect(redirectLocation.pathname + redirectLocation.search);
  //   } else if (error) {
  //     res.send(error);
  //   } else if (renderProps) {
  //     const html = ReactDOM.renderToStaticMarkup(
  //       <Html store={store} >
  //         <div>
  //         </div>
  //       </Html>,
  //     );
  //     res.status(200).type('html').send(`<!DOCTYPE html>${html}`);
  //   } else {
  //     res.status(404).send('not found');
  //   }
  // });

  res.status(200).type('html').send(`<!DOCTYPE html>
  
  <html lang="en">
        <head>
          <title>Universal React boilerplate</title>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <link rel="stylesheet" type="text/css" href="/public/js/style.css">
          <script src="http://cdn.temasys.io/skylink/skylinkjs/0.6.x/skylink.complete.min.js"></script>
        </head>
        <body>
          <main id="app" ></main>
              <script type="text/javascript" src="/public/js/default-main.js" />
          <script>
          window.ENV = '${process.env.NODE_ENV}',
            
          </script>
        </body>
      </html>
  `);
};
