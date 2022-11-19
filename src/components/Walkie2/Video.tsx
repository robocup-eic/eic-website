export default function Video() {
  return (
    <section className="relative">
      <div className="bg-creamy h-48" />
      <iframe
        className="rounded-md md:rounded-2xl absolute -top-4 left-1/2 -translate-x-1/2 w-[90vw] md:w-[700px] h-full"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/JoIOFo9wqqE"
        title="YouTube video player"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <div className="bg-tomato h-48" />
    </section>
  )
}
