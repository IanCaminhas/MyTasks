describe('Not method', () => {
  it('uso básico - not', () => {
    //1+1 não é igual 2. O teste não passa.
    //1+1 não é igual 1. O teste passa.
    expect(1 + 1).not.toEqual(1);
  });
});

//esse aqui é fazendo expressões regulares
describe('Match - expressoes regulares', () => {
  it('uso básico - toMatch', () => {
    //Se eu colocar um numero, o teste no passa
    //Se eu colocar uma string, o teste passa
    expect('developer').not.toEqual(/\w+/);
  });
});
