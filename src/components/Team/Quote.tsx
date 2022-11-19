import Typography from "../common/Typography"

const Quote = () => {
  return (
    <section className="relative mx-auto px-8 sm:px-16 lg:px-24 py-8 lg:py-16">
      <Typography type="h1" className="text-xl md:text-2xl text-center font-medium font-display" custom={true}>
        We Are EIC
      </Typography>
      <Typography
        type="h2"
        className="my-6 text-3xl md:text-4xl lg:text-5xl text-center font-medium font-display"
        custom={true}
      >
        <span className="text-tomato">E</span>ngineering <span className="text-tomato">I</span>nnovator{" "}
        <span className="text-tomato">C</span>lub
      </Typography>
      <Typography
        type="h3"
        className="my-6 text-lg lg:text-3xl text-center font-medium font-display text-tomato"
        custom={true}
      >
        {`We're creating the best in building and integrating automations to robots.`}
      </Typography>
    </section>
  )
}

export default Quote
