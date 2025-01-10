import React from "react";
import { TiTick } from "react-icons/ti";

const ProgressBar = ({ currentStep }) => {
  const steps = ["Your Cart", "Address", "Payment", "Summary"];

  return (
    <div className="container mx-auto p-4 mb-5 ">
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-between w-full max-w-3xl">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              {/* Step Circle */}
              <div className="flex flex-col items-center">
                <div
                  className={`flex items-center justify-center md:h-8 md:w-8 h-5 w-5 text-xs rounded-full md:text-sm ${
                    currentStep === index
                      ? "bg-blue-600 text-white" // Current step
                      : currentStep > index
                      ? "bg-green-600 text-white" // Completed step
                      : "bg-gray-300 text-gray-500" // Incomplete step
                  }`}
                >
                  {currentStep > index ? <TiTick /> : index + 1}
                </div>
                <p
                  className={`text-sm mt-2 ${
                    currentStep >= index ? "text-black" : "text-gray-500"
                  }`}
                >
                  {step}
                </p>
              </div>

              {/* Line between steps */}
              {index < steps.length - 1 && (
                <div
                  className={`flex-grow h-1 mx-2 -mt-7 ${
                    currentStep > index ? "bg-green-600" : "bg-gray-300"
                  }`}
                ></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
