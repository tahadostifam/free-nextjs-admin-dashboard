import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";
import Image from "next/image";
import Badge from "@/components/ui/badge/Badge";
import { EyeIcon, GroupIcon, PencilIcon } from "@/icons";

export const metadata: Metadata = {
  title: "Manage Users",
};

interface User {
  id: number;
  image: string;
  name: string;
  email: string,
  emailVerified: boolean;
  userRole: string;
  lastLogin: Date;
}

const tableData: User[] = [
  {
    id: 1,
    name: "Taha Dostifam",
    email: "mr.tahadostifam@gmail.com",
    image: "https://avatars.githubusercontent.com/u/72092675?v=4",
    userRole: "Admin",
    emailVerified: true,
    lastLogin: new Date()
  }
];

export default function BlankPage() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Manage Users" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
          <div className="max-w-full overflow-x-auto">
            <div className="flex flex-col gap-4 px-3 mb-4 pt-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-lg pl-3 font-semibold text-gray-800 dark:text-white/90">Recent Users</h3>
              </div>
              <div className="flex items-center gap-3">
                <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-3 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
                  <GroupIcon />
                  Filter
                </button>
              </div>
            </div>

            <div className="min-w-[1102px]">
              <Table>
                {/* Table Header */}
                <TableHeader className="bg-gray-50 dark:bg-transparent border-y border-gray-100 dark:border-white/[0.05]">
                  <TableRow>
                    <TableCell
                      isHeader
                      className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                    >
                      User
                    </TableCell>
                    <TableCell
                      isHeader
                      className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                    >
                      Email Verified
                    </TableCell>
                    <TableCell
                      isHeader
                      className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                    >
                      Role
                    </TableCell>
                    <TableCell
                      isHeader
                      className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                    >
                      Last Login
                    </TableCell>
                    <TableCell
                      isHeader
                      className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                    >
                      Action
                    </TableCell>
                  </TableRow>
                </TableHeader>

                {/* Table Body */}
                <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                  {tableData.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="px-5 py-4 sm:px-6 text-start">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 overflow-hidden rounded-full">
                            <Image
                              width={40}
                              height={40}
                              src={user.image}
                              alt={user.name}
                            />
                          </div>
                          <div>
                            <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                              {user.name}
                            </span>
                            <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                              {user.email}
                            </span>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                        <Badge
                          size="sm"
                          color={
                            user.emailVerified
                              ? "success"
                              : "error"
                          }
                        >
                          {user.emailVerified ? "Verified" : "Not Verified"}
                        </Badge>
                      </TableCell>
                      <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                        {user.userRole}
                      </TableCell>
                      <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                        {user.lastLogin.toString()}
                      </TableCell>
                      <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">

                        <div className="flex gap-2">
                          <button>
                            <PencilIcon width="20" className="cursor-pointer fill-gray-700 dark:fill-gray-400" />
                          </button>

                          <button>
                            <EyeIcon />
                          </button>
                        </div>

                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{/* TODO Users List */ }
{/* TODO Create User */ }
{/* TODO Remove User */ }
{/* TODO Get User Info */ }
{/* TODO Update User */ }
