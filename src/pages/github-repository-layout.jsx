import { useQuery } from "@apollo/client";
import { getRepositoryDataByName } from "../main";
import RepositoryDisplay from "./repositories-display/repositories-display";
import RepositoryInfo from "./repository-info/repository-info";

const GithubRepositoryLayout = () => {
    const repositoryData = useQuery(getRepositoryDataByName);

    return ( 
        <div className="RepositoryLayout"style={{display:"flex",height:"100%",width:"100%",alignItems:"center",justifyContent:"center",gap:"10px"}} >
        <RepositoryDisplay refetch ={repositoryData.refetch}/>
        <RepositoryInfo {...repositoryData} />
        </div>
     );
}
 
export default GithubRepositoryLayout;