import { Card, Divider, Text, useMantineTheme } from "@mantine/core";
import "./repository-info.css";
// webhooks
const RepositoryInfo = ({ data, loding }) => {
  const theme = useMantineTheme();

  if (loding) return <p>Loading...</p>;

  return (
    <div
      className="repository-info"
      style={{
        overflow: "auto",
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
        paddingLeft: "15px",
        paddingTop: "15px",
        borderRadius: "10px",
      }}
    >
      <div
        className="repository-info-card"
        style={{ display: "flex", flexDirection: "column" }}
      >
        {" "}
        {data ? (
          <>
            <Text>Name: {data?.repository.name}</Text>
            <Divider my="md" />

            <Text>Owner: {data?.repository.owner}</Text>
            <Divider my="md" />

            <Text>Size: {data?.repository.size}</Text>
            <Divider my="md" />

            <Text>
              Public Status: {data?.repository.publicStatus.toString()}
            </Text>
            <Divider my="md" />

            <Text>Number of Files: {data?.repository.numberOfFiles}</Text>
            <Text>
              <Divider my="md" />
              Yaml Content: <pre>{data?.repository.yamlContent}</pre>
            </Text>
            <Divider my="md" />

            <Text>Webhooks: {data?.repository.webhooks}</Text>
          </>
        ) : (
          <Text style={{ fontSize: "30px", margin: "auto" }}>
            No Repository Selected
          </Text>
        )}
      </div>
    </div>
  );
};

export default RepositoryInfo;
