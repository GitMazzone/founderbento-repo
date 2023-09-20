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
    <div className={'columns-1 md:columns-3 lg:columns-4 space-x-4 space-y-8'}>
      {testimonials.map((t, index) => (
        <TestimonialCard key={index} {...t} />
      ))}
    </div>
  );
};
