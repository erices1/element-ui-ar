import { hasOwn } from 'element-ui-ar/src/utils/util';

export function isVNode(node) {
  return node !== null && typeof node === 'object' && hasOwn(node, 'componentOptions');
};
