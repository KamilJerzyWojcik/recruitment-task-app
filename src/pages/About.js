import React from "react";

const About = () => {
  return (
    <section>
      <h1>About</h1>
      <h3>Autor Kamil Wójcik, 2022</h3>
      <p>
        Zadanie rekrutacyjne na stanowisko fullstack developer w technologii
        React.js.
      </p>
      <p>
        Aplikacaj został przygotowana dla firmy eRecruitment Solutions sp. z
        o.o. (Grupa Pracuj S.A.)
      </p>

      <section>
        <h3>Ad 1:</h3>
        <ul>
          <li>Wykorzystane jest publiczne API Githuba;</li>
          <li>
            Czeka na podanie loginu użytkownika:
            <ul>
              <li>waliduje poprawność;</li>
              <li>obsługuje nieistniejące loginy;</li>
            </ul>
          </li>
          <li>
            wyświetla maksymalnie 5 projektów w kolejności od ostatnio
            updatowanego:
          </li>
          <li>wyświetla maksymalnie 5 commitów każdego z projektów;</li>
        </ul>
      </section>

      <section>
        <h3>Ad 2: </h3>
        <ul>
          <li>
            wyświetla niniejszą treść (listę wymagań) z podobnym (takim samym)
            podziałem i układem;
          </li>
          <li>proszę zawrzeć też autora aplikacji - własne imię i nazwisko;</li>
        </ul>
      </section>

      <section>
        <h3>Ad 3: </h3>
        <ul>
          <li>input do podania liczby dla której będzie wyliczona silnia;</li>
          <li>historia poprzednich wyliczeń.</li>
        </ul>
      </section>

      <section>
        <h3>Ogólne: </h3>
        <ul>
          <li>korzysta z LESS / SASS. </li>
          <li>Spełnia wymogi BEM.</li>
          <li>Jest też estetyczna;</li>
          <li>wyświetla co drugi element każdej listy wyróżnionym kolorem; </li>
          <li>jest hostowana (github pages, heroku, itd..)</li>
          <li>kod aplikacji jest dostępny publicznie;</li>
        </ul>
      </section>
    </section>
  );
};

export default About;
