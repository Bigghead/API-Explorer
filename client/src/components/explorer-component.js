import React, { Fragment, Component } from 'react';

class explorerComponent extends Component {


    constructor( props ) {
        super( props );
        this.state = { };
    }


    componentDidMount() {
        this.buildStateFromPropsBody();
    }


    buildStateFromPropsBody = () => {
        const inputVals = {};
        if ( !this.props.body ) return ;
        this.props.body.forEach( body => {
            inputVals[body.name] = ''
        } );
        return this.setState( { state: inputVals } )
    }


    renderBody = ( body ) => {
        return (
            <div className='form-body'>
                <h5>Body</h5>
                { this.mapBody( body ) }
            </div>
        );
    }


    mapBody = ( body ) => ( body.map( ( b, index ) => {
        const attributes = { ...b }
        return ( 
            <Fragment key={ b.name + index }> 
                <label 
                    htmlFor={ b.name + index }
                    className={ b.required ? 'required-field' : ''} > 
                    { this.uppercaseLabel( b.name) }: 
                </label>
                <input 
                    id={ b.name + index } 
                    key={ b.name + index } 
                    { ...attributes }
                    onChange={ this.handleInputChange.bind( this, b.name )} />
            </Fragment>
        )
    } ) );


    uppercaseLabel = ( label ) => label.charAt(0).toUpperCase() + label.slice(1);


    handleInputChange( fieldName, { target: { value } } ) {
        this.setState( { [fieldName] : value } );
    }


    submitForm = async(e) =>  {
        e.preventDefault();
        const { title, method, url, body } = this.props;
        const inputVals = { ...this.state };
        
        let options = method === 'GET' || method === 'DELETE'
                    ? { method }  
                    : { method, body: JSON.stringify( { ...inputVals } )} ;
        
        try { 

            const response = await fetch( url, options );
            console.log(response);

        } catch(e) { console.log(e); }
    }


    render() {
        const { title, method, url, body } = this.props;
        return (
            <form className='api-form' onSubmit={ this.submitForm }>
                <h4>{ title }</h4>
                <h5>{ method }</h5>
                <h5>Base URL</h5>
                <p>{ url } </p>
    
                <Fragment>
                    { ( body && body.length > 0 )
                        ? this.renderBody( body )
                        : null
                    }
                </Fragment>

                <button type='submit'>Send Request</button>
            </form>
        );
    }
};

export default explorerComponent;