import PeopleTableRow from "./PeopleTableRow";

const PeopleTable = ({ people, onPersonClick }) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Height(cm)</th>
        <th>Mass(kg)</th>
      </tr>
    </thead>
    <tbody>
      {people &&
        people.map((person, idx) => <PeopleTableRow key={`person${idx}`} person={person} onClick={() => onPersonClick(person)} />)}
    </tbody>
  </table>
);

export default PeopleTable;