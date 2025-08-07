"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/ui/dropdown-menu"
import verify from "./verify"
import unverify from "./delete"


// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.


export const columns = [
  {
    accessorKey: "verified",
    header: "Status",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey:"name",
    header:"Name"

  },
  {
    accessorKey:"specialization",
    header:"Specialization"

  },
  {
    accessorKey:"license",
    header:"License"
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const data = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(data.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={unverify(data.email)}
            >delete</DropdownMenuItem>
            <DropdownMenuItem 
              onClick={
                verify(data.email)
              }
            >verify</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]