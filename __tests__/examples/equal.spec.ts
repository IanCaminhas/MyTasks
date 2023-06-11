describe('Igualdade', () => {
  it('uso básico - toEqual', () => {
    //Uso o toEqual para fazer asserções de números, strings, objetos e por aí vai
    expect(1 + 1).toEqual(2);
    expect('developer').toEqual('developer');
    expect({name: 'developer'}).toEqual({name: 'developer'});
  });

  it('uso básico - toBe', () => {
    //Uso o toEqual para fazer asserções de números, strings. Para objetos não funciona
    expect(1 + 1).toBe(2);
    expect('developer').toBe('developer');
    //não se deve fazer comparações de objetos usando o toBe. É como se o endereço de memória apontassem coisas diferentes, apesar do conteúdo ser o mesmo
    //expect({name: 'developer'}).toBe({name: 'developer'});
  });
});
