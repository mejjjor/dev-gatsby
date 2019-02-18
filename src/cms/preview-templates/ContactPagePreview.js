import React from "react";
import PropTypes from "prop-types";
import { ContactPageTemplate } from "../../templates/contact-page";

const ContactPagePreview = ({ entry, widgetFor }) => {
  console.log("ezaezaeza", widgetFor("body"));
  console.log("ezaezaeza", entry.getIn(["data", "title"]));
  return (
    <ContactPageTemplate
      title={entry.getIn(["data", "title"])}
      mail={entry.getIn(["data", "mail"])}
      phone={entry.getIn(["data", "phone"])}
      body={widgetFor("body")}
    />
  );
};

ContactPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default ContactPagePreview;
