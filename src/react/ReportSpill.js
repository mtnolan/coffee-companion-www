// @flow
import React, { Component } from 'react';
import $ from 'jquery';
import {Modal, Button} from 'react-bootstrap';
import LoaderButton from 'react-bootstrap-button-loader';

type Props = {};
type State = {
  showModal: boolean,
  isReportingSpill: boolean,
};

export default class ReportSpill extends Component<Props, State> {
  _isReportingSpill: bool = false;

  constructor() {
    super();
    this.state = {
      showModal: false,
      isReportingSpill: false,
    };
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  handleShowModal() {
    this.setState({ showModal: true });
  }

  render() {
    let warning =
      <div>
        <Modal
          show={this.state.showModal}
          onHide={this.handleCloseModal.bind(this)}>
          <Modal.Header>
            <Modal.Title>The spill has been reported.  Thank You!</Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Button onClick={this.handleCloseModal.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>;

    return (
      <div>
        {warning}
        <div className="reportSpill">
          <LoaderButton
            type="button"
            className="btn btn-danger btn-lg"
            data-target="#exampleModal"
            data-toggle="modal"
            onClick={this.onClick.bind(this)}
            loading={this.state.isReportingSpill}>
            Report a Spill
          </LoaderButton>
        </div>
      </div>
    );
  }

  onClick() {
    if (this._isReportingSpill) {
      return;
    }

    this._isReportingSpill = true;
    this.setState({isReportingSpill: true});
    $.ajax({
      type: 'POST',
      context: this,
      contentType: 'application/json; charset=utf-8',
      url: 'https://9wsw0v1skf.execute-api.us-east-1.amazonaws.com/prod/' +
        'report-spill',
      success: function(data) {
        this.handleShowModal();
        this._isReportingSpill = false;
        this.setState({isReportingSpill: false});
      },
    }).fail(function() {
      this.setState({isReportingSpill: false});
    });
  }
}
