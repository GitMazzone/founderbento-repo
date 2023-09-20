import { TestimonialCard } from './TestimonialCard';

export interface Testimonial {
  imageSrc: string;
  name: string;
  testimonial: string;
}

interface TestimonialGridProps {
  testimonials: Testimonial[];
}

export const TestimonialGrid: React.FunctionComponent<TestimonialGridProps> = ({
  testimonials,
}) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {testimonials.map((t, index) => (
        <TestimonialCard key={index} {...t} />
      ))}
    </div>
  );
};
