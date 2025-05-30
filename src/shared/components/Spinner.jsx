import { LoaderCircle, Circle } from "lucide-react";

export const Spinner = ({
  size = 40,
  color = "text-purple-500",
  bgColor = "text-purple-300",
  className = "",
}) => {
  return (
    <div
      className={`flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <Circle
        strokeWidth={3}
        className={`absolute ${bgColor}`}
        style={{ width: size * 0.9, height: size * 0.9 }}
      />
      <LoaderCircle
        strokeWidth={3}
        className={`animate-[spin_0.5s_linear_infinite]  font-bold ${color}`}
        style={{ width: size, height: size }}
      />
    </div>
  );
};
