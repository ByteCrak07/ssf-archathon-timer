import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [danger, setDanger] = useState(false);

  useEffect(() => {
    var countDownDate = new Date("May 14, 2022 21:00:00 UTC+5:30").getTime();

    var timer = setInterval(function () {
      // Current date and time
      var now = new Date().getTime();

      // Difference between now and the count down date
      var diff = countDownDate - now;

      if (now < new Date("May 14, 2022 20:50:00 UTC+5:30").getTime()) {
        setDanger(true);
      }

      var days, hours, minutes, seconds;

      if (diff < 0) {
        days = hours = minutes = seconds = 0;
      } else {
        days = Math.floor(diff / (1000 * 60 * 60 * 24));
        hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((diff % (1000 * 60)) / 1000);
      }

      // Display the values
      (
        document.getElementById("time-days") as Element
      ).innerHTML = `${days.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      })}`;
      (
        document.getElementById("time-hours") as Element
      ).innerHTML = `${hours.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      })}`;
      (
        document.getElementById("time-mins") as Element
      ).innerHTML = `${minutes.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      })}`;
      (
        document.getElementById("time-secs") as Element
      ).innerHTML = `${seconds.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      })}`;

      // If the count down is finished stop
      if (diff < 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <Head>
        <title>Archathon Timer</title>
        <meta name="description" content="Timer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className={`w-screen h-screen flex flex-col items-center justify-center pb-20 ${
          !danger ? "bg-[#fc0]" : "bg-red-500  text-white"
        }`}
      >
        <div className="text-4xl font-semibold font-OpenSans pb-10">
          Archathon ends in 🏁
        </div>
        <div className="flex flex-wrap sm:flex-nowrap gap-y-2 gap-x-2 sm:gap-x-4 mt-10 text-[10rem] font-Poppins font-semibold">
          <div className="flex flex-col items-center">
            <div id="time-days"></div>
            <span className="text-xl block">DAYS</span>
          </div>
          :
          <div className="flex flex-col items-center">
            <div id="time-hours"></div>
            <span className="text-xl block">HOURS</span>
          </div>
          :
          <div className="flex flex-col items-center">
            <div id="time-mins"></div>
            <span className="text-xl block">MINUTES</span>
          </div>
          :
          <div className="flex flex-col items-center">
            <div id="time-secs"></div>
            <span className="text-xl block">SECONDS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
