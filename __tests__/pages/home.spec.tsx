import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import {Home} from '../../src/pages/Home';

describe('Home page', () => {
  it('renders correctly', () => {
    const {getByPlaceholderText} = render(<Home />);
    const inputNewTask = getByPlaceholderText('Nova tarefa...');

    //console.log(inputNewTask);
    //espero que esse input esteja definido
    expect(inputNewTask).toBeDefined();
    //O componente é válido ? está renderizado ?
    expect(inputNewTask.props.placeholder).toBeTruthy();
  });
});
