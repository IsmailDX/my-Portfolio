import React from "react";
import formbg from "@/public/images/formback.jpg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

type Props = {
  language: string;
  colorMode: string;
  emailSent: () => void;
};

const SectionSeven = ({ language, colorMode, emailSent }: Props) => {
  // Define validation schema using Yup
  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Your Name is required")
      .required("Your Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  const handleSubmit = async (values, actions) => {
    const serviceId = "service_f8ycjfr";
    const templateId = "template_q4wc9gq";
    const publickey = "4p4we3TOm95saihiw";

    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publickey,
      template_params: {
        from_name: values.firstName,
        from_email: values.email,
        to_name: "Mr. Ismail the Great",
        message: values.message,
      },
    };

    try {
      const response = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data
      );
      console.log(values);
      actions.resetForm();
      emailSent();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section
      className="w-full h-fit bg-cover bg-no-repeat md:bg-right-bottom bg-center md:bg-fixed flex justify-center 
      overflow-hidden select-none bg-[#fafafa]"
      style={{
        backgroundImage: colorMode === "dark" ? `url(${formbg.src})` : "",
      }}
    >
      <div
        className={`w-full max-w-[2440px] h-full flex items-center md:py-[5%] py-[6%] lg:px-32 md:px-24 px-5 space-y-[1%]`}
      >
        <Formik
          initialValues={{ firstName: "", email: "", message: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="flex flex-col md:w-[50%] w-full space-y-5">
            <div>
              <label
                htmlFor="firstName"
                className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
              >
                Your Name
              </label>
              <Field
                type="text"
                id="firstName"
                name="firstName"
                className="borderStyles"
                placeholder="What's your name?"
                required
              />
              <div className="pt-2 text-red-500 text-xs">
                <ErrorMessage name="firstName" />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-md font-medium text-gray-900 dark:text-white "
              >
                Your Email
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className="borderStyles"
                placeholder="What's your email?"
                required
              />
              <div className="pt-2 text-red-500 text-xs">
                <ErrorMessage name="email" />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
              >
                Your Message
              </label>
              <Field
                as="textarea"
                id="message"
                name="message"
                className="borderStyles resize-y h-28"
                placeholder="What do you want to say?"
              />
            </div>
            <button
              type="submit"
              className="bg-transparent backdrop-blur-lg text-white border border-white rounded-lg py-2 px-4 hover:bg-white/10 hover:scale-105
              hover:text-[#f9e686]/90 transition-all duration-200 ease-out active:bg-white/30 active:text-lg focus:outline-none focus:ring-2
               focus:ring-[#f9e686] focus:ring-opacity-50"
            >
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </section>
  );
};

export default SectionSeven;
