// import React from 'react'
import PropTypes from 'prop-types';

const Card = ({children,className ='',hoverable=false}) => {
    //base class
    const baseClasses = 'bg-white dark:bg-gray-800 rounded-lg shadow-md p-6';

    //hover effect class
    const hoverClasses = hoverable ? 'transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer'  : '';

    const combinedClasses = `${baseClasses} ${hoverClasses} ${className}`.trim();


    return (
        <div className={combinedClasses}>
            {children}
            
            
        </div>
    );
};

Card.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    hoverable: PropTypes.bool,
}

export default Card