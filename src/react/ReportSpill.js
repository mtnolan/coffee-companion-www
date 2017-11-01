import React, { Component } from 'react';
import $ from 'jquery';

type Props = {};
type State = {};

export default class ReportSpill extends Component<Props, State> {
  render() {
    return (
      <div className="reportSpill">
        <button
          type="button"
          className="btn btn-danger btn-lg"
          onClick={this.onClick}>
          Report a Spill!
        </button>
      </div>
    );
  }

  onClick() {
    $.ajax({
      type: 'POST',
      contentType: "application/json; charset=utf-8",
      url: "https://9wsw0v1skf.execute-api.us-east-1.amazonaws.com/prod/report-spill"
    });
  }
}
