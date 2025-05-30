import { Card } from "primereact/card";

export const ProfileCard = ({ title, subTitle, children }) => (
  <Card title={title} subTitle={subTitle}>
    <div className="space-y-4 ">{children}</div>
  </Card>
);
