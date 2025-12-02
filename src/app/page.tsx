import CompanyIntro from "@/components/home/CompanyIntro";
import NoticesEventes from "@/components/home/NoticesEventes";
import { API_URL } from "@/lib/api";
import { serverDataFetcher } from "@/utils/serverDataFetcher";
import Image from "next/image";

export default async function Home() {

  const aboutUsData = await serverDataFetcher<{ abouts: any[] }>(
    `${API_URL.ABOUT_US.ALL}`
  );

  const noticeData = await serverDataFetcher<{ notices: any[] }>(`${API_URL.NOTICE.ALL}`)


  return (
    <div>
      {/* company Intro */}
      <CompanyIntro data={aboutUsData?.abouts} />

      {/* notices and Events */}
      <NoticesEventes
        title="NOTICES & EVENTS"
        data={noticeData?.notices[1]} />
    </div>
  );
}
