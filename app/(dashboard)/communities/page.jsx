import { DashboardHeader } from "app/components/header";
import CommunitiesList from "./components/CommunitiesList";
import Create from "./components/create-community-form";
import { Suspense } from 'react'
import Loader from "./components/communityLoader";
export const metadata = {
  title: "Communities",
};
import { getCurrentUser } from "app/libs/session";


export default async function Community() {

  const user = await getCurrentUser();

  return (
    <div className="container mt-5">
      <div className="text-black flex justify-between">
        <DashboardHeader
          heading="Communities"
          text="Follow communities that suit you"
        />
        {user && <Create></Create>}
      </div>
      <div className="mt-4">
        <Suspense fallback={<Loader />}>
          <CommunitiesList user={user} />
        </Suspense>
      </div>
    </div>
  );
}
