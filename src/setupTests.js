// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
const { TextEncoder, TextDecoder } = require('util')

global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder

// Mock window.ethereum for Web3/MetaMask interactions
global.window.ethereum = {
  request: jest.fn().mockResolvedValue(['0x1234567890abcdef']),
  on: jest.fn(),
  removeListener: jest.fn(),
};
