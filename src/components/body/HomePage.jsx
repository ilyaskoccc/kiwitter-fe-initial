import Twit from "./Twit";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import PageLayout from "../layout/PageLayout";
import NewTwit from "./NewTwit";
import { UserContext } from "../../context/UserContextProvider";
import { useContext } from "react";
import Search from "./Search";
import { Link } from "react-router-dom";

export default function HomePage() {
  const { data } = useQuery({
    queryKey: ["mainPageTwits"],
    queryFn: () =>
      axios.get("https://kiwitter-node-77f5acb427c1.herokuapp.com/twits"),
  });

  const { data: allUsers } = useQuery({
    queryKey: ["kiwitterUsers"],
    queryFn: () =>
      axios.get("https://kiwitter-node-77f5acb427c1.herokuapp.com/users"),
  });

  const { user, search } = useContext(UserContext);

  const filteredUser =
    allUsers?.data?.data?.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    ) || [];

  return (
    <PageLayout>
      {user ? (
        <div className="top-20 mb-6 mx-0 sm:-mx-8">
          <NewTwit />
        </div>
      ) : (
        ""
      )}

      <div className="bg-white rounded-xl shadow-xl">
        {search.length === 0 ? (
          <>
            {/* Popüler Twitler Alanı */}
            <div className="p-6 bg-gray-100 rounded-t-xl">
              <div className="flex justify-between">
                <Link to="/">
                  <h2 className="text-xl font-bold text-lime-800 mb-4">
                    Tüm Twitler
                  </h2>
                </Link>
                <Link to="/populers">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    Popüler Twitler
                  </h2>
                </Link>
              </div>
            </div>

            {/* Normal Twitler */}
            {data ? (
              data.data.data.map((twit) => <Twit key={twit.id} item={twit} />)
            ) : (
              <div className="p-6 text-center">Yükleniyor</div>
            )}
          </>
        ) : allUsers ? (
          filteredUser.length === 0 ? (
            <div className="p-6 text-center">{`Böyle bir kullanıcı bulunamadı. Belki de yanlış arıyorsunuz. :)`}</div>
          ) : (
            filteredUser?.map((user) => <Search key={user.id} item={user} />)
          )
        ) : (
          <div className="p-6 text-center">Yükleniyor</div>
        )}
      </div>
    </PageLayout>
  );
}
