import React, { FormEventHandler, useEffect } from "react"
import Router, { useRouter } from "next/router"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper"
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons"
import Layout from "../components/Layout"
import StepWrapper from "../components/StepWrapper"
import StepSelectTime from "../components/StepSelectTime"
import StepSelectPlace from "../components/StepSelectPlace"
import StepShowSummary from "../components/StepShowSummary"
import { useTypedSelector } from "../hooks/useTypedSelector"
import { useActions } from "../hooks/useActions"

// ??? not working
Router.events.on("hashChangeStart", (url) => {
  console.log("Loading", url)
})

// reservation's steps
const steps: string[] = ["Select time", "Select place", "Summary"]

const Home: React.FC = () => {
  const router = useRouter()
  const { activeStep } = useTypedSelector((state) => state.step)

  useEffect(() => {
    // Navigate to different url paths for steps
    router.push(`#step${activeStep + 1}`, undefined, { shallow: true })
  }, [activeStep])

  const { setActiveStep } = useActions()

  const prev = () => setActiveStep(activeStep - 1)

  const next = () => setActiveStep(activeStep + 1)

  const submit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    alert("Your reservation submitted")
  }

  return (
    <Layout>
      <Paper elevation={0} sx={{ p: 2 }}>
        {/* FORM, ??? formik */}
        <form onSubmit={submit}>
          <Typography variant="h4" component="h1" align="center" gutterBottom>
            Reservation process
          </Typography>

          {/* Steps */}
          <StepWrapper steps={steps} activeStep={activeStep}>
            {activeStep === 0 && <StepSelectTime />}
            {activeStep === 1 && <StepSelectPlace />}
            {activeStep === 2 && <StepShowSummary />}
          </StepWrapper>
          {/* End Steps */}

          {/* Buttons: Prev, Next, Submit */}
          <Grid container justifyContent="flex-end">
            {activeStep !== 0 && (
              <Button
                onClick={prev}
                startIcon={<KeyboardArrowLeft />}
                sx={{ mr: 2 }}
              >
                Prev
              </Button>
            )}
            {activeStep < steps.length - 1 && (
              <Button
                onClick={next}
                variant="contained"
                endIcon={<KeyboardArrowRight />}
              >
                Next
              </Button>
            )}
            {activeStep === steps.length - 1 && (
              <Button type="submit" variant="contained">
                Submit
              </Button>
            )}
          </Grid>
          {/* End Buttons */}
        </form>
      </Paper>
    </Layout>
  )
}

export default Home
