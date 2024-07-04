import Image from "next/image";
import TestimonialImg from "@/public/images/large-testimonial.jpg";
import AvatarImage from '@/public/images/avatar-testimonial.jpeg';
import Accordion from "./accordion";

export default function LargeTestimonial() {
  return (
    <section>
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="space-y-3 text-center">
            <div className="relative inline-flex">
              <svg
                className="absolute -left-6 -top-2 -z-10"
                width={40}
                height={49}
                viewBox="0 0 40 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.7976 -0.000136375L39.9352 23.4746L33.4178 31.7234L13.7686 11.4275L22.7976 -0.000136375ZM9.34947 17.0206L26.4871 40.4953L19.9697 48.7441L0.320491 28.4482L9.34947 17.0206Z"
                  fill="#D1D5DB"
                />
              </svg>
              <Image
                className="rounded-full"
                src={AvatarImage}
                width={80}
                height={80}
                alt="Large testimonial"
              />
            </div>
            <p dir="rtl" className="text-2xl font-bold text-gray-900 ">
              המטרה שלנו היא להרחיב את המודעות, הסכנות וההזדמנויות{" "}
              <em dir="rtl" className="italic text-blue-500 ">במרחב הדיגיטלי</em>,
             כדי שנוכל להיות בטוחים ואחראים יותר.
            </p>
            <div className="text-sm font-medium text-gray-500">
              <span dir="rt;" className="text-gray-700">בן </span>{" "}
              <span className="text-gray-400">/</span>{" "}
              <a className="text-blue-500 font-bold" href="#0">
               מדריך ראשי
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}
