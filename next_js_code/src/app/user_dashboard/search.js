"use client"


import { useSearchParams,usePathname,useRouter } from "next/navigation"

const Search=({placeholder})=>{
    const searchParams=useSearchParams()
    const pathname=usePathname()
    const {replace} = useRouter()

    const handleSearch=(searchTerm)=>{
        const params = new URLSearchParams(searchParams)
        if(searchTerm){
            params.set("query",searchTerm)
        }else{
            params.delete("query")
        }
        replace(`${pathname}?${params.toString()}`)
    }

    return(
        <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className=" w-full rounded-lg py-[9px] pl-10 text-lg  placeholder:text-gray-500"
        placeholder={placeholder}
        defaultValue={searchParams.get("query")?.toString()}
        onChange={(e)=>{
            handleSearch(e.target.value)
        }}
      />
      
    </div>
    )

}

export default Search