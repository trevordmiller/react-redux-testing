import React from 'react';

class Example extends React.Component {
  render() {
    return (
      <section>
        {this.props.someProp}
      </section>
    );
  }
}

Example.propTypes = {
  someProp: React.PropTypes.string.isRequired
};

export default Example;
