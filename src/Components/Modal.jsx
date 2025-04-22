import React from "react";
import { Link } from "react-router-dom";

const OPDTicket = ({ openModal }) => {
    return (
        <div>
            <h1>OPD Ticket</h1>
            {/* Button or Link that triggers the modal */}
            <Link to="/opd-ticket" onClick={openModal}>
                Open Modal for OPD Ticket
            </Link>
        </div>
    );
};

export default OPDTicket;
