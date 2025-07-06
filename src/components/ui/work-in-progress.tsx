import React from "react";

interface WorkInProgressProps {
  title: string;
}

const WorkInProgress: React.FC<WorkInProgressProps> = ({ title }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <div className="text-6xl mb-4">🚧</div>
      <h1 className="text-3xl font-bold mb-2">{title}'s Page is a work in progress</h1>
      <p className="text-lg text-gray-500">We're working hard to bring this page to life. Stay tuned!</p>
    </div>
  );
};

export default WorkInProgress;
