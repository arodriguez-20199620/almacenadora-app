import { RouterProvider } from "react-router";
import router from "./app/routes/router";
import { Suspense } from "react";
import { ProgressSpinner } from "primereact/progressspinner";
import LoadingPage from "./shared/components/LoadingPage";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="bottom-right" />
    </>
  );
};

export default App;
