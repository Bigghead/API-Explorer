import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import ExplorerComponent from './explorer-component';

const newValues = {
    email   : 'hi@hi.com',
    fullName: 'Hello Hello',
    phone   : '111-1111'
};

const config = {
    title: 'Add new user',
    url: 'https://jsonplaceholder.typicode.com/posts',
    method: 'POST',
    body: [
      {
        name: 'email',
        type: 'email',
        max: 24,
        min: 3,
      },
      {
        name: 'full-name',
        type: 'text',
        placeholder: 'John Doe',
        required: true,
      },
      {
        name: 'phone',
        type: 'tel',
        pattern: '\\d\\d\\d-\\d\\d\\d\\d',
      },
    ]
  };

let Explorer;


beforeEach(() => {
    Explorer = mount(
        <ExplorerComponent { ...config } />
    );
});


test( 'should render local state dynamically' , () => {
    
    const localState = Explorer.state();
    const { body: { email, phone } } = localState;
    const fullName = localState.body.full-name;
    expect(email).not.toBeUndefined();
    expect(phone).not.toBeUndefined();
    expect(fullName).not.toBeUndefined();

    expect(localState.body.name).toBeUndefined();
    
});


test('should change state on input changes', () => {

    Object.keys(newValues)
          .forEach( ( val, i ) => {
               let value = newValues[val];
               Explorer.find("input")
                       .at(i)
                       .simulate("change", {
                         target: {
                           value
                         }
               } );
          } )

    expect(Explorer.state().body.email).toBe(newValues.email);
    expect(Explorer.state().body['full-name']).toBe(newValues.fullName);
    expect(Explorer.state().body.phone).toBe(newValues.phone);

});


test("should not submit invalid form submission", () => {
    const submitForm = jest.spyOn(Explorer.instance(), 'submitForm')

    Explorer.find('form').simulate('submit', { preventDefault: () => {} });
    expect(submitForm).toHaveBeenCalledTimes(0);
});



