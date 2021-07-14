import { Component } from 'react';

class Alert extends Component {

    render() {
        return (
            <div className={'alert alert-dismissible fade show alert-' + this.props.type} role="alert">
                {this.props.message}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" 
                    onClick={ () => {
                        if (this.props.onClose)
                            this.props.onClose();
                    }}
                />
            </div>
        );
    }

}

export default Alert;