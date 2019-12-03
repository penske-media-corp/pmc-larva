o-email-capture-form is an object intended to collect emails via the ExactTarget API. It accepts an array of c-hidden-fields for this the Opted In and Date ExactTarget data. 

Although it could be used to collect emails via other services, developers should consider creating project-level patterns for anything other than ExactTarget. 

Also note that o-email-capture-form should not be used to provide an email input in a longer form – it should be used only when a form required a single input for an email.

This pattern is intended to go along with the EmailCapture larva-js package that will handle appending the input value to a success URL when the form is submitted. 

## Available configuraitons:

* `o-email-capture-form.minimal` – This configuration shows the input as a single line, and the submit button as a small arrow to the right of the input.