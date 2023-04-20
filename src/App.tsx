import { FC } from 'react';

import style from './App.module.css';

import { Header } from 'components/Header/Header';
import { Row } from 'components/Row/Row';
import { relativeKeysCourses } from 'constants/allCoursesKeys';
import { headersTable } from 'constants/headersTable';
import { useFetchCourse } from 'hooks/useFetchCourse';

export const App: FC = () => {
  const { getCurrentCourse } = useFetchCourse();

  const rows = relativeKeysCourses.map(currency => (
    <Row key={currency} title={currency} values={getCurrentCourse(currency)} />
  ));

  return (
    <div className={style.main}>
      <Header headers={headersTable} />
      {rows}
    </div>
  );
};
