import {shallow} from 'enzyme';
import React from 'react';
import DashboardPage from '../../components/DashboardPage';

describe('ExpenseDashboard', () => {
    test('Should display expense list without totals line if no expenses', () => {
        const wrapper = shallow(<DashboardPage />);
        expect(wrapper).toMatchSnapshot();
    })
});