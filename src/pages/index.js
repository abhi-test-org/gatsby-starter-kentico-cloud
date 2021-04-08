import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";

const Index = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <div>
        {data?.allKontentItemBlog?.edges?.map(({ node }) => {
          return (
            <div>
              {" "}
              <p>{node?.id}</p>
              <p>{node?.elements?.hello?.value}</p>
              <img src={node?.elements?.image?.value[0]?.url} />
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Index;

export const query = graphql`
  {
    allKontentItemBlog {
      edges {
        node {
          id
          elements {
            hello {
              name
              value
            }
            image {
              name
              type
              value {
                description
                url
              }
            }
          }
        }
      }
    }
  }
`;

Index.propTypes = {
  data: PropTypes.object,
};
