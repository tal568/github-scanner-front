import { useQuery } from "@apollo/client";
import RepositoryDisplay from "../repositories-display/repositories-display";
import RepositoryInfo from "../repository-info/repository-info";
import { getRepositoryDataByName } from "../../gql/queries";
import "./github-reposiroty-layout.css";
const GithubRepositoryLayout = () => {
  const repositoryData = useQuery(getRepositoryDataByName);

  return (
    <div
      className="RepositoryLayout"

    >
      <RepositoryDisplay refetch={repositoryData.refetch} />
      <RepositoryInfo {...repositoryData} />
    </div>
  );
};

export default GithubRepositoryLayout;
