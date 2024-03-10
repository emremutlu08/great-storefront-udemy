import {json} from '@remix-run/server-runtime';

export function loader() {
  // Only use with GET requests
  return json({
    message: 'Hello from the server!',
  });
}

export function action({request}) {
  return json({
    method: request.method,
  });
}
