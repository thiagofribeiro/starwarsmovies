import { useQuery } from 'react-query';
import React, { ReactElement, useState } from 'react';
import IResponse from '../types/IResponse';
import BB8Loader from './BB8Loader';
import IPeople from '../types/IPeople';
import styles from './People.module.css';
import Overlay from './Overlay';

const getPeople = async () => {
  const url = new URL('https://swapi.dev/api/people/');
  url.search = new URLSearchParams({ search: 'Luke Skywalker' }).toString();

  const response = await fetch(url.href);

  if (!response.ok) {
    throw new Error('Problem fetching user');
  }

  const responseData: IResponse<IPeople> = await response.json();
  if (!(responseData && responseData.count > 0)) {
    throw new Error('No people founded');
  }

  const person = responseData.results[0];
  person.filmTitle = [];

  const promises = person.films.map((film) => fetch(film)
    .then((movie) => movie.json()).then((data) => data.title));

  person.filmTitle = await Promise.all(promises);
  return person;
};

function People(): ReactElement {
  const { data, isLoading, error } = useQuery<IPeople, Error>('people', getPeople);
  const [showOverlay, setShowOverlay] = useState<boolean>(false);
  if (isLoading) return <div data-testid="people-list"><BB8Loader /></div>;

  if (error) return <div data-testid="people-list">{`${error.message}`}</div>;

  return (
    <>
      <button type="button" className={styles.buttonPeople} onClick={() => { setShowOverlay(true); }}>
        { data && data.name }
      </button>
      <Overlay onClose={() => setShowOverlay(false)}>
        { showOverlay && (
        <div className={styles.listFilms}>
          {data && data.filmTitle.map((title) => (
            <div className={styles.film} key={title}>{title}</div>
          ))}
        </div>
        ) }
      </Overlay>
    </>
  );
}

export default People;
