import React from 'react';
import {shallow} from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('should render ExpenseForm properly', ()=>{
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseForm with expenses fixtures properly', ()=>{
    const wrapper = shallow(<ExpenseForm expenses={expenses}/>)
    expect(wrapper).toMatchSnapshot()
})