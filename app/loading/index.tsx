import { useState } from "react";
import { RingLoader } from "react-spinners";
import { Colors } from "../constants";

const LoadingPage = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="flex justify-center items-center h-screen">
      <RingLoader
        color={`${Colors.darker_blue}`}
        loading={loading}
        size={150}
      />
    </div>
  );
};

export default LoadingPage;
