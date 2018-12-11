const add = (a,b) => a+b
const generateGreeting = (name = 'Anon') => `Hello ${name}!`

test('should add two numbers', ()=>{
    const result = add(3,4);
    expect(result).toBe(7)
})

test('should get greeting with name', ()=>{
    const result = generateGreeting('Jacek');
    expect(result).toBe('Hello Jacek!');
})

test('should get greeting without name', ()=>{
    const result = generateGreeting();
    expect(result).toBe('Hello Anon');
})