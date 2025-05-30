import { Spinner } from "./Spinner";
const LoadingPage = () => {
  return (
    <div
      id="loading-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50  backdrop-blur-xs"
    >
      <Spinner className="mr-3" />
      <span className="text-white text-3xl font-bold">Loading...</span>
    </div>
  );
};

export default LoadingPage;
