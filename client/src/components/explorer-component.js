import React from 'react';

const explorerComponent = ( { title, method, url, body } ) => {


    const mapBody = () => {
        return body.map( b => { 
            console.log(b)
            return <input type={ b.type }/>
        } )
    }

    console.log(title)
    return (
        <div>
            <h3>{ title }</h3>
            <h4>{ method }</h4>
            <h4>Base URL</h4>
            <p>{ url } </p>
            <>
                { body.length > 0 ? 
                    <h4>Body</h4>
                    { mapBody() }

                    : null
                }
            </>
        </div>
    );
};

export default explorerComponent;