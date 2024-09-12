import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs/build/',
    component: ComponentCreator('/docs/build/', 'e1d'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
