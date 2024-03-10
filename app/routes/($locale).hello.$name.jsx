import {useLoaderData} from '@remix-run/react';

export const loader = async ({params}) => {
  return {
    name: params.name,
  };
};

export default function HelloPageWithName() {
  const {name} = useLoaderData();

  return (
    <div>
      <h1>Hello {name}</h1>
    </div>
  );
}
