/*

Pass in props:

style
hoverStyle

and it will override button's default styles.

Usage sample:


import {ButtonHover} from './ButtonHover.jsx';

...
<ButtonHover>
  Text
</ButtonHover>
...

*/

import React from 'react';

export const ButtonHover = React.createClass({
  getInitialState: function () {
    return {
      hover: false
    };
  },
  getDefaultProps: function () {
    return {
      hoverStyle: {},
      style: {}
    };
  },
  render: function () {
    let styles = {
      cursor: 'pointer',
      backgroundColor: '#FF4081',
      color: '#fff',
      padding: '10px',
      borderRadius: '1000px',
      fontWeight: 600,
      fontSize: '18px',
      textAlign: 'center'
    };

    styles = Object.assign({}, styles, this.props.style);

    if (this.state.hover) {
      styles = Object.assign({}, styles, this.props.hoverStyle);
    }

    return <span
      {...this.props}
      onMouseOver={() => this.setState({hover: true})}
      onMouseOut={() => this.setState({hover: false})}
      style={styles}>
            {this.props.children}
        </span>;
  }
});
