import React, { Component } from 'react';

// const withClass = (WrappedComponent, className) => {
//     return (props) => (
//         <div className={className}>
//             <WrappedComponent {...props} />
//         </div>
//     )
// };


// Stateful component in case you are reaching out to the web or using lifecycle hooks.
// no named class because it can be used as an anonymous class.
const withClass = (WrappedComponent, className) => {
    const WithClass =class extends Component {
        render () {
            return (
                <div className={className}>
                    <WrappedComponent ref={this.props.forwardedRef} {...this.props} />
                </div>
            )
        }
    }

    return React.forwardRef((props, ref) => {
        return <WithClass {...props} forwardedRef={ref} />;
    });
}

export default withClass;