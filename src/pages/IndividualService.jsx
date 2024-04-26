import React from "react";
import { useLocation } from "react-router-dom";

const IndividualService = () => {
  const location = useLocation();
  const { state } = location;

  console.log(state);

  // Function to render service details based on selected service
  const renderServiceDetails = () => {
    switch (state.service) {
      case "Reamps & Tuning":
        return (
          <div>
            <h2>Reamps & Tuning</h2>
            <p>
              Enhance your vehicle's performance with our professional remapping
              and tuning services.
            </p>
            {/* Add more detailed information about the service */}
          </div>
        );
      case "Stage 1 Reamps":
        return (
          <div>
            <h2>Stage 1 Reamps</h2>
            <p>
              Optimize your vehicle's power and torque output with our Stage 1
              remapping solutions.
            </p>
            {/* Add more detailed information about the service */}
          </div>
        );
      case "EGR Deletes":
        return (
          <div>
            <h2>EGR Deletes</h2>
            <p>
              Improve your vehicle's performance and reliability by eliminating
              the EGR system.
            </p>
            {/* Add more detailed information about the service */}
          </div>
        );
      case "DPF Deletes":
        return (
          <div>
            <h2>DPF Deletes</h2>
            <p>
              Increase your vehicle's efficiency and responsiveness by removing
              the DPF system.
            </p>
            {/* Add more detailed information about the service */}
          </div>
        );
      case "AdBlue Delete / Removal":
        return (
          <div>
            <h2>AdBlue Delete / Removal</h2>
            <p>
              Eliminate AdBlue-related issues and optimize performance with our
              AdBlue delete services.
            </p>
            {/* Add more detailed information about the service */}
          </div>
        );
      case "VAG Remapping":
        return (
          <div>
            <h2>VAG Remapping</h2>
            <p>
              Unlock the full potential of your vehicle with our VAG remapping
              services.
            </p>
            {/* Add more detailed information about the service */}
          </div>
        );
      case "Gearbox Remapping":
        return (
          <div>
            <h2>Gearbox Remapping</h2>
            <p>
              Improve the performance and efficiency of your vehicle with our
              gearbox remapping solutions.
            </p>
            {/* Add more detailed information about the service */}
          </div>
        );
      case "Precision Performance Package":
        return (
          <div>
            <h2>Precision Performance Package</h2>
            <p>
              Experience ultimate performance and reliability with our precision
              performance packages.
            </p>
            {/* Add more detailed information about the service */}
          </div>
        );
      default:
        return <div>Service details not found</div>;
    }
  };

  return <div>{renderServiceDetails()}</div>;
};

export default IndividualService;
