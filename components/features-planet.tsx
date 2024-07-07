import Image from "next/image";
import PlanetImg from "@/public/images/planet.png";
import PlanetOverlayImg from "@/public/images/planet-overlay.svg";
import PlanetTagImg01 from "@/public/images/planet-tag-01.png";
import PlanetTagImg02 from "@/public/images/planet-tag-02.png";
import PlanetTagImg03 from "@/public/images/planet-tag-03.png";
import PlanetTagImg04 from "@/public/images/planet-tag-04.png";


export default function FeaturesPlanet() {
  return (
    <section id="features-planet" className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <h2 dir="rtl" className="text-3xl font-bold text-gray-200 md:text-4xl">
              מנחים אותך בעולם דיגיטלי ומשתנה
            </h2>
          </div>
          {/* Planet */}
          <div className="pb-16 md:pb-20" data-aos="zoom-y-out">
            <div className="text-center">
              <div className="relative inline-flex rounded-full before:absolute before:inset-0 before:-z-10 before:scale-[.85] before:animate-[pulse_4s_cubic-bezier(.4,0,.6,1)_infinite] before:bg-gradient-to-b before:from-blue-900 before:to-sky-700/50 before:blur-3xl after:absolute after:inset-0 after:rounded-[inherit] after:[background:radial-gradient(closest-side,theme(colors.blue.500),transparent)]">
                <Image
                  className="rounded-full bg-gray-900"
                  src={PlanetImg}
                  width={400}
                  height={400}
                  alt="Planet"
                />
                <div className="pointer-events-none" aria-hidden="true">
                  <Image
                    className="absolute -right-64 -top-20 z-10 max-w-none"
                    src={PlanetOverlayImg}
                    width={789}
                    height={755}
                    alt="Planet decoration"
                  />
                  <div>
                    {/* <Image
                      className="absolute -left-28 top-16 z-10 animate-[float_4s_ease-in-out_infinite_both] opacity-80 transition-opacity duration-500"
                      src={PlanetTagImg01}
                      width={253}
                      height={56}
                      alt="Tag 01"
                    /> */}
                    {/* <Image
                      className="absolute left-56 top-7 z-10 animate-[float_4s_ease-in-out_infinite_1s_both] opacity-30 transition-opacity duration-500"
                      src={PlanetTagImg02}
                      width={241}
                      height={56}
                      alt="Tag 02"
                    /> */}
                    {/* <Image
                      className="absolute -left-20 bottom-24 z-10 animate-[float_4s_ease-in-out_infinite_2s_both] opacity-25 transition-opacity duration-500"
                      src={PlanetTagImg03}
                      width={243}
                      height={56}
                      alt="Tag 03"
                    /> */}
                    {/* <Image
                      className="absolute bottom-32 left-64 z-10 animate-[float_4s_ease-in-out_infinite_3s_both] opacity-80 transition-opacity duration-500"
                      src={PlanetTagImg04}
                      width={251}
                      height={56}
                      alt="Tag 04"
                    /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Grid */}
          <div className="grid  overflow-hidden sm:grid-cols-2 lg:grid-cols-3 [&>*]:relative [&>*]:p-6 [&>*]:before:absolute [&>*]:before:bg-gray-800 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-gray-800 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] md:[&>*]:p-10">
            <article data-aos="text-rise-up">
              <h3 dir="rtl" className="mb-2  flex items-center space-x-2 font-medium text-gray-200">
                {/* <svg
                  className="fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                >
                  <path d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm2-4a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4Zm1 10a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H5Z" />
                </svg> */}
                <svg
                  className="fill-blue-500 "
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                >
                  <path d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm2-4a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4Zm4 10a1 1 0 1 1 0 2h4a1 1 0 1 1 0-2H8Z" />
                  <path d="M3 6a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H3Z" />
                </svg>

                &nbsp;

                <span dir="rtl">הדרכות סייבר ואבטחת מידע</span>
              </h3>
              <p dir="rtl" className="text-[15px] text-gray-400">
                הדרכות המקנות כלים ומבוא לעולם הסייבר ואבטחת המידע. למדו להגן על עצמכם מפני הונאות.
              </p>
            </article>
            <article data-aos="text-rise-up">
              <h3 dir="rtl" className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                {/* <svg
                  className="fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                >
                  <path d="M14.29 2.614a1 1 0 0 0-1.58-1.228L6.407 9.492l-3.199-3.2a1 1 0 1 0-1.414 1.415l4 4a1 1 0 0 0 1.496-.093l7-9ZM1 14a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H1Z" />
                </svg> */}

                <svg
                  className="fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 556.23 556.23"
                >
                  <g>
                    <g>
                      <path d="M177.097,556.23h202.037c17.623,0,47.496-23.934,47.496-42.113V32.025C426.63,14.363,412.104,0,394.253,0H161.979c-17.853,0-32.378,14.363-32.378,32.025v482.084C129.601,532.297,159.474,556.23,177.097,556.23z M143.944,32.025c0-9.754,8.09-17.681,18.035-17.681h232.274c9.943,0,18.033,7.927,18.033,17.681v19.278H143.944V32.025z M143.944,58.475h268.342v433.258H143.944V58.475z M143.944,498.904h268.342v15.213c0,9.086-22.309,27.77-33.152,27.77H177.097c-10.844,0-33.153-18.684-33.153-27.77V498.904L143.944,498.904z" />
                      <path d="M251.934,533.979h51.245c5.92,0,10.729-4.809,10.729-10.729c0-5.91-4.809-10.719-10.729-10.719h-51.245c-5.919,0-10.729,4.809-10.729,10.719C241.204,529.18,246.014,533.979,251.934,533.979z M251.934,519.703h51.245c1.961,0,3.557,1.586,3.557,3.547s-1.596,3.557-3.557,3.557h-51.245c-1.96,0-3.558-1.596-3.558-3.557S249.973,519.703,251.934,519.703z" />
                      <path d="M200.611,518.508h3.854c1.233,0,2.228,0.994,2.228,2.219c0,1.232-0.995,2.236-2.228,2.236H193.43c-1.32,0-2.391,1.072-2.391,2.391c0,1.32,1.071,2.391,2.391,2.391h11.035c3.863,0,7.009-3.145,7.009-7.018c0-3.863-3.146-7-7.009-7h-3.854v-3.605l-10.327,5.957l10.327,5.967V518.508z" />
                      <path d="M348.763,518.508h13.436c1.32,0,2.391-1.072,2.391-2.391c0-1.32-1.07-2.391-2.391-2.391h-13.436c-1.318,0-2.391,1.07-2.391,2.391C346.372,517.436,347.444,518.508,348.763,518.508z" />
                      <path d="M348.763,524.809h13.436c1.32,0,2.391-1.07,2.391-2.391c0-1.318-1.07-2.391-2.391-2.391h-13.436c-1.318,0-2.391,1.072-2.391,2.391C346.372,523.738,347.444,524.809,348.763,524.809z" />
                      <path d="M348.763,530.775h13.436c1.32,0,2.391-1.07,2.391-2.391c0-1.318-1.07-2.391-2.391-2.391h-13.436c-1.318,0-2.391,1.072-2.391,2.391C346.372,529.705,347.444,530.775,348.763,530.775z" />
                    </g>
                  </g>
                </svg>

                &nbsp;

                <span>סיכונים והשפעות של רשתות חברתיות</span>
              </h3>
              <p dir="rtl" className="text-[15px] text-gray-400">
                הדרכות על הסיכונים וההשפעות של רשתות חברתיות על צעירים ומבוגרים.
              </p>
            </article>
            <article data-aos="text-rise-up">

              <h3 dir="rtl" className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                {/* <svg
                  className="fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                >
                  <path
                    d="M2.248 6.285a1 1 0 0 1-1.916-.57A8.014 8.014 0 0 1 5.715.332a1 1 0 0 1 .57 1.916 6.014 6.014 0 0 0-4.037 4.037Z"
                    opacity=".3"
                  />
                  <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1.715-6.752a1 1 0 0 1 .57-1.916 8.014 8.014 0 0 1 5.383 5.383 1 1 0 1 1-1.916.57 6.014 6.014 0 0 0-4.037-4.037Zm4.037 7.467a1 1 0 1 1 1.916.57 8.014 8.014 0 0 1-5.383 5.383 1 1 0 1 1-.57-1.916 6.014 6.014 0 0 0 4.037-4.037Zm-7.467 4.037a1 1 0 1 1-.57 1.916 8.014 8.014 0 0 1-5.383-5.383 1 1 0 1 1 1.916-.57 6.014 6.014 0 0 0 4.037 4.037Z" />
                </svg> */}

                <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#3B82F6"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M4.6138 8.54479L4.1875 10.25H2C1.58579 10.25 1.25 10.5858 1.25 11C1.25 11.4142 1.58579 11.75 2 11.75H22C22.4142 11.75 22.75 11.4142 22.75 11C22.75 10.5858 22.4142 10.25 22 10.25H19.8125L19.3862 8.54479C18.8405 6.36211 18.5677 5.27077 17.7539 4.63538C16.9401 4 15.8152 4 13.5653 4H10.4347C8.1848 4 7.05988 4 6.24609 4.63538C5.43231 5.27077 5.15947 6.36211 4.6138 8.54479ZM6.5 21C8.12316 21 9.48826 19.8951 9.88417 18.3963L10.9938 17.8415C11.6272 17.5248 12.3728 17.5248 13.0062 17.8415L14.1158 18.3963C14.5117 19.8951 15.8768 21 17.5 21C19.433 21 21 19.433 21 17.5C21 15.567 19.433 14 17.5 14C15.8399 14 14.4498 15.1558 14.0903 16.7065L13.6771 16.4999C12.6213 15.972 11.3787 15.972 10.3229 16.4999L9.90967 16.7065C9.55023 15.1558 8.16009 14 6.5 14C4.567 14 3 15.567 3 17.5C3 19.433 4.567 21 6.5 21Z" fill="#3B82F6"></path> </g></svg>

                &nbsp;

                <span dir="rtl">אנונימיות &amp; פרטיות</span>
              </h3>
              <p dir="rtl" className="text-[15px] text-gray-400">
                הדרכות על פרטיות ואנונימיות ברשת וברשתות חברתיות.
              </p>
            </article>
            <article data-aos="text-drop-down">
              <h3 dir="rtl" className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg
                  className="fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                >
                  <path d="M8 0a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1Zm6 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1a1 1 0 1 1 0 2h-1a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h1a1 1 0 1 1 0 2h-1ZM1 1a1 1 0 0 0 0 2h1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 1 0 0 2h1a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H1Z" />
                </svg>

                &nbsp;
                <span dir="rtl">הדרכות  פיתוח תוכנה לבני נוער</span>
              </h3>
              <p dir="rtl" className="text-[15px] text-gray-400">
              במקום להוציא סכומים גבוהים על קורסים בתוכנה, תוכלו ללמוד בצורה שמשתלמת עבורכם, בסיכון נמוך.               </p>
            </article>
            <article data-aos="text-drop-down">
              <h3 dir="rtl" className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                {/* <svg
                  className="fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                >
                  <path d="M10.284.33a1 1 0 1 0-.574 1.917 6.049 6.049 0 0 1 2.417 1.395A1 1 0 0 0 13.5 2.188 8.034 8.034 0 0 0 10.284.33ZM6.288 2.248A1 1 0 0 0 5.718.33 8.036 8.036 0 0 0 2.5 2.187a1 1 0 0 0 1.372 1.455 6.036 6.036 0 0 1 2.415-1.395ZM1.42 5.401a1 1 0 0 1 .742 1.204 6.025 6.025 0 0 0 0 2.79 1 1 0 0 1-1.946.462 8.026 8.026 0 0 1 0-3.714A1 1 0 0 1 1.421 5.4Zm2.452 6.957A1 1 0 0 0 2.5 13.812a8.036 8.036 0 0 0 3.216 1.857 1 1 0 0 0 .574-1.916 6.044 6.044 0 0 1-2.417-1.395Zm9.668.04a1 1 0 0 1-.041 1.414 8.033 8.033 0 0 1-3.217 1.857 1 1 0 1 1-.571-1.917 6.035 6.035 0 0 0 2.415-1.395 1 1 0 0 1 1.414.042Zm2.242-6.255a1 1 0 1 0-1.946.462 6.03 6.03 0 0 1 0 2.79 1 1 0 1 0 1.946.462 8.022 8.022 0 0 0 0-3.714Z" /> */}
                {/* </svg> */}
                <svg
                  className="fill-blue-500"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M20.501 6.028V6h-.02A10.28 10.28 0 0 0 4.519 6H4.5v.028a10.262 10.262 0 0 0 0 12.944V19h.02a10.28 10.28 0 0 0 15.962 0h.021v-.028a10.262 10.262 0 0 0 0-12.944zM13 6V3.272A4.533 4.533 0 0 1 15.54 6zm2.935 1a16.827 16.827 0 0 1 .853 5H13V7zM12 3.272V6H9.46A4.533 4.533 0 0 1 12 3.272zM12 7v5H8.212a16.827 16.827 0 0 1 .853-5zm-4.787 5H3.226a9.234 9.234 0 0 1 1.792-5h2.984a17.952 17.952 0 0 0-.79 5zm0 1a17.952 17.952 0 0 0 .789 5H5.018a9.234 9.234 0 0 1-1.792-5zm1 0H12v5H9.065a16.827 16.827 0 0 1-.853-5zM12 19v2.728A4.533 4.533 0 0 1 9.46 19zm1 2.728V19h2.54A4.533 4.533 0 0 1 13 21.728zM13 18v-5h3.788a16.827 16.827 0 0 1-.853 5zm4.787-5h3.987a9.234 9.234 0 0 1-1.792 5h-2.984a17.952 17.952 0 0 0 .79-5zm0-1a17.952 17.952 0 0 0-.789-5h2.984a9.234 9.234 0 0 1 1.792 5zm1.352-6h-2.501a8.524 8.524 0 0 0-1.441-2.398A9.306 9.306 0 0 1 19.139 6zM9.803 3.602A8.524 8.524 0 0 0 8.363 6H5.86a9.306 9.306 0 0 1 3.942-2.398zM5.861 19h2.501a8.524 8.524 0 0 0 1.441 2.398A9.306 9.306 0 0 1 5.861 19zm9.336 2.398A8.524 8.524 0 0 0 16.637 19h2.502a9.306 9.306 0 0 1-3.942 2.398z"></path><path fill="none" d="M0 0h24v24H0z"></path></g></svg>

                &nbsp;

                <span>הדרכות על סיכונים באינטרנט </span>
              </h3>
              <p dir="rtl" className="text-[15px] text-gray-400">
                אמצעי זהירות ובטיחות ברשת והגנה על פרטיות. הונאות, פישינג, וירוסים ועוד.
              </p>
            </article>
            <article data-aos="text-drop-down">
              <h3 dir="rtl" className="mb-2 flex items-center space-x-2 font-medium text-gray-200">

                <svg
                  className="fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={23}
                  height={23}
                  viewBox="0 0 512 512"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="3.072"></g>
                  <g id="SVGRepo_iconCarrier">
                    <title>ai</title>
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g id="icon" fill="#3B82F6" transform="translate(64.000000, 64.000000)">
                        <path d="M320,64 L320,320 L64,320 L64,64 L320,64 Z M171.749388,128 L146.817842,128 L99.4840387,256 L121.976629,256 L130.913039,230.977 L187.575039,230.977 L196.319607,256 L220.167172,256 L171.749388,128 Z M260.093778,128 L237.691519,128 L237.691519,256 L260.093778,256 L260.093778,128 Z M159.094727,149.47526 L181.409039,213.333 L137.135039,213.333 L159.094727,149.47526 Z M341.333333,256 L384,256 L384,298.666667 L341.333333,298.666667 L341.333333,256 Z M85.3333333,341.333333 L128,341.333333 L128,384 L85.3333333,384 L85.3333333,341.333333 Z M170.666667,341.333333 L213.333333,341.333333 L213.333333,384 L170.666667,384 L170.666667,341.333333 Z M85.3333333,0 L128,0 L128,42.6666667 L85.3333333,42.6666667 L85.3333333,0 Z M256,341.333333 L298.666667,341.333333 L298.666667,384 L256,384 L256,341.333333 Z M170.666667,0 L213.333333,0 L213.333333,42.6666667 L170.666667,42.6666667 L170.666667,0 Z M256,0 L298.666667,0 L298.666667,42.6666667 L256,42.6666667 L256,0 Z M341.333333,170.666667 L384,170.666667 L384,213.333333 L341.333333,213.333333 L341.333333,170.666667 Z M0,256 L42.6666667,256 L42.6666667,298.666667 L0,298.666667 L0,256 Z M341.333333,85.3333333 L384,85.3333333 L384,128 L341.333333,128 L341.333333,85.3333333 Z M0,170.666667 L42.6666667,170.666667 L42.6666667,213.333333 L0,213.333333 L0,170.666667 Z M0,85.3333333 L42.6666667,85.3333333 L42.6666667,128 L0,128 L0,85.3333333 Z" id="Combined-Shape"> </path>
                      </g>
                    </g>
                  </g>
                </svg>

                &nbsp;

                <span>השפעת  AI על העולם</span>
              </h3>
              <p dir="rtl" className="text-[15px] text-gray-400">
                הדרכות על השפעת AI על העולם והשימוש בה במגוון תחומים.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
