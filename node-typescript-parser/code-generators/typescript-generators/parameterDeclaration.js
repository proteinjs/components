"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateParameterDeclaration = void 0;
/**
 * Generates typescript code for parameters.
 *
 * @export
 * @param {ParameterDeclaration} parameter
 * @returns {string}
 */
function generateParameterDeclaration(parameter) {
    return `${parameter.name}${parameter.type ? `: ${parameter.type}` : ''}`;
}
exports.generateParameterDeclaration = generateParameterDeclaration;
