import React from 'react';
import {shallow} from 'enzyme';
import { GridItem } from "../../components/GridItem";

describe('Pruebas de GridItem', () => {

    const title = 'titulo';
    const url = 'https://google.com';

    const wrapper = shallow(<GridItem title={title} url={url} />);

    test('Debe mostrar el campo correctamente', () => {

        expect(wrapper).toMatchSnapshot();
    });

    test('debe tener un parrafo con el title', () => {
        
        const p = wrapper.find('p');
        expect(p.text().trim() ).toBe(title);
    });

    test('debe teener imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    test('debe tener la clase: animate__fadeInDown', () => {
        const div = wrapper.find('div');

        const className = div.prop('className');
        
        expect(className.includes('animate__fadeInDown')).toBe(true);
    });
    
    
});
