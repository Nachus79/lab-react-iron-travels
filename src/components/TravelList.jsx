import React from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
  return (
    <div>
      <h1>Travel Plans</h1>
      <div className="travel-list">
        {travelPlansData.map((plan) => (
          <div key={plan.id} className="travel-card">
            <img
              src={plan.image}
              alt={plan.destination}
              className="travel-image"
            />
            <div className="travel-info">
              <h3>
                <em>{plan.destination}</em> ({plan.days} Days)
              </h3>
              <p>
                <em>{plan.description}</em>
              </p>
              <p>
                <strong>Price:</strong> {plan.totalCost}€
              </p>

              <div className="labels">
                {plan.totalCost <= 350 && (
                  <span className="label label-deal">Great Deal</span>
                )}
                {plan.totalCost >= 1500 && (
                  <span className="label label-premium">Premium</span>
                )}
                {plan.allInclusive && (
                  <span className="label label-inclusive">All Inclusive</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TravelList;


