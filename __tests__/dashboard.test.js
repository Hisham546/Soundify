/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import Dashboard from '../src/dashboard/dashboard';

// Note: import explicitly to use the types shiped with jest.
import { it } from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
   const tree = renderer.create(<Dashboard />).toJSON();
   expect(tree).toMatchSnapshot();
});
