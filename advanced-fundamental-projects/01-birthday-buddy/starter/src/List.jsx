import Person from './Person';

const List = ({ people, removePerson }) => {
  return (
    <section>
      {people.map((person) => {
        return (
          <Person {...person} removePerson={removePerson} key={person.id} />
        );
      })}
    </section>
  );
};
export default List;
