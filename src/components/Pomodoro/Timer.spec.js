import React from 'react';
import { shallow } from 'enzyme';

import Timer from './Timer';

describe('Timer Component', () => {
  const wrapper = shallow(<Timer />);

  it('Should render a start button', () => {
    expect(wrapper.find('button.start').text()).toEqual('Start Working');
  });

  it('Should render a short button', () => {
    expect(wrapper.find('button.short').text()).toEqual('Short Break');
  });

  it('Should render a long button', () => {
    expect(wrapper.find('button.long').text()).toEqual('Long Break');
  });
});
