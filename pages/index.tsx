import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  useEffect(() => {
    var countDownDate = new Date("May 14, 2022 21:00:00 UTC+5:30").getTime();

    var timer = setInterval(function () {
      // Current date and time
      var now = new Date().getTime();

      // Difference between now and the count down date
      var diff = countDownDate - now;

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

      <div className="w-screen h-screen bg-[#fc0] flex flex-col items-center justify-center pb-20">
        <div className="text-4xl font-semibold font-OpenSans pb-10">
          Archathon ends in 🏁
        </div>
        <div className="flex flex-wrap sm:flex-nowrap gap-y-2 gap-x-2 sm:gap-x-4 mt-10 text-black text-[12rem] font-Poppins font-semibold">
          <div id="time-days" className=""></div>:
          <div id="time-hours" className=""></div>:
          <div id="time-mins" className=""></div>:
          <div id="time-secs" className=""></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
