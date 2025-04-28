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
  title: "Manage Products",
};

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  productImage?: string | null;
  categoryName?: string | null;
  createdAt: Date;
}

const tableData: Product[] = [
  {
    id: 1,
    name: "Product 1",
    price: 12.5,
    stock: 100,
    productImage: "http://localhost:3000/product1.jpg",
    createdAt: new Date()
  },
  {
    id: 2,
    name: "Product 2",
    price: 25.5,
    stock: 30,
    productImage: "http://localhost:3000/product2.webp",
    createdAt: new Date()
  }
];

export default function BlankPage() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Manage Products" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
          <div className="max-w-full overflow-x-auto">
            <div className="flex flex-col gap-4 px-3 mb-4 pt-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-lg pl-3 font-semibold text-gray-800 dark:text-white/90">Recent Products</h3>
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
                      ID
                    </TableCell>
                    <TableCell
                      isHeader
                      className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                    >
                      Name
                    </TableCell>
                    <TableCell
                      isHeader
                      className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                    >
                      Price
                    </TableCell>
                    <TableCell
                      isHeader
                      className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                    >
                      Stock
                    </TableCell>
                    <TableCell
                      isHeader
                      className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                    >
                      Category
                    </TableCell>
                    <TableCell
                      isHeader
                      className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                    >
                      Created At
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
                  {tableData.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                        {product.id}
                      </TableCell>
                      <TableCell className="px-5 py-4 sm:px-6 text-start">
                        <div className="flex items-center gap-3">
                          {product.productImage ?
                            <div className="w-15 h-15 overflow-hidden rounded-sm">
                              <Image
                                width={300}
                                height={300}
                                src={product.productImage}
                                alt={product.name}
                              />
                            </div> :
                            undefined
                          }

                          <span className="text-gray-500 text-theme-sm dark:text-gray-400">{product.name}</span>
                        </div>
                      </TableCell>
                      <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                        {product.price}
                      </TableCell>
                      <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                        {product.stock}
                      </TableCell>
                      <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                        <Badge
                          size="sm"
                          color={
                            product.productImage
                              ? "info"
                              : "light"
                          }
                        >
                          {product.categoryName ?? "Not set"}
                        </Badge>
                      </TableCell>
                      <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                        {product.createdAt.toString()}
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
