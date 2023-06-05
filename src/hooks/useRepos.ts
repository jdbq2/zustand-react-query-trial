import { QueryFunctionContext, useQuery } from "@tanstack/react-query";
import { githubAPI } from "../api/github";
import { Repo } from "../interfaces/repo";

const fetchRepos = async (ctx: QueryFunctionContext) => {
  const [_, githubUser] = ctx.queryKey;
  console.log(ctx);
  const { data } = await githubAPI.get<Repo[]>(`/users/${githubUser}/repos`);
  return data;
};

export const useFetchRepositories = (githubUser: string) => {
  return useQuery({
    queryKey: ["repos", githubUser],
    queryFn: fetchRepos,
  });
};
