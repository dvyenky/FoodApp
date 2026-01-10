import { useRouteError } from "react-router";

const Error = () => {
  const err_message = useRouteError();
  console.log(err_message);
  return (
    <>
      <h1>Error Found</h1>
      <h2>
        {err_message.status} - Page has {err_message.statusText}
      </h2>
    </>
  );
};

export default Error;
