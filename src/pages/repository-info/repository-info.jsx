import { Card } from "@mantine/core";

// webhooks
const RepositoryInfo = ({ data, loding }) => {
  if (loding) return <p>Loading...</p>;
  if (data === undefined) return <p>select a repository</p>;

  return (
    <div
      className="repository-info ag-theme-quartz"
      style={{ width: "55%", height: "80%" }}
    >
      <Card style={{ overflow: "auto" }}>
        <Card.Section>
          <h3>{data.repository.name}</h3>
          <p>Size: {data.repository.size}</p>
          <p>Owner: {data.repository.owner}</p>
          <p>Public Status: {data.repository.publicStatus.toString()}</p>
          <p>Number of Files: {data.repository.numberOfFiles}</p>
          <p>Yaml Content:</p>
          <pre>{data.repository.yamlContent}</pre>
          <p>Webhooks: {data.repository.webhooks}</p>
        </Card.Section>
      </Card>
    </div>
  );
};

export default RepositoryInfo;
