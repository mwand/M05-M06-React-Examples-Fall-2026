
import { useState, useEffect } from "react";
import { type ITicker } from "../../Shared/types";
import Ticker from '../../Shared/Classes/Ticker'
import ClockDisplay from "../../Shared/Components/SimpleClockDisplay";

// build a clock and pass it to the clock display
export default function App() {
  const [clock, _] = useState<ITicker>(new Ticker(1000));

  return (
   <ClockDisplay name="demo1" key={1} clock={clock} />
  )

}