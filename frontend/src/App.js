import React, { Component } from "react";
import "./App.css";
import { QueryRenderer } from "react-relay";
import environment from "./RelayEnvironment";

const graphql = require("babel-plugin-relay/macro");

const AppQuery = graphql`
  query AppQuery {
    allStudents(first: 5) {
      totalCount
      edges {
        cursor
        node {
          id
          firstName
          lastName
          age
          books {
            edges {
              node {
                id
                subject {
                  id
                  name
                  code
                }
              }
            }
          }
          subjects {
            edges {
              node {
                id
                name
                code
              }
            }
          }
        }
      }
      pageInfo {
        hasNextPage
        startCursor
        endCursor
      }
    }
  }
`;

class App extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={AppQuery}
        variables={{}}
        render={({ error, props }) => {
          if (error) {
            return <div>Error!</div>;
          }
          if (!props) {
            return <div>Loading...</div>;
          }
          let elements = [];
          props.allStudents.edges.forEach(student => {
            let books = [];
            student.node.books.edges.forEach(book => {
              books.push(
                <span key={book.node.id}>{book.node.subject.name} </span>
              );
            });
            elements.push(
              <div key={student.node.id}>
                Name: {student.node.firstName} {student.node.lastName} Books:{" "}
                {books}
              </div>
            );
          });
          elements.push(
            <div key="Total">
              Showing: {props.allStudents.edges.length}/
              {props.allStudents.totalCount}
            </div>
          );
          return elements;
        }}
      />
    );
  }
}

export default App;
