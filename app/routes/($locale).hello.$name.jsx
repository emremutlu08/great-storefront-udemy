import {useLoaderData} from '@remix-run/react';

export const loader = async ({params}) => {
  return {name: params.name};
};

export default function Hello() {
  const loaderData = useLoaderData();
  const {name} = loaderData;

  return (
    <div className="hello">
      <h1>Hello, {name}!</h1>
    </div>
  );
}
