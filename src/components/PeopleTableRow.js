export default ({ person, onClick}) => (
    <tr onClick={onClick}>
        <td>{person.name}</td>
        <td>{person.height}</td>
        <td>{person.mass}</td>
    </tr>
)
