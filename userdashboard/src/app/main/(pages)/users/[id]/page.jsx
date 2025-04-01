"use client";
import { useParams, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { setSelectedUser, updateUser } from "@/store//slices/userSlice";
import TabList from "@/components/TabList";
import { FaUser, Fajob, FaWallet, FaRegFolder, FaSuitcase } from "react-icons/fa";
import CompanyDetail from "./compononts/companyDetail";
import FinanceDetail from "./compononts/financeDetail";
import OthersDetail from "./compononts/otherDetails";
import PersonalDetail from "./compononts/personalDetail";

export default function UserPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state) => state.users.selectedUser);
  const [selectedTab, setSelectedTab] = useState("account");

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(`/api/users/${id}`);
      const data = await res.json();
      dispatch(setSelectedUser(data));
    };
    fetchUser();
  }, [id, dispatch]);

  const handleSave = () => {
    dispatch(updateUser(user));
    router.back(); // Go back to list
  };

  if (!user) return <div>Loading...</div>;

  const tabs = [
    { key: "Personal", label: "Personal", icon: <FaUser /> },
    { key: "Company", label: "Company", icon: <FaSuitcase /> },
    { key: "Finance", label: "Finance", icon: <FaWallet /> },
    { key: "Others", label: "Others", icon: <FaRegFolder /> },
  ];
  return (
    <div className="px-10 pt-10 h-full">
      <div className="h-full overflow-hidden">
        <TabList tabs={tabs} onTabChange={setSelectedTab} className="sticky" />

        <div className="mt-6 bg-white p-5 h-full overflow-auto">
          {selectedTab === "account" && <PersonalDetail />}
          {selectedTab === "Company" && <CompanyDetail />}
          {selectedTab === "Finance" && <FinanceDetail />}
          {selectedTab === "Others" && <OthersDetail />}
          {/* Add rest accordingly */}
        </div>
      </div>

      {/* Your form here */}
    </div>
  );
}
