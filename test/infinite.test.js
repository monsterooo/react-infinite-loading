import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import Infinite from '../src';

test('Infinite Base', () => {
  const wrapper = shallow(<Infinite><div>content1</div><div>content2</div></Infinite>);
  console.log(wrapper.debug())
})
