import { BitOrder } from './../enums/bitOrder';
import { NumberType } from './../enums/numberType';
import { TextEncoding } from './../enums/textEncoding';
import { PropertyType } from './../enums/propertyType';
/**
 * Contains main decorator for properties of all serializable object
 */
export declare module SerializerInfo {
    /**
     * Define the sequential order of bytes
     * @see {@link BitOrder}
     */
    function bitOrder(value: BitOrder): (target: any, propertyKey: string) => void;
    /**
     * Define the position in byte array of the property
     */
    function lenght(value: number): (target: any, propertyKey: string) => void;
    /**
     * Define the length of the property in byte
     */
    function position(value: number): (target: any, propertyKey: string) => any;
    /**
     * Define the type and the length of numner
     * @see {@link NumberType}
     */
    function numberType(value: NumberType): (target: any, propertyKey: string) => any;
    /**
     * Define the type of property
     * @see {link TextEncoding}
     */
    function propertyType(value: PropertyType): (target: any, propertyKey: string) => any;
    /**
     * Define the encoder to read/write text
     * @see {link TextEncoding}
     */
    function textEncoding(value: TextEncoding): (target: any, propertyKey: string) => any;
    /**
     * Defines whether a property must be ignored in serialization
     */
    function ingnoreSerialize(target: any, propertyKey: string): any;
    /**
     * Defines whether a property must be ignored in deserialization
     */
    function ingnoreDeserialize(target: any, propertyKey: string): any;
}