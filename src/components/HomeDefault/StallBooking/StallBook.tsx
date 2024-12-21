"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Link from "next/link"; // Import Link for navigation

const StallBooking: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<string>("");

  const handleShow = (image: string) => {
    setModalImage(image);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <div className="container my-5">
      <div className="text-center" >
        <h2 className="mb-4"> EXPO Rush   
          <br/> Book your stall now!</h2>
        <div className="row justify-content-center">

          {/* Hall-A Link to Another Page */}
          <div className="col-md-4 d-flex flex-column align-items-center">
            <Link href="/pricing" passHref>
              <Button variant="primary" className="mb-2">
                View Stalls in Hall-A <i className="icofont-double-right"></i>
              </Button>
            </Link>
          </div>

          {/* Hall-B Button triggers modal */}
          <div className="col-md-4 d-flex flex-column align-items-center">
          <Link href="/pricing/2" passHref>
              <Button variant="primary" className="mb-2">
                View Stalls in Hall-B <i className="icofont-double-right"></i>
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Modal for Hall-B */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Stall Layout</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <Image src={modalImage} alt="Stall Layout" className="img-fluid" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default StallBooking;
