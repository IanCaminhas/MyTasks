export function add(x: number, y: number) {
  return x + y;
}

//Agrupando o teste
describe('calculator', () => {
  it('add numbers', () => {
    //toEqual contem o valor que esperamos. Chamando o method add e passando 1 e 2 para ele como param, esperamos ter 3 como resultado
    expect(add(1, 2)).toEqual(3);
  });
});
