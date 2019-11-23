const functions = require('./functions');

// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

// const initDatabase = () => console.log('Database initialized..');
// const closeDatabase = () => console.log('Database Closed..');
const nameCheck = () => console.log('Checking name ...')

describe('Checking names', () => {
    beforeEach(() => nameCheck());

    test('User is Diab', () => {
        const user = 'Diab'
        expect(user).toBe('Diab');
    });

    test('User is Nour', () => {
        const user = 'Nour'
        expect(user).toBe('Nour');
    });
});


//toBe
test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
}); 

//not
test('Adds 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

//To be null
test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

//toBeFalsy
test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
});
//To Equal
test('User should be Mahmoud Diab object', () => {
    expect(functions.createUser()).toStrictEqual({ firstName: 'Mahmoud', lastName: 'Diab' });
});

//Less than and greater than

test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600);
});

//Regex
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/i);
});

//Arrays
test('Admin should be in usernames', () => {
    usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin');
});

//Working with Async data

//Promise
// test('User fetched name should be Leanne Graham', () => {
//     expect.assertions(1);
//     return functions.fetchUser().then(data => {
//         expect(data.name).toEqual('Leanne Graham');
//     })
// });

//Async Await
test('User fetched name should be Leanne Graham', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');    
});