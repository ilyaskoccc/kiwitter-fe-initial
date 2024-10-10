import { useForm } from "react-hook-form";
import { UserContext } from "../../context/UserContextProvider";
import { useContext } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export default function NewTwit({ replyTo = null }) {
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      content: "",
    },
  });

  const { user } = useContext(UserContext);

  const endPoint = replyTo
    ? `https://kiwitter-node-77f5acb427c1.herokuapp.com/twits/${replyTo}/replies`
    : "https://kiwitter-node-77f5acb427c1.herokuapp.com/twits";

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newTwitData) => {
      return axios.post(endPoint, newTwitData, {
        headers: {
          Authorization: localStorage.getItem("kiwitter_user"),
        },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: replyTo ? ["twitDetail", String(replyTo)] : ["mainPageTwits"],
      });
    },
  });

  const contentText = watch("content");

  const sendTwit = (data) => {
    const newTwitData = {
      author_id: user.id,
      ...data,
      replyTo: replyTo,
    };
    mutation.mutate(newTwitData);
  };

  return (
    <div className="bg-white rounded-xl shadow-xl p-7 pb-6 pr-6">
      <p className="text-xl">Ne düşünüyorsun?</p>
      <form onSubmit={handleSubmit(sendTwit)}>
        <textarea
          {...register("content")}
          className="w-full h-24 rounded-lg border border-gray-300 block mt-2 mb-3 p-4"
        ></textarea>
        <div className="flex gap-2 items-center justify-end">
          <span
            className={`text-sm font-bold px-2 ${
              contentText.length > 120 ? "text-red-500" : "text-black/70"
            }`}
          >
            {160 - contentText.length}
          </span>
          <button
            className="h-10 px-5 rounded-lg bg-lime-600 text-white disabled:opacity-70 disabled:cursor-not-allowed"
            disabled={contentText.length === 0 || contentText.length > 160}
          >
            Gönder
          </button>
        </div>
      </form>
    </div>
  );
}
