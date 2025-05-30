import UserForm from "../components/UserForm";
import { useUserProfile } from "../hooks/useUserProfile";
import { Spinner } from "../../../shared/components";
import { ProfileCard } from "../components/ProfileCard";

const EditAccountPage = () => {
  const { data: user, isLoading } = useUserProfile();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-full">
        <Spinner size={48} />
      </div>
    );
  }

  return (
    <ProfileCard
      title="Edit Account"
      subTitle="Update your personal information below."
    >
      <UserForm user={user} />
    </ProfileCard>
  );
};

export default EditAccountPage;
