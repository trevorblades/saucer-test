import PropTypes from 'prop-types';
import React, {Fragment} from 'react';
import {Helmet} from 'react-helmet';
import {Link, graphql} from 'gatsby';

export default function Home(props) {
  const {generalSettings, posts} = props.data.wpgraphql;
  const {title, description} = generalSettings;
  return (
    <Fragment>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <h1>{title}</h1>
      <p>{description}</p>
      {posts.nodes.map(node => (
        <div key={node.id}>
          <h3>
            <Link to={`/posts/${node.slug}`}>{node.title}</Link>
          </h3>
          <h5>Posted on {new Date(node.date).toLocaleDateString()}</h5>
          <div dangerouslySetInnerHTML={{__html: node.excerpt}} />
        </div>
      ))}
    </Fragment>
  );
}

Home.propTypes = {
  data: PropTypes.object.isRequired
};

export const pageQuery = graphql`
  {
    wpgraphql {
      generalSettings {
        title
        description
      }
      posts {
        nodes {
          id
          slug
          date
          title
          excerpt
        }
      }
    }
  }
`;
