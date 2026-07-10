import React from 'react';

type MotionProps = {
  initial?: unknown;
  animate?: unknown;
  transition?: unknown;
  whileHover?: unknown;
  whileTap?: unknown;
};

type AnyProps = Record<string, unknown> & MotionProps;

function createMotionComponent(tag: keyof React.JSX.IntrinsicElements) {
  return React.forwardRef<HTMLElement, AnyProps>(
    function MotionComponent(props, ref) {
      const {
        initial: _initial,
        animate: _animate,
        transition: _transition,
        whileHover: _whileHover,
        whileTap: _whileTap,
        ...elementProps
      } = props;

      return React.createElement(tag, { ...elementProps, ref });
    }
  );
}

export const motion = {
  aside: createMotionComponent('aside'),
  article: createMotionComponent('article'),
  button: createMotionComponent('button'),
  div: createMotionComponent('div'),
  h1: createMotionComponent('h1'),
  label: createMotionComponent('label'),
  p: createMotionComponent('p'),
  span: createMotionComponent('span'),
};
