import React from "react";
import PropTypes from "prop-types";
import { Formik, Form, FastField } from "formik";
import { CgAdd } from "react-icons/cg";

import { validationSchema } from "./validationSchema";
import { SidebarContainer, CreateItem } from "./styled";
import { Button } from "../base/Buttons";
import { Input } from "../base/Inputs";
import { Label } from "../base/Labels";
import { InputError } from "../base/Errors";

const SidebarCreation = ({ addElement, setElements, elements }) => {
  return (
    <SidebarContainer>
      <h3>Outils de créations</h3>

      <Formik
        initialValues={{ skillInput: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          addElement(setElements, elements, values.skillInput);
          actions.setSubmitting(false);
        }}
      >
        {({ errors, touched }) => {
          return (
            <Form id="skillForm">
              <CreateItem>
                <Label>Caractéristique</Label>
                <div>
                  <FastField
                    id="skillInput"
                    name="skillInput"
                    type="text"
                    component={({ field, ...props }) => (
                      <Input {...field} {...props} />
                    )}
                  />
                  {errors && errors.skillInput && touched.skillInput && (
                    <InputError>{errors.skillInput}</InputError>
                  )}
                </div>
                <Button type="submit">
                  <CgAdd />
                </Button>
              </CreateItem>
            </Form>
          );
        }}
      </Formik>
    </SidebarContainer>
  );
};

SidebarCreation.propTypes = {
  addElement: PropTypes.func.isRequired,
};

export default SidebarCreation;
