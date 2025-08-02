import { columns, Payment } from "@/app/admin/clinic-request/columns"
import { DataTable } from "@/app/admin/clinic-request/data-table"
import Searching from "@/components/ui/ui/search"
import search  from "@/components/ui/ui/search"
async function getData(){
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@xample.com",
      clinic:"abhishek",
      phone:"212121212",
      address:"sfsfsadsdf"
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@xample.com",
      clinic:"abhishek",
      phone:"212121212",
      address:"sfsfsadsdf"
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@xample.com",
      clinic:"abhishek",
      phone:"212121212",
      address:"sfsfsadsdf"
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@xample.com",
      clinic:"abhishek",
      phone:"212121212",
      address:"sfsfsadsdf"
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@xample.com",
      clinic:"abhishek",
      phone:"212121212",
      address:"sfsfsadsdf"
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@xample.com",
      clinic:"abhishek",
      phone:"212121212",
      address:"sfsfsadsdf"
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@xample.com",
      clinic:"abhishek",
      phone:"212121212",
      address:"sfsfsadsdf"
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@xample.com",
      clinic:"abhishek",
      phone:"212121212",
      address:"sfsfsadsdf"
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@xample.com",
      clinic:"abhishek",
      phone:"212121212",
      address:"sfsfsadsdf"
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@xample.com",
      clinic:"abhishek",
      phone:"212121212",
      address:"sfsfsadsdf"
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@xample.com",
      clinic:"abhishek",
      phone:"212121212",
      address:"sfsfsadsdf"
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@xample.com",
      clinic:"abhishek",
      phone:"212121212",
      address:"sfsfsadsdf"
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@xample.com",
      clinic:"abhishek",
      phone:"212121212",
      address:"sfsfsadsdf"
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@xample.com",
      clinic:"abhishek",
      phone:"212121212",
      address:"sfsfsadsdf"
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@xample.com",
      clinic:"abhishek",
      phone:"212121212",
      address:"sfsfsadsdf"
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@xample.com",
      clinic:"abhishek",
      phone:"212121212",
      address:"sfsfsadsdf"
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@xample.com",
      clinic:"abhishek",
      phone:"212121212",
      address:"sfsfsadsdf"
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@xample.com",
      clinic:"abhishek",
      phone:"212121212",
      address:"sfsfsadsdf"
    },
    
    // ...
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <div className="text-3xl text-bold p-6">Clinic Requests</div>
      <Searching placeholder="search clinic">search</Searching>
      <DataTable columns={columns} data={data} />
    </div>
  )
}