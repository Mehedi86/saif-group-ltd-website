

import Image from "next/image";

export function CompanyMessageSection({ data }: { data: any[] }) {
  return (
    <section className="py-16 bg-gradient-to-r from-[#e94362]/5 to-[#17375f]/5">
      <div className="container mx-auto px-6 md:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#17375f]">
            Messages from Our Team
          </h2>
          <p className="text-gray-500 mt-2">Hear what our team has to say</p>
        </div>

        {/* Messages List */}
        <div className="flex flex-col gap-12">
          {data?.map((message, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 md:p-10 flex flex-col md:flex-row gap-8 md:gap-12 items-start hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="md:w-1/3 flex justify-center md:justify-start">
                <div className="relative w-64 h-64 md:w-full md:h-96 rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/placeholder-user.jpg"
                    alt={message.emp_name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="md:w-2/3 flex flex-col justify-start">
                <h3 className="text-lg md:text-xl font-medium text-gray-600 mb-2">
                  Message from
                </h3>
                <h2 className="text-2xl md:text-3xl font-bold text-[#17375f] mb-4">
                  {message.emp_designation}
                </h2>

                <div
                  className="prose max-w-none text-gray-700 leading-relaxed mb-4"
                  dangerouslySetInnerHTML={{ __html: message?.details }}
                />

                <p className="text-gray-600 font-medium mb-4">Thank You</p>

                {/* Signature */}
                <div className="mt-auto pt-4 border-t border-gray-200">
                  <p className="text-gray-800 font-semibold mb-1">
                    {message.emp_name}
                  </p>
                  <p className="text-gray-600 mb-1">{message.emp_designation}</p>
                  <p className="text-gray-600">Monir Group Limited</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CompanyMessageSection;
