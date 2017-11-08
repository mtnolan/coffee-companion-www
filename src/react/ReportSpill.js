// @flow
import React, { Component } from 'react';
import $ from 'jquery';

type Props = {};
type State = {};

export default class ReportSpill extends Component<Props, State> {
  _isReportingSpill: bool = false;

  closeAlert(e: Object) {

  }

  render() {

    let warning =
      <div>
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert">
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <strong>
            Error!
          </strong> Something went wrong.
        </div>
      </div>;


    return (
      <div className="reportSpill">
        {warning}
        <button
          type="button"
          className="btn btn-danger btn-lg"
          onClick={this.onClick}>
          Report a Spill!!
        </button>
      </div>
    );
  }

  onClick() {
    if (this._isReportingSpill) {
      return;
    }

    this._isReportingSpill = true;
    $.ajax({
      type: 'POST',
      contentType: 'application/json; charset=utf-8',
      url: 'https://9wsw0v1skf.execute-api.us-east-1.amazonaws.com/prod/' +
        'report-spill',
      success: function(data) {

      },
    }).fail(function() {

    });
  }
}
