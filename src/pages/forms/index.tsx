import type { FieldHookConfig } from "formik";
import { Form, Formik, useField } from "formik";
import React from "react";
import * as Yup from "yup";

interface OtherProps {
  label: string;
}

const MyTextInput = (props: OtherProps & FieldHookConfig<string>) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.

  const [field, meta] = useField(props);
  return (
    <>
      <label
        htmlFor={props.id || props.name}
        className="block text-base font-medium text-slate-900"
      >
        {props.label}
      </label>
      <input
        className={`block w-full flex-1 rounded-md border-slate-400 focus:border-indigo-500 focus:ring-indigo-500 
        sm:text-base md:rounded-none md:rounded-r-md ${
          meta.touched && meta.error ? "border-2 border-red-500" : "block"
        }`}
        {...field}
        placeholder={props.placeholder}
        type={props.type}
      />
      {meta.touched && meta.error ? (
        <div className="text-red-500">{meta.error}</div>
      ) : null}
    </>
  );
};

const SignupSchema = Yup.object().shape({
  primary_need: Yup.string()

    .min(2, "Too Short!")

    .max(50, "Too Long!")

    .required("Required"),

  primary_gap: Yup.string()

    .min(2, "Too Short!")

    .max(50, "Too Long!")

    .required("Required"),

  email: Yup.string().email("Invalid email").required("Required"),
});

export default function Index() {
  return (
    <div>
      <h1>Signup</h1>

      <Formik
        initialValues={{
          primary_need: "",
          primary_gap: "",
          area_of_expertise: "",
          business_focus: "",
          business_resources: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={() => {
          // same shape as initial values
        }}
      >
        <Form>
          <div className="mt-1 rounded-md shadow-sm">
            <MyTextInput
              label="My label"
              name="primary_need"
              type="text"
              placeholder="Jane"
            />

            <MyTextInput
              label="My label"
              name="primary_gap"
              type="text"
              placeholder="Jane"
            />
          </div>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}
