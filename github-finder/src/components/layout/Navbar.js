import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";

class Navbar extends Component {
  static defaultProps = {
    title: "Github Finder",
    icon: faGithub
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired
  };

  render() {
    return (
      <nav className='navbar bg-primary'>
        <h1>
          <FontAwesomeIcon icon={this.props.icon} /> {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default Navbar;
