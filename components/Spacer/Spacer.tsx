import { FunctionComponent } from 'react';

type SpacerProps = {
  type: 'component' | 'section';
};

export const Spacer: FunctionComponent<SpacerProps> = ({ type }) => {
  return <div className={type === 'component' ? 'py-2' : 'py-12'}></div>;
};
