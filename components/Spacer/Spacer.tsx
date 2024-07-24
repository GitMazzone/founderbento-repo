import { FunctionComponent } from 'react';

type SpacerProps = {
  type: 'component' | 'section';
};

export const Spacer: FunctionComponent<SpacerProps> = ({ type }) => {
  return <div className={type === 'component' ? 'py-4' : 'py-8'}></div>;
};
