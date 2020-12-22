import PeopleTableRow from "./PeopleTableRow";
import { Fragment } from "react";

const PeopleTable = ({ peopleData, selectedPerson, loading, onPersonClick, onPreviousClick, onNextClick}) => (
  <Fragment>
    <table className={'people' + (loading ? ' loading' : '')}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Height (cm)</th>
          <th>Mass (kg)</th>
        </tr>
      </thead>
      <tbody>
        {peopleData &&
          peopleData.results.map((person, idx) => <PeopleTableRow key={`person${idx}`} person={person} onClick={() => onPersonClick(person)} selected={person === selectedPerson} />)}
      </tbody>
    </table>
    {peopleData &&
      <div className={'buttons' + (loading ? ' loading' : '')}>
        {peopleData.previous && <button onClick={onPreviousClick}>Previous</button>}
        {peopleData.next && <button onClick={onNextClick}>Next</button>}
      </div>
    }
  </Fragment>
);

export default PeopleTable;