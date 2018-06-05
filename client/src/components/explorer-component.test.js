import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import ExplorerComponent from './explorer-component';

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
    expect(email).not.toBeNull();
    expect(phone).not.toBeNull();
    expect(fullName).not.toBeNull();
    
})