import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import Infinite from '../src';
import Base from './Base';
Enzyme.configure({ adapter: new Adapter() });

describe('Infinite Base PropTypes', () => {
  const infinite = mount(
    <Infinite
      scrollHeight={300}
      elementScroll={true}
    >
      <div>content1</div><div>content2</div>
    </Infinite>
  );
  const base = mount(<Base />);

  describe('scroll content', () => {
    let scrollElement = infinite.children().children();
    expect(scrollElement.length).to.equal(2);
  });
  describe('scrollHeight', () => {
    expect(infinite.prop('scrollHeight')).to.equal(300);
  });
  describe('elementScroll', () => {
    expect(infinite.prop('elementScroll')).to.be.true;
  });
  describe('isLoading', () => {
    expect(infinite.prop('isLoading')).to.be.true;
  });
  describe('loading', () => {
    infinite.setProps({loading: false});
    expect(infinite.prop('loading')).to.be.false;
  });
  describe('scrollThreshold', () => {
    expect(infinite.prop('scrollThreshold')).to.equal(200);
  });
  describe('base component', () => {
    expect(base.find('.post').length).to.equal(15);
  });

})
