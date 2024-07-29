import { gql } from "@apollo/client"

export const getRepositoriesData =gql`
query getRepositoriesData {
  repositories {
    name
    size
    owner
  }
}
`

export const getRepositoryDataByName=gql`
 query getRepositoryDataByName($name: String!, $owner: String!) {
   repository(name: $name, owner: $owner) {
     name
     size
     owner
     publicStatus
     numberOfFiles
     yamlContent
     webhooks
   }
 }`