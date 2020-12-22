import PeopleTableRow from "./PeopleTableRow";

const PeopleTable = ({ people, selectedPerson, loading, onPersonClick }) => (
  <table className={'people' + (loading ? ' loading' : '')}>
    <thead>
      <tr>
        <th>Name</th>
        <th>Height (cm)</th>
        <th>Mass (kg)</th>
      </tr>
    </thead>
    <tbody>
      {people &&
        people.map((person, idx) => <PeopleTableRow key={`person${idx}`} person={person} onClick={() => onPersonClick(person)} selected={person === selectedPerson}/>)}
    </tbody>
  </table>
);

export default PeopleTable;