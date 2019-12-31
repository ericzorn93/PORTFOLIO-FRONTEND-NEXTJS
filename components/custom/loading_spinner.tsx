import React, { useMemo } from "react";
import RingLoader from "react-spinners/RingLoader";

interface LoadingSpinnerProps {
  isLoading: boolean;
  color?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  isLoading,
  color
}) => {
  const primaryLoadingColor = useMemo(() => {
    if (!color) {
      return "#F9D86A";
    }

    return color;
  }, [color]);

  return (
    <div>
      <RingLoader loading={isLoading} color={primaryLoadingColor} />
    </div>
  );
};

export default LoadingSpinner;
