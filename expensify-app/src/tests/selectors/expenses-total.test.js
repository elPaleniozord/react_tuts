import selectExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'

test('should return 0 if no expenses', ()=>{
    const res = selectExpensesTotal([]);
    expect(res).toBe(0)
})

test('should add up all expense', ()=>{
    const res = selectExpensesTotal(expenses);
    expect(res).toBe(114195)
})

test('should add up single expense', ()=>{
    const res = selectExpensesTotal([expenses[1]]);
    expect(res).toBe(expenses[1].amount)
})