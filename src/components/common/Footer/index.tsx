import Typography from "../Typography"
import Sponsor from "./Sponsor"

export default function Footer() {
  return (
    <footer className="text-center p-10">
      <Sponsor />
      <Typography className="font-bold text-xs">© 2022 EIC Robocup, Chulalongkorn University</Typography>
    </footer>
  )
}
