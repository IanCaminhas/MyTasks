describe('Compare numbers', () => {
  it('uso básico', () => {
    //1+1 é maior que 1 ?
    expect(1 + 1).toBeGreaterThan(1);
    //1+1 é maior ou igual a 1 ?
    expect(1 + 1).toBeGreaterThanOrEqual(1);
    //1+1 é menor que 3 ?
    expect(1 + 1).toBeLessThan(3);
    //1+1 é menor ou igual a 3 ?
    expect(1 + 1).toBeLessThanOrEqual(3);
  });
});

//Quando quero imitar uma função/módulo/biblioteca...
//const fakeAdd = jest.fn().mockImplementation((a, b) => 5);
/*
  Por que usamos mock em testes unitários ? porque esses testes unitários testam apenas uma funcionalidade.
Muitas vezes essa funcionalidade utiliza biblioteca ou função externa. Não consigo testar esses externos
num teste unitário. Para o teste funcionar, simulo essas coisas de fora através do mock.
*/
describe('Mock', () => {
  it('mock implementation', () => {
    const fakeAdd = jest.fn().mockImplementation((a, b) => 5);
    expect(fakeAdd(1, 1)).toBe(5);
  });
});
