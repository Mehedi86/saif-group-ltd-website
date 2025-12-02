import CompanyIntro from "@/components/home/CompanyIntro";
import CompanyMessageSection from "@/components/home/CompanyMessageSection";
import NoticesEventes from "@/components/home/NoticesEventes";
import { API_URL } from "@/lib/api";
import { serverDataFetcher } from "@/utils/serverDataFetcher";
import Image from "next/image";

export default async function Home() {

  const aboutUsData = await serverDataFetcher<{ abouts: any[] }>(
    `${API_URL.ABOUT_US.ALL}`
  );

  const noticeData = await serverDataFetcher<{ notices: any[] }>(`${API_URL.NOTICE.ALL}`)

  const teamMembersData = await serverDataFetcher<{ teams: any[] }>(
    `${API_URL.TEAM.ALL}`
  );

  const filteredAbout = aboutUsData?.abouts?.filter((item) => item.content_type.toLowerCase() === "company message")

  const mergedAboutUsData = filteredAbout.map((about) => {
    const matchedTeam = teamMembersData?.teams?.find((team) => Number(team.employee_id) === Number(about.serial_number));

    return {
      ...about,
      ...(matchedTeam && {
        emp_name: matchedTeam.name,
        emp_id: matchedTeam.employee_id,
        emp_image: matchedTeam.image,
        emp_designation: matchedTeam.designation
      })
    }
  })

  console.log(mergedAboutUsData)
  return (
    <div>
      {/* company Intro */}
      <CompanyIntro data={aboutUsData?.abouts} />

      {/* notices and Events */}
      <NoticesEventes
        title="NOTICES & EVENTS"
        data={noticeData?.notices[1]} />

      {/* company message section */}
      <CompanyMessageSection data={mergedAboutUsData} />
    </div>
  );
}
