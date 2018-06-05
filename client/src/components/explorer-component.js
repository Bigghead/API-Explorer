import React, { Fragment } from 'react';

const explorerComponent = ({ title, method, url, body }) => {


    const renderBody = () => {
        return (
            <Fragment>
                <h4>Body</h4>
                { mapBody() }
            </Fragment>
        );
    }



    const mapBody = () => (body.map((b, index) => {
        const attributes = { ...b }
        return <input key={ index } { ...attributes } />
    }));


    return (
        <div>
            <h3>{ title }</h3>
            <h4>{ method }</h4>
            <h4>Base URL</h4>
            <p>{ url } </p>

            <Fragment>
                { body.length > 0
                    ? renderBody()
                    : null
                }
            </Fragment>
        </div>
    );
};

export default explorerComponent;