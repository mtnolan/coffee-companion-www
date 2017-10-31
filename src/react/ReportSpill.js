import React, { Component } from 'react';

type Props = {};
type State = {};

export default class ReportSpill extends Component<Props, State> {

  constructor() {
    super();
  }

  render() {

    return (
      <div className="reportSpill">
        <button type="button" className="btn btn-danger btn-lg">
          Report a Spill!
        </button>
      </div>
    );
  }
}
