import { ErrorMessage, Field, Form, Formik, useFormikContext } from "formik";
import * as Yup from "yup";
import { useEffect } from "react";

const initialValues = {
  "start-date": null,
  "end-date": null,
  "person-count": 1,
  clients: [""],
};

const validationSchema = Yup.object().shape({
  "start-date": Yup.date()
    .nullable()
    .required("Дата початку обов'язкова")
    .min(
      new Date(new Date().setHours(0, 0, 0, 0)),
      "Дата не може бути в минулому"
    ),

  "end-date": Yup.date()
    .nullable()
    .required("Дата кінця обов'язкова")
    .when("start-date", (startDate, schema) =>
      startDate
        ? schema.min(startDate, "Дата кінця має бути після дати початку")
        : schema
    ),

  "person-count": Yup.number()
    .typeError("Кількість осіб має бути числом")
    .required("Будь ласка, оберіть кількість осіб")
    .min(1, "Мінімум 1 особа")
    .max(4, "Максимум 4 особи"),

  clients: Yup.array().of(Yup.string().required("Ім'я клієнта обов'язкове")),
});

const ClientsFields = () => {
  const { values, setFieldValue } = useFormikContext();
  const personCount = values["person-count"] || 1;

  useEffect(() => {
    const currentCount = values.clients.length;

    if (currentCount < personCount) {
      const newClients = [...values.clients];
      while (newClients.length < personCount) {
        newClients.push("");
      }
      setFieldValue("clients", newClients);
    } else if (currentCount > personCount) {
      setFieldValue("clients", values.clients.slice(0, personCount));
    }

  }, [personCount, setFieldValue]);

  return (
    <div className="clients-fields">
      {values.clients.map((_, index) => (
        <div key={index} className="client-field">
          <label htmlFor={`clients[${index}]`}>Клієнт {index + 1}:</label>
          <Field type="text" name={`clients[${index}]`} />
          <ErrorMessage
            name={`clients[${index}]`}
            component="div"
            className="error"
          />
        </div>
      ))}
    </div>
  );
};

const SelectDate = () => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={(values, { setSubmitting }) => {
      console.log("Дані для покупки:", values);
      setSubmitting(false);
    }}
  >
    {({ setFieldValue }) => (
      <Form>
        <h2>Вибір дат та кількості осіб</h2>

        <div>
          <label htmlFor="start-date">Дата початку: </label>
          <Field type="date" name="start-date" />
          <ErrorMessage name="start-date" component="div" className="error" />
        </div>

        <div>
          <label htmlFor="end-date">Дата кінця: </label>
          <Field type="date" name="end-date" />
          <ErrorMessage name="end-date" component="div" className="error" />
        </div>

        <div>
          <label htmlFor="person-count">Кількість осіб: </label>
          <Field
            as="select"
            name="person-count"
            onChange={(e) =>
              setFieldValue("person-count", Number(e.target.value))
            }
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
          </Field>
          <ErrorMessage name="person-count" component="div" className="error" />
        </div>
        
        <h3>Імена клієнтів</h3>
        <ClientsFields />

        <button type="submit">Купити</button>
      </Form>
    )}
  </Formik>
);

export default SelectDate;
