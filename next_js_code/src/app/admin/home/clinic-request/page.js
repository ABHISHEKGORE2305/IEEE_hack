import { columns, Payment } from "@/app/admin/home/clinic-request/columns"
import { DataTable } from "@/app/admin/home/clinic-request/data-table"
import Searching from "@/components/ui/ui/search"
import search  from "@/components/ui/ui/search"
import getDoctors from "./getdoctors"

export default async function DemoPage() {
  const data = await getDoctors();
  return (
    <div className="container mx-auto py-10">
      <div className="text-3xl text-bold p-6">Clinic Requests</div>
      {/* <Searching placeholder="search clinic">search</Searching> */}
      <DataTable columns={columns} data={data} />
    </div>
  )
}