'use client';

import { Callout } from '@/components';

const DesignLanguage = () => {
  return (
    <div className={'pageContainer'}>
      <div className='typographyPreview'>
        <Callout text={'Typography'} />
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <p>Body Text</p>
      </div>
    </div>
  );
};

export default DesignLanguage;
