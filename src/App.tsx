import Button from "@atlaskit/button";
import FieldText from "@atlaskit/field-text";
import Form, {
  Field,
  FormFooter,
  FormHeader,
  FormSection
} from "@atlaskit/form";

import * as React from "react";
import styled from "./typed-components";

const Container = styled.div`
  display: "flex";
  width: "400px";
  margin: "0 auto";
  minheight: "60vh";
  flexdirection: "column";
`;

class App extends React.Component {
  public state = {
    eventResult:
      "Click into and out of the input above to trigger onBlur & onFocus in the Fieldbase"
  };

  public formRef: any;

  // Form Event Handlers
  public onSubmitHandler = () => {
    console.log("onSubmitHandler");
  };

  public onValidateHandler = () => {
    console.log("onValidateHandler");
  };

  public onResetHandler = () => {
    console.log("onResetHandler");
  };

  public onChangeHandler = () => {
    console.log("onChangeHandler");
  };
  public onBlurHandler = () => {
    console.log("onBlurHandler");
  };
  public onFocusHandler = () => {
    console.log("onFocusHandler");
  };

  // Footer Button Handlers
  public submitClickHandler = () => {
    this.formRef.submit();
  };

  public render() {
    return (
      <Container>
        <Form
          name="create-repo"
          onSubmit={this.onSubmitHandler}
          onReset={this.onResetHandler}
          ref={form => {
            this.formRef = form;
          }}
          action="//httpbin.org/get"
          method="GET"
          target="submitFrame"
        >
          <FormHeader title="Create a new repository" />

          <FormSection>
            <Field label="Repository name" isRequired={true}>
              <FieldText name="repo_name" shouldFitContainer={true} />
            </Field>
          </FormSection>

          <FormFooter
            actionsContent={[
              {
                id: "submit-button"
              },
              {}
            ]}
          >
            <Button appearance="primary" type="submit">
              Create repository
            </Button>
            <Button appearance="subtle">Cancel</Button>
          </FormFooter>
        </Form>
      </Container>
    );
  }
}

export default App;
