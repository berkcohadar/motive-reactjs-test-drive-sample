import React from "react";

export const Confirmation = ({ info }) => {
  return (
    <>
      {info ? (
          <div className="test-drive-confirmation-page">
            <h5>Appointment Details</h5>
            <div className="test-drive-confirmation-page-labels">
              <p>
                <strong>Name: </strong>
              </p>
              <p>{info.firstName + " " + info.lastName}</p>
            </div>
            <div className="test-drive-confirmation-page-labels">
              <p>
                <strong>Email: </strong>
              </p>
              <p>{info.email}</p>
            </div>
            <div className="test-drive-confirmation-page-labels">
              <p>
                <strong>Phone: </strong>
              </p>
              <p>{info.phone}</p>
            </div>
            <div className="test-drive-confirmation-page-labels">
              <p>
                <strong>Date: </strong>
              </p>
              <p>{info.formattedDate + " " + info.selectedTime}</p>
            </div>
          </div>
      ) : null}
    </>
  );
};
