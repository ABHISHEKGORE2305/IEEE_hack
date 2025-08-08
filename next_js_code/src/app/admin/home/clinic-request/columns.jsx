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

// Instead of importing server actions directly, use fetch to call API routes
import { useRouter } from "next/navigation"

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
      const router = useRouter();

      // Handler for verifying a doctor
      const handleVerify = async () => {
        await fetch("/api/doctor/verify", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: data.email }),
        });
        router.refresh();
      };

      // Handler for unverifying (deleting) a doctor
      const handleUnverify = async () => {
        await fetch("/api/doctor/unverify", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: data.email }),
        });
        router.refresh();
      };

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">                       
            <DropdownMenuItem
              onClick={handleUnverify}
            >delete</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem 
              onClick={handleVerify}
            >verify</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]