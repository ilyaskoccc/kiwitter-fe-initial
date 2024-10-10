import Twit from "./Twit";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import PageLayout from "../layout/PageLayout";
import NewTwit from "./NewTwit";

export default function HomePage() {
  const { data } = useQuery({
    queryKey: ["mainPageTwits"],
    queryFn: () =>
      axios.get("https://kiwitter-node-77f5acb427c1.herokuapp.com/twits"),
  });

  return (
    <PageLayout>
      <div className="top-20 mb-6 mx-0 sm:-mx-8">
        <NewTwit />
      </div>
      <div className="bg-white rounded-xl shadow-xl">
        {data
          ? data.data.data.map((twit) => <Twit key={twit.id} item={twit} />)
          : "yükleniyor"}
      </div>
    </PageLayout>
  );
}
