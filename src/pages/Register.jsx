import { ErrorMessage, Field, Form, Formik } from "formik";
import { useContext } from "react";
import * as Yup from "yup";
import I18nContext from "../contexts/I18nContext";

const initialValues = {
  name: "",
  email: "",
  password: "",
  repeatPassword: "",
};


const Register = () => {
  const { texts } = useContext(I18nContext);

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, texts["name-min-message"])
      .max(15, texts["name-max-message"])
      .required(texts["name-required-message"]),
    email: Yup.string().email(texts["email-invalid-message"]).required(texts["email-required-message"]),
    password: Yup.string()
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        texts["password-error-message"]
      )
      .required(texts["password-required-message"]),
    repeatPassword: Yup.string()
      .oneOf([Yup.ref("password")], texts["repeat-password-invalid-message"])
      .required(texts["repeat-password-required-message"]),
  });

  const submitHandler = (values) => {
    console.log(values);
  };

  return (
    <div>
      <h1>{texts.registration}</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={submitHandler}
        validationSchema={validationSchema}
      >
        {() => (
          <Form>
            <div>
              <Field
                type="text"
                name="name"
                placeholder={texts["registration-name-placeholder"]}
              />
              <ErrorMessage name="name" component="div" className="error" />
            </div>
            <div>
              <Field
                type="email"
                name="email"
                placeholder={texts["registration-email-placeholder"]}
              />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div>
              <Field
                type="password"
                name="password"
                placeholder={texts["registration-password-placeholder"]}
              />
              <ErrorMessage name="password" component="div" className="error" />
            </div>
            <div>
              <Field
                type="password"
                name="repeatPassword"
                placeholder={texts["registration-repeat-password-placeholder"]}
              />
              <ErrorMessage
                name="repeatPassword"
                component="div"
                className="error"
              />
            </div>
            <button type="submit">{texts["registration-submit-button"]}</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
