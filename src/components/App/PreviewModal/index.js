import React, { useState, useEffect } from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import "./preview__modal.css";

const PreviewModal = ({ activeModal, onToggleModal, activeData }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    onToggleModal(!modal);
    setModal(!modal);
  };

  useEffect(() => {
    setModal(activeModal);
  }, [activeModal]);

  useEffect(() => {
    console.log(activeData);
  }, [activeData]);

  const dateToLocalString = (date) => {
    var d = new Date(date);
    return d.toLocaleString();
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} className="modal-xl">
        <ModalBody>
          <div className="container-fluid px-0">
            <div className="row">
              <div className="col-8">
                <img
                  src={activeData[0].urls["small"]}
                  alt="sample"
                  className="img-responsive w-100"
                />
              </div>
              <div className="col-4">
                <h5 className="text-capitalize">
                  {activeData[0].description
                    ? activeData[0].description
                    : activeData[0].alt_description}
                </h5>
                <small className="text-muted">
                  {dateToLocalString(activeData[0].created_at)}
                </small>
                <hr />
                <div className="d-flex justify-content-between mt-1">
                  <div className="likes__holder">
                    <i className="fa fa-heart" aria-hidden="true"></i>{" "}
                    {activeData[0].likes}
                  </div>
                  <div className="views__holder">
                    <i className="fa fa-eye" aria-hidden="true"></i>{" "}
                    {activeData[0].views ? activeData[0].views : 0}
                  </div>
                  <div className="download__holder">
                    <i className="fa fa-download" aria-hidden="true"></i>{" "}
                    {activeData[0].downloads ? activeData[0].downloads : 0}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default React.memo(PreviewModal);
