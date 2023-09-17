import { Callout } from '@/components';

const DesignLanguage = () => {
  return (
    <>
      <div className={'flex flex-col gap-3'}>
        <h1>Design language</h1>
        <Callout
          text={
            'Above is an H1, below is the default typography. Edit it in globals.css'
          }
        />
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <p>Body Text</p>
      </div>
    </>
  );
};

export default DesignLanguage;
