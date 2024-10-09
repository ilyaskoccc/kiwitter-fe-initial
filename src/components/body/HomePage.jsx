import Twit from "./Twit";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import PageLayout from "../layout/PageLayout";

export default function HomePage() {
  const { data } = useQuery({
    queryKey: ["mainPageTwits"],
    queryFn: () =>
      axios.get("https://kiwitter-node-77f5acb427c1.herokuapp.com/twits"),
  });

  return (
    <PageLayout>
      {data
        ? data.data.data.map((twit) => <Twit key={twit.id} item={twit} />)
        : "yükleniyor"}
    </PageLayout>
  );
}
