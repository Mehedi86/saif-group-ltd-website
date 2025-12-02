import React from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link';
import Image from 'next/image';

export default function CompanyIntro({ data }: { data: any[] }) {

    const companyIntro = data.find((item) => item?.content_type?.toLowerCase() === "company intro")

    if (!companyIntro) {
        return null;
    }

    return (
        <section className="bg-linear-to-r from-[#c8b3d6] to-[#17375f] text-white py-16 relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-8 ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-6">{companyIntro?.title}</h2>
                        <div
                            className="prose max-w-none text-white mb-4 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: companyIntro?.details }}
                        />
                        <Button
                            asChild
                            className="bg-neutral-800 hover:bg-neutral-600 text-white"
                        >
                            <Link href="/about">Learn More About Us</Link>
                        </Button>


                    </div>
                    <div className="flex justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-[#17375f]/20 rounded-lg blur-sm"></div>
                            <Image
                                src="/residential-apartment-complex.png"
                                alt="Company Building"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg relative"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
