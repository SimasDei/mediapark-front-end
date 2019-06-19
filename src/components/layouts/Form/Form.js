import React, { useState } from 'react';
import People from './People';
import Button from '../../shared/Button';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    privacy: false,
    errors: {
      name: null,
      email: null,
      phone: null,
      message: null,
    },
    disabled: true,
  });

  const onChangeHandler = e => {
    e.persist();
    if (e.target.name === 'privacy') {
      const isChecked = e.target.checked;
      if (isChecked) {
        setFormData(formData => ({ ...formData, privacy: isChecked }));
      } else {
        setFormData(formData => ({
          ...formData,
          privacy: isChecked,
          errors: { [e.target.name]: 'Privalomas laukas' },
        }));
      }
    } else {
      setFormData(formData => ({ ...formData, [e.target.name]: e.target.value }));
    }

    if (formData.name && formData.email && formData.phone && formData.message && formData.privacy) {
      setFormData(formData => ({ ...formData, disabled: false }));
    }
  };

  const onSubmitHandler = e => {
    e.preventDefault();
  };

  const onBlurHandler = e => {
    e.persist();
    if (!e.target.value) {
      setFormData(formData => ({ ...formData, errors: { [e.target.name]: 'Privalomas laukas' } }));
    } else if (e.target.name === 'email') {
      if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(e.target.value)) {
        return;
      } else {
        setFormData(formData => ({
          ...formData,
          errors: { [e.target.name]: 'Įvestas neteisingas el. paštas' },
        }));
      }
    } else {
      setFormData(formData => ({ ...formData, errors: { [e.target.name]: null } }));
    }
  };

  return (
    <section className="form">
      <People />
      <form className="form__form" onSubmit={onSubmitHandler}>
        <h2 className="form__title">Sužinok apie projektą daugiau</h2>
        <div className="form__input-field">
          <input
            className={`form__input ${formData.error ? 'form__input--error' : null}`}
            type="text"
            placeholder="Jūsų vardas"
            name="name"
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
          />
          {formData.errors.name && <span className="input-error">{formData.errors.name}</span>}
        </div>
        <div className="form__input-field">
          <input
            className="form__input"
            type="text"
            placeholder="El. Paštas"
            name="email"
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
          />
          {formData.errors.email && <span className="input-error">{formData.errors.email}</span>}
        </div>
        <div className="form__input-field">
          <input
            className="form__input"
            type="text"
            placeholder="Telefono numeris"
            name="phone"
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
          />
          {formData.errors.phone && <span className="input-error">{formData.errors.phone}</span>}
        </div>
        <div className="form__input-field">
          <input
            className="form__input"
            type="text"
            placeholder="Žinutė"
            name="message"
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
          />
          {formData.errors.message && (
            <span className="input-error">{formData.errors.message}</span>
          )}
        </div>
        <div className="form__check">
          <div
            className={`form__checkbox ${
              formData.errors.privacy ? 'form__checkbox--error' : null
            } `}
          >
            <input
              type="checkbox"
              id="checkbox"
              name="privacy"
              onChange={onChangeHandler}
              checked={formData.privacy}
            />
            <label htmlFor="checkbox" />
          </div>
          <div className="form__terms">
            <p>
              Lorem ipsum, dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore minim <span>ntprojects@info.com</span>
            </p>
            {formData.errors.privacy && (
              <span className="input-error">{formData.errors.privacy}</span>
            )}
          </div>
        </div>
        <Button disabled={formData.disabled}>Siųsti</Button>
      </form>
    </section>
  );
};

export default Form;
