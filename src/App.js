import { connect } from 'react-redux';

import './App.css';
import { getPeople, setSelectedPerson } from './redux/actions/people';
import { getFilms } from './redux/actions/films';

import { useEffect } from 'react';

import PeopleTable from './components/PeopleTable';
import PersonDetail from './components/PersonDetail';

function App({ people, films, getPeople, setSelectedPerson, getFilms }) {
  // Load people
  useEffect(
    () => {
      if (!people.data && !people.loading && !people.error) {
        getPeople();
      }
    }, [people.data, people.loading, people.error, getPeople]
  );

  // Load films
  useEffect(
    () => {
      if (people.selectedPerson) {
        getFilms(people.selectedPerson.films);
      }
    }, [people.selectedPerson, getFilms]
  )

  const handleGetNextClick = () => {
    getPeople(people.data.next);
    setSelectedPerson(null);
  };

  const handleGetPreviousClick = () => {
    getPeople(people.data.previous);
    setSelectedPerson(null);
  };

  const handlePersonClick = (person) => {
    setSelectedPerson(person);
    getFilms(person.films)
  };

  return (
    <div className="app">
      {!people.data && people.loading ? 'Loading ...' :
        people.error ? 'An error occurred loading people' :
          people.data && <PeopleTable peopleData={people.data}
            selectedPerson={people.selectedPerson}
            loading={people.loading}
            onPersonClick={handlePersonClick}
            onPreviousClick={handleGetPreviousClick}
            onNextClick={handleGetNextClick}
          />}
      {people.selectedPerson &&
        !films.loading &&
        <PersonDetail person={people.selectedPerson} films={films} />}
    </div>
  );
}

const mapStateToProps = state => ({
  people: state.people,
  films: state.films
});

const mapDispatchToProps = dispatch => ({
  getPeople: (url) => dispatch(getPeople(url)),
  setSelectedPerson: (person) => dispatch(setSelectedPerson(person)),
  getFilms: (urls) => dispatch(getFilms(urls))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
