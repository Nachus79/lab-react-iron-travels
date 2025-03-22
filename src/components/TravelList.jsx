import React from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
  return (
    <div>
      <div className="travel-list">
        {travelPlansData.map((plan) => (
          <div key={plan.id} className="travel-card">
            <img src={plan.image} alt={plan.destination} className="travel-image" />
            <div className="travel-info">
              <h3>{plan.destination} ({plan.days} Days)</h3>
              <p><em>{plan.description}</em></p>
              <p><b>Price:</b> {plan.totalCost}€</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TravelList;

