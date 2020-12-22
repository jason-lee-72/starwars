const PeopleTableRow = ({ person, selected, onClick}) => (
    <tr onClick={onClick} className={selected ? 'selected' : ''}>
        <td>{person.name}</td>
        <td>{person.height}</td>
        <td>{person.mass}</td>
    </tr>
);

export default PeopleTableRow;