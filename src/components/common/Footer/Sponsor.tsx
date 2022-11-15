export default function Sponsor() {
  return (
    <div className="flex justify-center gap-2 my-8">
      {Array(8)
        .fill("")
        .map((_, i) => i)
        .map((e) => (
          <div key={e} className="bg-tomato w-8 h-8" />
        ))}
    </div>
  )
}
