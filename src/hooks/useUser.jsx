import axiosClient from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export const useRegister = () => {
  return useMutation({
    mutationKey: ["register"],
    mutationFn: async (data) => {
      const res = await axiosClient.post("/auth/register", data);
      return res.data;
    },
  });
};
