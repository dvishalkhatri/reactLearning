import Title from './Title';
import { services } from '../data';
import Service from './Service';

const Services = () => {
  return (
    <section className='section services' id='services'>
      <Title title='our' subTitle='services' />
      <div className='section-center services-center'>
        {services.map((link) => {
          const { id, icon, title, displayText } = link;
          return (
            <Service
              key={id}
              icon={icon}
              title={title}
              displayText={displayText}
            />
          );
        })}
      </div>
    </section>
  );
};
export default Services;
