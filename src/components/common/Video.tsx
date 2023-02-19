export default function Video({ src }: { src: string }) {
  return (
    <section className="relative">
      <div className="h-48 bg-creamy" />
      <iframe
        className="absolute -top-4 left-1/2 h-full w-[90vw] -translate-x-1/2 rounded-md md:w-[700px] md:rounded-2xl"
        width="560"
        height="315"
        src={src}
        title="YouTube video player"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <div className="h-48 bg-tomato" />
    </section>
  )
}
