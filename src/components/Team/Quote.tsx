import Typography from "../common/Typography"

const Quote = () => {
  return (
    <section className="relative mx-auto px-8 py-8 sm:px-16 lg:px-24 lg:py-16">
      <Typography type="h1" className="text-center font-display text-xl font-medium md:text-2xl" custom={true}>
        We Are EIC
      </Typography>
      <Typography
        type="h2"
        className="my-6 text-center font-display text-3xl font-medium md:text-4xl lg:text-5xl"
        custom={true}
      >
        <span className="text-tomato">E</span>ngineering <span className="text-tomato">I</span>nnovator{" "}
        <span className="text-tomato">C</span>lub
      </Typography>
      <Typography
        type="h3"
        className="my-6 text-center font-display text-lg font-medium text-tomato lg:text-3xl"
        custom={true}
      >
        {`We're creating the best in building and integrating automations to robots.`}
      </Typography>
    </section>
  )
}

export default Quote
