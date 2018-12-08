import React, { PureComponent } from 'react';
export default class Workplace extends PureComponent {
  render() {
    return (
      <h1>Hello World!</h1>
    );
  }
}

// componentDidMount() {
//     const { dispatch } = this.props;
//     dispatch({
//       type: 'project/fetchNotice',
//     });
//     dispatch({
//       type: 'activities/fetchList',
//     });
//     dispatch({
//       type: 'chart/fetch',
//     });
//   }