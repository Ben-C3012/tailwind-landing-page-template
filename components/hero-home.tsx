import PageIllustration from "@/components/page-illustration";


export default function HeroHome() {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <div
              className="mb-6  [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]"
              data-aos="zoom-y-out"
            >

            </div>
            <h1
              dir="rtl"
              className="mb-6 border-y text-7xl font-thin [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl "
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              הדרכות אבטחת מידע ופיתוח
            </h1>
            <h1
              dir="rtl"
              className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              לדור הבא
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                dir="rtl"
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                אנחנו מספקים הדרכות אבטחת מידע ופיתוח מקיפות ומקצועיות לכל דרגות המיומנות. כל הקורסים מועברים על ידי מומחים בתחום האבטחה ומותאמים לצרכי השוק הישראלי.
              </p>
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >

                  <a
                    className="mr-3 btn w-full bg-white text-gray-800 shadow hover:bg-gray-50 sm:ml-4 sm:w-auto"
                    href="#features-planet"
                  >
                    קראו עוד
                  </a>


                  <a
                    className="btn group mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="/contact">
                    <span dir="rtl" className="relative inline-flex items-center">
                      להזמנת הדרכה{" "}
                      <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:-translate-x-0.5">
                        &nbsp;
                        -&gt;
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
