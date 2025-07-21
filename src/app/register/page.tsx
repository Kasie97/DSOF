'use client'
import { useEffect } from "react";

export default function RegistrationPage() {
  useEffect(() => {
    // Load Tally embed script on client side only
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <section
        className="pt-4 h-60 flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(to right,
            #ADFF2F,  /* light green */
            #008000,  /* dark green */
            #d18b11,  /* cream */
            #FEBE10,  /* beige */
            #e86d30   /* brown */
          )`,
        }}
      >
        <h1 className="text-white text-4xl font-bold">Registration Page</h1>
      </section>

      <div className="relative w-full h-[calc(100vh-15rem)]">
        <iframe
          data-tally-src="https://tally.so/r/megYRx?transparentBackground=1&formEventsForwarding=1"
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="Participant Registration form"
          className="absolute top-0 left-0 w-full h-full border-0"
        ></iframe>
      </div>
    </>
  );
}
