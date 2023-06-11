import { Component } from "react";
import PropTypes from 'prop-types';

class ModalImage extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = event => {
        if(event.code === 'Escape') {
            this.props.onClose()
        }
    }
    handleBackdrop = event => {
        if(event.target === event.currentTarget) {
            this.props.onClose();
        }
    }

    render() {
        return (
            <div onClick={this.handleBackdrop}>
                <div>
                    <img src = {this.props.imgUrl} alt = ""/>
                </div>
            </div>
        )
    }

} 
  ModalImage.propTypes = {
    onClose: PropTypes.func.isRequired,
  }

  export default ModalImage;