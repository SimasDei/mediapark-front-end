import React from 'react';
import Person1 from '../../../assets/img/person1.png';
import Person2 from '../../../assets/img/person2.png';
import Person3 from '../../../assets/img/person3.png';

const People = () => {
  return (
    <div className="form__people people">
      <div className="people__person">
        <img className="people__img" src={Person1} alt="person" />
        <div className="people__contact">
          <h4>Agnė Valentinaitė</h4>
          <p>agne@ntprojects.com</p>
          <p>+370 62553454</p>
        </div>
      </div>
      <div className="people__person">
        <img className="people__img" src={Person2} alt="person" />
        <div className="people__contact">
          <h4>Agnė Valentinaitė</h4>
          <p>agne@ntprojects.com</p>
          <p>+370 62553454</p>
        </div>
      </div>
      <div className="people__person">
        <img className="people__img" src={Person3} alt="person" />
        <div className="people__contact">
          <h4>Agnė Valentinaitė</h4>
          <p>agne@ntprojects.com</p>
          <p>+370 62553454</p>
        </div>
      </div>
    </div>
  );
};

export default People;
