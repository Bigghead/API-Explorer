import React, { Fragment } from 'react';

const explorerComponent = ({ title, method, url, body }) => {


    const renderBody = () => {
        return (
            <div className='form-body'>
                <h5>Body</h5>
                { mapBody() }
            </div>
        );
    }



    const mapBody = () => ( body.map( ( b, index ) => {
        const attributes = { ...b }
        return ( 
            <Fragment>
                <label htmlFor={ b.name + index } > { uppercaseLabel( b.name) }: </label>
                <input id={ b.name + index } key={ b.name + index } { ...attributes } />
            </Fragment>
        )
    } ) );


    const uppercaseLabel = ( label ) => label.charAt(0).toUpperCase() + label.slice(1);


    return (
        <form className='api-form'>
            <h4>{ title }</h4>
            <h5>{ method }</h5>
            <h5>Base URL</h5>
            <p>{ url } </p>

            <Fragment>
                { body.length > 0
                    ? renderBody()
                    : null
                }
            </Fragment>
        </form>
    );
};

export default explorerComponent;