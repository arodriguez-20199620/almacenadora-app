import { Card } from "primereact/card";
import { useUserProfile } from "../hooks/useUserProfile";
import { Spinner } from "../../../shared/components";
import { Link } from "react-router";
import { ProfileCard } from "../components/ProfileCard";

const AccountDetailsPage = () => {
  const { data: user, isLoading } = useUserProfile();

  if (isLoading) {
    return (
      <div className="flex flex-col h-full justify-center items-center w-full">
        <Spinner size={48} />
        <span className="mt-4 text-gray-500">
          Loading your account details...
        </span>
      </div>
    );
  }

  return (
    <ProfileCard
      title="Account Details"
      subTitle="Here you can view the information associated with your user profile."
    >
      <div className="flex items-center gap-2">
        <span className="font-bold min-w-[90px] text-gray-500">Name:</span>
        <span className="text-gray-800">{user.name}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="font-bold min-w-[90px] text-gray-500">Last Name:</span>
        <span className="text-gray-800">{user.lastName}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="font-bold min-w-[90px] text-gray-500">Email:</span>
        <span className="text-gray-800">{user.email}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="font-bold min-w-[90px] text-gray-500">Role:</span>
        <span className="text-gray-800">{user.role}</span>
      </div>
      <div className="mt-6 flex gap-4">
        <Link
          to="/user-settings/edit-account"
          className="text-blue-600 hover:underline font-medium"
        >
          Edit my profile
        </Link>
        <Link
          to="/user-settings/security"
          className="text-blue-600 hover:underline font-medium"
        >
          Change my password
        </Link>
      </div>
    </ProfileCard>
  );
};

export default AccountDetailsPage;
