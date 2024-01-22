import ServiceCard from '@/lib/components/ServiceCard';
import { services } from '@/lib/constant';

const Services = () => {
  return (
    <section id="services" className="padding">
      <div className="max-container flex justify-center flex-wrap gap-9">
        {services.map((service) => (
          <ServiceCard key={service.label} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
