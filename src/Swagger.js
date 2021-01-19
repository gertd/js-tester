import React, { useEffect } from 'react'
import SwaggerUI from 'swagger-ui'
import 'swagger-ui/dist/swagger-ui.css'

const Swagger = ({url}) => {
  useEffect(() => {
    SwaggerUI({ 
      dom_id: '#aserto-swagger-ui',
      requestInterceptor: (req) => {
        //req.mode = 'no-cors';
        //req.credentials = 'include';
        //delete req.loadSpec;
        console.log(req);
        return req;
      },
      responseInterceptor: (res) => {
        console.log(res)
        return res;
      },
      url
    });
  }, []);

  return <div id='aserto-swagger-ui' />
}

export default Swagger
