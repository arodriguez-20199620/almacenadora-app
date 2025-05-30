import { ProfileCard } from "../components/ProfileCard";
import ChangePasswordForm from "../components/ChangePasswordForm";

const SecurityPage = () => {
  return (
    <ProfileCard
      title="Security"
      subTitle="Manage your security settings below."
    >
      <ChangePasswordForm />
    </ProfileCard>
  );
};

export default SecurityPage;
