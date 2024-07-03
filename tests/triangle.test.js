import { describe, expect, it } from "vitest";
import { triangle } from "../src/triangle";

describe('third angle of the triangle as function', () => {
    
it('180 less two angle of a triangle return a number ', () => {

        //Given 
        const angle1 = 30
        const angle2 = 60
        const expected = 180 - angle1 - angle2;

        //when 
        const result = triangle(angle1, angle2);

        // Then 
        expect(result).toBeTypeOf("number");
        expect(result).toEqual(expected);

    });

});

it('180 less two angle of a triangle return a number ', () => {

    //Given 
    const angle1 = 60
    const angle2 = 60
    const expected = 180 - angle1 - angle2;

    //when 
    const result = triangle(angle1, angle2);

    // Then 
    expect(result).toBeTypeOf("number");
    expect(result).toEqual(expected);

});

it('180 less two angle of a triangle return a number ', () => {

    //Given 
    const angle1 = 43
    const angle2 = 78
    const expected = 180 - angle1 - angle2;

    //when 
    const result = triangle(angle1, angle2);

    // Then 
    expect(result).toBeTypeOf("number");
    expect(result).toEqual(expected);

});

it('180 less two angle of a triangle return a number ', () => {

    //Given 
    const angle1 = 10
    const angle2 = 20
    const expected = 180 - angle1 - angle2;

    //when 
    const result = triangle(angle1, angle2);

    // Then 
    expect(result).toBeTypeOf("number");
    expect(result).toEqual(expected);

});