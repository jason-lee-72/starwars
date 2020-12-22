const PersonDetail = ({ person, films }) => (
  <table className="person">
    <tbody>
      <tr>
        <th>Name:</th>
        <td>{person.name}</td>
      </tr>
      <tr>
        <th>Height (cm):</th>
        <td>{person.height}</td>
      </tr>
      <tr>
        <th>Birth year:</th>
        <td>{person.birth_year}</td>
      </tr>
      <tr>
        <th>Gender:</th>
        <td>{person.gender}</td>
      </tr>
      <tr>
        <th>List of films:</th>
        <td>
          {
            films.loading ? 'Loading ... ' :
              films.error ? 'An error occurred loading films' :
                films.data && films.data.map((film, index) => film.title + (index < films.data.length - 1 ? ', ' : ''))
          }
        </td>
      </tr>
    </tbody>
  </table>
);

export default PersonDetail;