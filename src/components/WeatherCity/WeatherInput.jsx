import { Field, Form, Formik } from 'formik';
import React from 'react';
import { useContext } from 'react';
import * as Yup from "yup";
import I18nContext from '../../contexts/I18nContext';
import { ErrorMessage } from 'formik';
import { getCityWeather } from '../../loaders/WeatherInfo';
import { Navigate, useNavigate } from 'react-router';

const initialValues = {
  city: "zaporizhzhya",
};

const WeatherInput = ({setCityWeather}) => {
  const { texts } = useContext(I18nContext);

  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    city: Yup.string()
      .min(2, texts["city-min-message"])
      .max(25, texts["city-max-message"])
      .required(texts["city-required-message"]),
  });

  const submitHandler = (values) => {
    navigate(`/weather?city=${values.city}`);
  };

    return (
      <div>
        <h1>Weather</h1>
        <Formik
          initialValues={initialValues}
          onSubmit={submitHandler}
          validationSchema={validationSchema}
        >
          <Form>
            <Field type="text" placeholder="Enter city name:" name="city" />
            <button type="submit">Get Weather</button>
            <ErrorMessage name="city" component="div" className="error" />
          </Form>
        </Formik>
      </div>
    );
}

export default WeatherInput;
