import { useQuery } from "@tanstack/react-query";
import PageLayout from "../layout/PageLayout";
import { Link } from "react-router-dom";
import axios from "axios";
import Twit from "./Twit";

export default function Populers() {
  const { data: allPopulers } = useQuery({
    queryKey: ["kiwitterPopulers"],
    queryFn: () =>
      axios.get(
        "https://kiwitter-node-77f5acb427c1.herokuapp.com/twits/popular"
      ),
  });

  return (
    <PageLayout>
      <div className="bg-white rounded-xl shadow-xl">
        <>
          {/* Popüler Twitler Alanı */}
          <div className="p-6 bg-gray-100 rounded-t-xl">
            <div className="flex justify-between">
              <Link to="/">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Tüm Twitler
                </h2>
              </Link>
              <Link to="/populers">
                <h2 className="text-xl font-bold text-lime-800 mb-4">
                  Popüler Twitler
                </h2>
              </Link>
            </div>
          </div>
        </>

        {allPopulers ? (
          allPopulers.data.data.map((twit) => (
            <Twit key={twit.id} item={twit} />
          ))
        ) : (
          <div className="p-4 text-center">Popüler twitler yükleniyor...</div>
        )}
      </div>
    </PageLayout>
  );
}
