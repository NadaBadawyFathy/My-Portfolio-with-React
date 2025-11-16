import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  useTheme,
  Typography,
  Stack,
  Alert,
  Grid,
  TextField,
  Button,
  Snackbar,
  CircularProgress,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

import Lottie from "lottie-react";
import messageDone from "../../animation/Done.json";
import contactUs from "../../animation/contact us.json";

import MailIcon from "@mui/icons-material/Mail";
import SendIcon from "@mui/icons-material/Send";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import emailjs from "@emailjs/browser";

export default function Contact() {
  const theme = useTheme();
  const displayAnimation = useMediaQuery("(min-width:850px)");
  const lottieRef = useRef();

  // Snackbar State
  const [stateSnackbar, setStateSnackbar] = useState({
    open: false,
    vertical: "top",
    horizontal: "right",
  });
  const [successSnackbar, setSuccessSnackbar] = useState(true);
  const [messageSent, setMessageSent] = useState(false);

  const { vertical, horizontal, open } = stateSnackbar;

  const handleClick = () => {
    setStateSnackbar({ ...stateSnackbar, open: true });
  };

  const handleClose = () => {
    setStateSnackbar({ ...stateSnackbar, open: false });
  };

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(0.7);
    }
  }, []);

  // Validation Schema
  const validationSchema = Yup.object({
    contact_email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string()
      .required("Message is required")
      .min(10, "Message must be at least 10 characters"),
  });

  // EmailJS Sending
  const sendEmail = (values, setSubmitting, resetForm) => {
    emailjs
      .send(
        "service_3g47xhc", // Service ID بتاعك
        "template_ruypwy8", // Template ID بتاعك
        {
          from_email: values.contact_email,
          message: values.message,
        },
        "M5x3lpRBCDVlAcifK" // Public Key بتاعك
      )
      .then(() => {
        setSuccessSnackbar(true);
        setMessageSent(true);
        resetForm();
        handleClick();
      })
      .catch(() => {
        setSuccessSnackbar(false);
        setMessageSent(false);
        handleClick();
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <Box>
      {/* Snackbar */}
      <Box sx={{ width: 500 }}>
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          anchorOrigin={{ vertical, horizontal }}
        >
          <Alert
            onClose={handleClose}
            severity={successSnackbar ? "success" : "error"}
            sx={{ width: "100%" }}
          >
            {successSnackbar
              ? "Your message has been sent successfully."
              : "Sorry... Your message was not sent."}
          </Alert>
        </Snackbar>
      </Box>

      <Grid container spacing={2} alignItems="center">
        {/* FORM SIDE */}
        <Grid item xs={12} lg={7} sm={displayAnimation ? 7 : 12}>
          <Stack direction="row" alignItems="center">
            <MailIcon
              fontSize="large"
              sx={{ color: theme.palette.text.primary, mr: 1 }}
            />
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ color: theme.palette.text.primary }}
            >
              Contact Me
            </Typography>
          </Stack>

          <Typography
            variant="body2"
            sx={{
              my: 2,
              color: theme.palette.text.secondary,
              letterSpacing: "1px",
              ml: !displayAnimation ? "10px" : undefined,
            }}
          >
            Contact me for more information or collaboration opportunities.
          </Typography>

          {/* FORMIK FORM */}
          <Formik
            initialValues={{ contact_email: "", message: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) =>
              sendEmail(values, setSubmitting, resetForm)
            }
          >
            {({ isSubmitting, isValid, dirty }) => (
              <Form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  marginTop: "24px",
                  width: displayAnimation ? "70%" : "95%",
                  marginLeft: !displayAnimation ? "auto" : undefined,
                  marginRight: !displayAnimation ? "auto" : undefined,
                }}
              >
                {/* EMAIL */}
                <Field
                  as={TextField}
                  label="Email"
                  variant="filled"
                  name="contact_email"
                  sx={{
                    ".MuiInputBase-root": {
                      backgroundColor:
                        theme.palette.mode === "dark"
                          ? "rgba(255,255,255,0.04)"
                          : "rgb(0 0 0 / 5%)",
                    },
                    ".MuiFormLabel-root": {
                      color: "rgb(225, 173, 76) !important",
                    },
                  }}
                />
                <ErrorMessage
                  name="contact_email"
                  component="div"
                  style={{ color: "red" }}
                />

                {/* MESSAGE */}
                <Field
                  as={TextField}
                  label="Your Message"
                  multiline
                  rows={4}
                  variant="filled"
                  name="message"
                  sx={{
                    ".MuiFormLabel-root": {
                      color: "rgb(225, 173, 76) !important",
                    },
                    ".MuiInputBase-root": {
                      backgroundColor:
                        theme.palette.mode === "dark"
                          ? "rgba(255,255,255,0.04)"
                          : "rgb(0 0 0 / 5%)",
                    },
                  }}
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  style={{ color: "red" }}
                />

                {/* BUTTON */}
                <Box textAlign="end">
                  <Button
                    type="submit"
                    disabled={isSubmitting || !isValid || !dirty}
                    variant="contained"
                    sx={{
                      bgcolor: "#7E6247",
                      "&:hover": { bgcolor: "#6b533c" },
                      textTransform: "none",
                      borderRadius: "10px",
                    }}
                    endIcon={
                      isSubmitting ? (
                        <CircularProgress size={18} sx={{ color: "white" }} />
                      ) : (
                        <SendIcon />
                      )
                    }
                  >
                    {isSubmitting ? "Sending..." : "Send"}
                  </Button>
                </Box>

                {/* DONE MESSAGE */}
                {messageSent && (
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Lottie
                      style={{ height: 35, marginRight: 3 }}
                      animationData={messageDone}
                      loop={false}
                    />
                    <Typography
                      variant="body1"
                      sx={{ letterSpacing: "0.8px" }}
                    >
                      Your message has been sent successfully.
                    </Typography>
                  </Box>
                )}
              </Form>
            )}
          </Formik>
        </Grid>

        {/* ANIMATION SIDE */}
        {displayAnimation && (
          <Grid item xs={12} lg={5} sm={5}>
            <Lottie
              style={{ height: "85%", width: "85%" }}
              animationData={contactUs}
              lottieRef={lottieRef}
            />
          </Grid>
        )}
      </Grid>
    </Box>
  );
}
