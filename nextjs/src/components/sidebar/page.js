'use client'
import {Listbox, ListboxItem} from "@nextui-org/react";
import { useRouter } from "next/navigation";

export const ListboxWrapper = ({children}) => (
 
  <div className="w-full max-w-[260px] border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
    {children}
  </div>
);

export default function Sidebar() {
  const router = useRouter()
  return (
    <ListboxWrapper>
      <Listbox>
        <ListboxItem className="p-3" onClick={()=> router.push('/admin/dashboard')}>Dashboard</ListboxItem>
        <ListboxItem className="p-3" onClick={()=> router.push('/admin/allProducts')}>Products</ListboxItem>
        <ListboxItem className="p-3" onClick={()=> router.push('/admin/productCategories')}>Categories</ListboxItem>
        <ListboxItem className=" p-3 text-danger" color="danger">
          Logout
        </ListboxItem>
      </Listbox>
    </ListboxWrapper>
  );
}

