"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSymbolSpecifier = void 0;
/**
 * Generates typescript code for a symbol specifier.
 *
 * @export
 * @param {SymbolSpecifier} specifier
 * @returns {string}
 */
function generateSymbolSpecifier(specifier) {
    return `${specifier.specifier}${specifier.alias ? ` as ${specifier.alias}` : ''}`;
}
exports.generateSymbolSpecifier = generateSymbolSpecifier;
